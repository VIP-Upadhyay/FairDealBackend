const { findDisconnectTable } = require(".");
const CONST = require("../../constant");
const RouletteTables = require("../models/RouletteTables");
const commandAcions = require("../helper/socketFunctions");

const mongoose = require('mongoose');
const MongoID = mongoose.Types.ObjectId;


const gameReJoinRoulette = async (payload) => {
    try {
        console.log("data reconnect... ", payload);

        let wh = {
            _id: MongoID(payload.tableId)
        }
        const tabInfo = await RouletteTables.findOne(wh);

        // console.log(tabInfo);

        let roundTime = CONST.BLUETABLETIMER;

        if (tabInfo.whichTable == "blueTable")
            roundTime = CONST.BLUETABLETIMER;
        else
            roundTime = CONST.GREENTABLETIMER;


        // console.log("here is the data sending ",{ timer: roundTime, history: tabInfo.history, gameId: tabInfo.gameId })

        commandAcions.sendEventInTable(tabInfo._id.toString(), CONST.ROULETTE_GAME_START_TIMER, { timer: roundTime, history: tabInfo.history, gameId: tabInfo.gameId });



    } catch (error) {
        console.log("error gameReJoinRoulette", error);
        // logger.error('socketServer.js SEND_MESSAGE_TO_TABLE => ', error);
    }
};

module.exports = { gameReJoinRoulette };