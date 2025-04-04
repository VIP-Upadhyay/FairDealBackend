const mongoose = require("mongoose")
const MongoID = mongoose.Types.ObjectId;

const RouletteTables = mongoose.model('RouletteTables');

const GameUser = mongoose.model("users");

const CONST = require("../../constant");
const commandAcions = require("../helper/socketFunctions");
const roundStartActions = require("./roundStart")
const gameFinishActions = require("./gameFinish");
const logger = require("../../logger");


module.exports.leaveTable = async (requestData, client) => {
    // console.log("Leave table reqdata ",requestData);
    // console.log("Leave table client ",client);
    var requestData = (requestData != null) ? requestData : {}
    if (typeof client.tbid == "undefined" || typeof client.uid == "undefined" || typeof client.seatIndex == "undefined") {
        if(requestData.reason == undefined || requestData.reason != 'autoLeave')
        commandAcions.sendDirectEvent(client.sck, CONST.LEAVE_TABLE, requestData, false, "User session not set, please restart game!");

        return false;
    }

    let userWh = {
        _id: MongoID(client.uid.toString()),
    }
    let userInfo = await GameUser.findOne(userWh, {});
    logger.info("leaveTable userInfo : ", userInfo)
    // console.log("leaveTable userInfo : ", userInfo)
    let wh = {
        _id: MongoID(client.tbid.toString()),
        "playerInfo._id": MongoID(client.uid.toString())
    };
    let tb = await RouletteTables.findOne(wh, {});
    let removedCount=1;
    if (tb) {
        // removedCount = tb.playerInfo.filter(p => p._id.toString() === client.uid.toString()).length;
        let rc=0;
        for(var i=0;i<tb.playerInfo.length;i++){
            if(tb.playerInfo[i]._id == client.uid){
                rc++;
            }
        }
        if(rc!=0){
            removedCount=rc;
        }
    }
    logger.info("leaveTable tb : ", tb);

    if (tb == null) return false;

    if (typeof client.id != "undefined") {
        client.leave(tb._id.toString());
       
        //io.in(client.id).socketsLeave(tb._id.toString());

    }

    let reason = (requestData != null && typeof requestData.reason != "undefined" && requestData.reason) ? requestData.reason : "ManuallyLeave"
    // console.log("No of remove  ",removedCount);
    let playerInfo = tb.playerInfo[client.seatIndex];
    logger.info("leaveTable playerInfo : =>", playerInfo)

    // let updateData = {
    //     $set: {
    //         "playerInfo.$": {}
    //     },
    //     $inc: {
    //         activePlayer: -1
    //     }
    // }
    let updateData = {
        $pull: {
            playerInfo: { _id: MongoID(client.uid.toString()) }
        },
        $inc: {
            activePlayer: -removedCount
        }
    };
    if (tb.activePlayer == 0 && tb.gameState == "RouletteGameStartTimer") {
        let jobId = CONST.GAME_START_TIMER + ":" + tb._id.toString();
        commandAcions.clearJob(jobId)
        updateData["$set"]["gameState"] = "";
    }
    


    logger.info("leaveTable updateData : ", wh, updateData);

    let response = {
        reason: reason,
        tbid: tb._id,
        seatIndex: client.seatIndex
    }

    let tbInfo = await RouletteTables.findOneAndUpdate(wh, updateData, { new: true });
    logger.info("leaveTable tbInfo : ", tbInfo);
    // console.log("leaveTable tbInfo : ", tbInfo);
    if (requestData.reason == undefined || requestData.reason != 'autoLeave') {
        commandAcions.sendDirectEvent(client.sck.toString(), CONST.LEAVETABLEROULETTE, response);

        

    }
    //commandAcions.sendEventInTable(tb._id.toString(), CONST.LEAVETABLEROULETTE, response);

    //if(tbInfo.activePlayer == 0)
    //{
        //await RouletteTables.deleteMany({})
    //}

    await this.manageOnUserLeave(tbInfo);
}

module.exports.manageOnUserLeave = async (tb, client) => {
    logger.info("\nmanageOnUserLeave tb : ", tb);

    const playerInGame = await roundStartActions.getPlayingUserInRound(tb.playerInfo);
    logger.info("manageOnUserLeave playerInGame : ", playerInGame);

    
    if (playerInGame.length == 0 && tb.activePlayer == 0) {
        
        // let wh = {
        //     _id: MongoID(tb._id.toString())
        // }
        // await RouletteTables.deleteOne(wh);
    } else if (tb.activePlayer == 0) {
        this.leaveSingleUser(tb._id)
    }
    

}

module.exports.leaveSingleUser = async (tbid) => {
    // console.log("leaveSingleUser call tbid : ", tbid);
    let tbId = tbid
    let jobId = "LEAVE_SINGLE_USER:" + tbid;
    let delay = commandAcions.AddTime(120);
    const delayRes = await commandAcions.setDelay(jobId, new Date(delay));
    console.log("leaveSingleUser delayRes : ", delayRes);

    const wh1 = {
        _id: MongoID(tbId.toString())
    }
    const tabInfo = await RouletteTables.findOne(wh1, {}).lean();
    console.log("leaveSingleUser tabInfo : ", tabInfo);
    if (tabInfo.activePlayer == 1) {
        let playerInfos = tabInfo.playerInfo
        for (let i = 0; i < playerInfos.length; i++) {
            if (typeof playerInfos[i].seatIndex != "undefined") {
                await this.leaveTable({
                    reason: "singleUserLeave"
                }, {
                    uid: playerInfos[i]._id.toString(),
                    tbid: tabInfo._id.toString(),
                    seatIndex: playerInfos[i].seatIndex,
                    sck: playerInfos[i].sck,
                })
            }
        }

    }
}