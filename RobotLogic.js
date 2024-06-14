
const _ = require("underscore")

let betObjectData = [ 
    {
        "number" : [ 
            1, 
            11, 
            12, 
            13, 
            14, 
            15
        ],
        "type" : "6_number",
        "bet" : 50,
        "betIndex" : 148,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            9
        ],
        "type" : "number",
        "bet" : 50,
        "betIndex" : 9,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            7, 
            8, 
            9, 
            10, 
            11, 
            12
        ],
        "type" : "6_number",
        "bet" : 50,
        "betIndex" : 147,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            7, 
            8, 
            9, 
            10, 
            11, 
            12
        ],
        "type" : "6_number",
        "bet" : 50,
        "betIndex" : 147,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            4, 
            5, 
            6, 
            7, 
            8, 
            9
        ],
        "type" : "6_number",
        "bet" : 50,
        "betIndex" : 146,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            4, 
            5, 
            6, 
            7, 
            8, 
            9
        ],
        "type" : "6_number",
        "bet" : 50,
        "betIndex" : 146,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            4, 
            5, 
            6
        ],
        "type" : "3_number",
        "bet" : 50,
        "betIndex" : 134,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            1, 
            2, 
            3, 
            4, 
            5, 
            6
        ],
        "type" : "6_number",
        "bet" : 50,
        "betIndex" : 145,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            1, 
            2, 
            3, 
            4, 
            5, 
            6
        ],
        "type" : "6_number",
        "bet" : 50,
        "betIndex" : 145,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            4, 
            5, 
            6, 
            7, 
            8, 
            9
        ],
        "type" : "6_number",
        "bet" : 50,
        "betIndex" : 146,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            7, 
            8, 
            9, 
            10, 
            11, 
            12
        ],
        "type" : "6_number",
        "bet" : 50,
        "betIndex" : 147,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            7, 
            8, 
            9, 
            10, 
            11, 
            12
        ],
        "type" : "6_number",
        "bet" : 50,
        "betIndex" : 147,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            7, 
            8, 
            9, 
            10, 
            11, 
            12
        ],
        "type" : "6_number",
        "bet" : 50,
        "betIndex" : 147,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            4, 
            5, 
            6
        ],
        "type" : "3_number",
        "bet" : 50,
        "betIndex" : 134,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            7, 
            8, 
            9
        ],
        "type" : "3_number",
        "bet" : 50,
        "betIndex" : 135,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            6, 
            9
        ],
        "type" : "2_number",
        "bet" : 50,
        "betIndex" : 53,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            7, 
            8, 
            9, 
            10, 
            11, 
            12
        ],
        "type" : "6_number",
        "bet" : 50,
        "betIndex" : 147,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            1, 
            11, 
            12, 
            13, 
            14, 
            15
        ],
        "type" : "6_number",
        "bet" : 50,
        "betIndex" : 148,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            1, 
            11, 
            12, 
            13, 
            14, 
            15
        ],
        "type" : "6_number",
        "bet" : 50,
        "betIndex" : 148,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            11
        ],
        "type" : "number",
        "bet" : 50,
        "betIndex" : 11,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            11
        ],
        "type" : "number",
        "bet" : 50,
        "betIndex" : 11,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            11
        ],
        "type" : "number",
        "bet" : 50,
        "betIndex" : 11,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            2, 
            1
        ],
        "type" : "2_number",
        "bet" : 50,
        "betIndex" : 97,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            0
        ],
        "type" : "number",
        "bet" : 50,
        "betIndex" : 0,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            1, 
            11, 
            12, 
            13, 
            14, 
            15
        ],
        "type" : "6_number",
        "bet" : 50,
        "betIndex" : 148,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            9
        ],
        "type" : "number",
        "bet" : 50,
        "betIndex" : 9,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            7, 
            8, 
            9, 
            10, 
            11, 
            12
        ],
        "type" : "6_number",
        "bet" : 50,
        "betIndex" : 147,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            7, 
            8, 
            9, 
            10, 
            11, 
            12
        ],
        "type" : "6_number",
        "bet" : 50,
        "betIndex" : 147,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            4, 
            5, 
            6, 
            7, 
            8, 
            9
        ],
        "type" : "6_number",
        "bet" : 50,
        "betIndex" : 146,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            4, 
            5, 
            6, 
            7, 
            8, 
            9
        ],
        "type" : "6_number",
        "bet" : 50,
        "betIndex" : 146,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            4, 
            5, 
            6
        ],
        "type" : "3_number",
        "bet" : 50,
        "betIndex" : 134,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            1, 
            2, 
            3, 
            4, 
            5, 
            6
        ],
        "type" : "6_number",
        "bet" : 50,
        "betIndex" : 145,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            1, 
            2, 
            3, 
            4, 
            5, 
            6
        ],
        "type" : "6_number",
        "bet" : 50,
        "betIndex" : 145,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            4, 
            5, 
            6, 
            7, 
            8, 
            9
        ],
        "type" : "6_number",
        "bet" : 50,
        "betIndex" : 146,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            7, 
            8, 
            9, 
            10, 
            11, 
            12
        ],
        "type" : "6_number",
        "bet" : 50,
        "betIndex" : 147,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            7, 
            8, 
            9, 
            10, 
            11, 
            12
        ],
        "type" : "6_number",
        "bet" : 50,
        "betIndex" : 147,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            7, 
            8, 
            9, 
            10, 
            11, 
            12
        ],
        "type" : "6_number",
        "bet" : 50,
        "betIndex" : 147,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            4, 
            5, 
            6
        ],
        "type" : "3_number",
        "bet" : 50,
        "betIndex" : 134,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            7, 
            8, 
            9
        ],
        "type" : "3_number",
        "bet" : 50,
        "betIndex" : 135,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            6, 
            9
        ],
        "type" : "2_number",
        "bet" : 50,
        "betIndex" : 53,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            7, 
            8, 
            9, 
            10, 
            11, 
            12
        ],
        "type" : "6_number",
        "bet" : 50,
        "betIndex" : 147,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            1, 
            11, 
            12, 
            13, 
            14, 
            15
        ],
        "type" : "6_number",
        "bet" : 50,
        "betIndex" : 148,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            1, 
            11, 
            12, 
            13, 
            14, 
            15
        ],
        "type" : "6_number",
        "bet" : 50,
        "betIndex" : 148,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            11
        ],
        "type" : "number",
        "bet" : 50,
        "betIndex" : 11,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            11
        ],
        "type" : "number",
        "bet" : 50,
        "betIndex" : 11,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            11
        ],
        "type" : "number",
        "bet" : 50,
        "betIndex" : 11,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            2, 
            1
        ],
        "type" : "2_number",
        "bet" : 50,
        "betIndex" : 97,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            0
        ],
        "type" : "number",
        "bet" : 50,
        "betIndex" : 0,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            1, 
            11, 
            12, 
            13, 
            14, 
            15
        ],
        "type" : "6_number",
        "bet" : 50,
        "betIndex" : 148,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            9
        ],
        "type" : "number",
        "bet" : 50,
        "betIndex" : 9,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            7, 
            8, 
            9, 
            10, 
            11, 
            12
        ],
        "type" : "6_number",
        "bet" : 50,
        "betIndex" : 147,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            7, 
            8, 
            9, 
            10, 
            11, 
            12
        ],
        "type" : "6_number",
        "bet" : 50,
        "betIndex" : 147,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            4, 
            5, 
            6, 
            7, 
            8, 
            9
        ],
        "type" : "6_number",
        "bet" : 50,
        "betIndex" : 146,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            4, 
            5, 
            6, 
            7, 
            8, 
            9
        ],
        "type" : "6_number",
        "bet" : 50,
        "betIndex" : 146,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            4, 
            5, 
            6
        ],
        "type" : "3_number",
        "bet" : 50,
        "betIndex" : 134,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            1, 
            2, 
            3, 
            4, 
            5, 
            6
        ],
        "type" : "6_number",
        "bet" : 50,
        "betIndex" : 145,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            1, 
            2, 
            3, 
            4, 
            5, 
            6
        ],
        "type" : "6_number",
        "bet" : 50,
        "betIndex" : 145,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            4, 
            5, 
            6, 
            7, 
            8, 
            9
        ],
        "type" : "6_number",
        "bet" : 50,
        "betIndex" : 146,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            7, 
            8, 
            9, 
            10, 
            11, 
            12
        ],
        "type" : "6_number",
        "bet" : 50,
        "betIndex" : 147,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            7, 
            8, 
            9, 
            10, 
            11, 
            12
        ],
        "type" : "6_number",
        "bet" : 50,
        "betIndex" : 147,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            7, 
            8, 
            9, 
            10, 
            11, 
            12
        ],
        "type" : "6_number",
        "bet" : 50,
        "betIndex" : 147,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            4, 
            5, 
            6
        ],
        "type" : "3_number",
        "bet" : 50,
        "betIndex" : 134,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            7, 
            8, 
            9
        ],
        "type" : "3_number",
        "bet" : 50,
        "betIndex" : 135,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            6, 
            9
        ],
        "type" : "2_number",
        "bet" : 50,
        "betIndex" : 53,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            7, 
            8, 
            9, 
            10, 
            11, 
            12
        ],
        "type" : "6_number",
        "bet" : 50,
        "betIndex" : 147,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            1, 
            11, 
            12, 
            13, 
            14, 
            15
        ],
        "type" : "6_number",
        "bet" : 50,
        "betIndex" : 148,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            1, 
            11, 
            12, 
            13, 
            14, 
            15
        ],
        "type" : "6_number",
        "bet" : 50,
        "betIndex" : 148,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            11
        ],
        "type" : "number",
        "bet" : 50,
        "betIndex" : 11,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            11
        ],
        "type" : "number",
        "bet" : 50,
        "betIndex" : 11,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            11
        ],
        "type" : "number",
        "bet" : 50,
        "betIndex" : 11,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            2, 
            1
        ],
        "type" : "2_number",
        "bet" : 50,
        "betIndex" : 97,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            0
        ],
        "type" : "number",
        "bet" : 50,
        "betIndex" : 0,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            8
        ],
        "type" : "number",
        "bet" : 50,
        "betIndex" : 8,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            8
        ],
        "type" : "number",
        "bet" : 50,
        "betIndex" : 8,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            8
        ],
        "type" : "number",
        "bet" : 50,
        "betIndex" : 8,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            5
        ],
        "type" : "number",
        "bet" : 50,
        "betIndex" : 5,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            2, 
            1
        ],
        "type" : "2_number",
        "bet" : 50,
        "betIndex" : 97,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            2
        ],
        "type" : "number",
        "bet" : 50,
        "betIndex" : 2,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            2
        ],
        "type" : "number",
        "bet" : 50,
        "betIndex" : 2,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            8, 
            11
        ],
        "type" : "2_number",
        "bet" : 50,
        "betIndex" : 65,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            8
        ],
        "type" : "number",
        "bet" : 50,
        "betIndex" : 8,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            5
        ],
        "type" : "number",
        "bet" : 50,
        "betIndex" : 5,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            5
        ],
        "type" : "number",
        "bet" : 50,
        "betIndex" : 5,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            5
        ],
        "type" : "number",
        "bet" : 50,
        "betIndex" : 5,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            5
        ],
        "type" : "number",
        "bet" : 50,
        "betIndex" : 5,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            5
        ],
        "type" : "number",
        "bet" : 50,
        "betIndex" : 5,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            5
        ],
        "type" : "number",
        "bet" : 50,
        "betIndex" : 5,
        "coin" : "[50]"
    }, 
    {
        "number" : [ 
            5
        ],
        "type" : "number",
        "bet" : 50,
        "betIndex" : 5,
        "coin" : "[50]"
    }
]

itemIndex = 7
winnerData = [];
TotalWinAmount = 0
for (let i = 0; i < betObjectData.length; i++) {
    if (betObjectData[i].bet != undefined) {

        console.log("betObjectData[i] ", betObjectData[i])

        if (betObjectData[i].type == "number" && betObjectData[i].number.indexOf(itemIndex) != -1) {
            winnerData.push({
                uid: "tbInfo.playerInfo[x]._id",
                seatIndex: 0,
                winAmount: betObjectData[i].bet * 35,
            })

            TotalWinAmount = TotalWinAmount + betObjectData[i].bet * 35;
        }

        if (betObjectData[i].type == "1to34" && betObjectData[i].number.indexOf(itemIndex) != -1) {
            winnerData.push({
                uid: "tbInfo.playerInfo[x]._id",
                seatIndex: 0,
                winAmount: betObjectData[i].bet * 3,
            })

            TotalWinAmount = TotalWinAmount + betObjectData[i].bet * 3;
        }

        if (betObjectData[i].type == "2to35" && betObjectData[i].number.indexOf(itemIndex) != -1) {
            winnerData.push({
                uid: "tbInfo.playerInfo[x]._id",
                seatIndex: 0,
                winAmount: betObjectData[i].bet * 3,
            })

            TotalWinAmount = TotalWinAmount + betObjectData[i].bet * 3;
        }


        if (betObjectData[i].type == "3to36" && betObjectData[i].number.indexOf(itemIndex) != -1) {
            winnerData.push({
                uid: "tbInfo.playerInfo[x]._id",
                seatIndex: 0,
                winAmount: betObjectData[i].bet * 3,
            })

            TotalWinAmount = TotalWinAmount + betObjectData[i].bet * 3;
        }

        if (betObjectData[i].type == "1st12" && betObjectData[i].number.indexOf(itemIndex) != -1) {
            winnerData.push({
                uid: "tbInfo.playerInfo[x]._id",
                seatIndex: 0,
                winAmount: betObjectData[i].bet * 3,
            })

            TotalWinAmount = TotalWinAmount + betObjectData[i].bet * 3;
        }

        if (betObjectData[i].type == "2nd12" && betObjectData[i].number.indexOf(itemIndex) != -1) {
            winnerData.push({
                uid: "tbInfo.playerInfo[x]._id",
                seatIndex: 0,
                winAmount: betObjectData[i].bet * 3,
            })

            TotalWinAmount = TotalWinAmount + betObjectData[i].bet * 3;
        }

        if (betObjectData[i].type == "3rd12" && betObjectData[i].number.indexOf(itemIndex) != -1) {
            winnerData.push({
                uid: "tbInfo.playerInfo[x]._id",
                seatIndex: 0,
                winAmount: betObjectData[i].bet * 3,
            })

            TotalWinAmount = TotalWinAmount + betObjectData[i].bet * 3;
        }

        if (betObjectData[i].type == "1to18" && betObjectData[i].number.indexOf(itemIndex) != -1) {
            winnerData.push({
                uid: "tbInfo.playerInfo[x]._id",
                seatIndex: 0,
                winAmount: betObjectData[i].bet * 2,
            })

            TotalWinAmount = TotalWinAmount + betObjectData[i].bet * 2;
        }


        if (betObjectData[i].type == "19to36" && betObjectData[i].number.indexOf(itemIndex) != -1) {
            winnerData.push({
                uid: "tbInfo.playerInfo[x]._id",
                seatIndex: 0,
                winAmount: betObjectData[i].bet * 2,
            })

            TotalWinAmount = TotalWinAmount + betObjectData[i].bet * 2;
        }

        if (betObjectData[i].type == "odd" && betObjectData[i].number.indexOf(itemIndex) != -1) {
            winnerData.push({
                uid: "tbInfo.playerInfo[x]._id",
                seatIndex: 0,
                winAmount: betObjectData[i].bet * 2,
            })

            TotalWinAmount = TotalWinAmount + betObjectData[i].bet * 2;
        }

        if (betObjectData[i].type == "even" && betObjectData[i].number.indexOf(itemIndex) != -1) {
            winnerData.push({
                uid: "tbInfo.playerInfo[x]._id",
                seatIndex: 0,
                winAmount: betObjectData[i].bet * 2,
            })

            TotalWinAmount = TotalWinAmount + betObjectData[i].bet * 2;
        }


        if (betObjectData[i].type == "red" && betObjectData[i].number.indexOf(itemIndex) != -1) {
            winnerData.push({
                uid: "tbInfo.playerInfo[x]._id",
                seatIndex: 0,
                winAmount: betObjectData[i].bet * 2,
            })

            TotalWinAmount = TotalWinAmount + betObjectData[i].bet * 2;
        }

        if (betObjectData[i].type == "black" && betObjectData[i].number.indexOf(itemIndex) != -1) {
            winnerData.push({
                uid: "tbInfo.playerInfo[x]._id",
                seatIndex: 0,
                winAmount: betObjectData[i].bet * 2,
            })

            TotalWinAmount = TotalWinAmount + betObjectData[i].bet * 2;
        }


        if (betObjectData[i].type == "2_number" && betObjectData[i].number.indexOf(itemIndex) != -1) {
            winnerData.push({
                uid: "tbInfo.playerInfo[x]._id",
                seatIndex: 0,
                winAmount: betObjectData[i].bet * 17.5,
            })

            TotalWinAmount = TotalWinAmount + betObjectData[i].bet * 17.5;
        }


        if (betObjectData[i].type == "3_number" && betObjectData[i].number.indexOf(itemIndex) != -1) {
            winnerData.push({
                uid: "tbInfo.playerInfo[x]._id",
                seatIndex: 0,
                winAmount: betObjectData[i].bet * 11.66,
            })

            TotalWinAmount = TotalWinAmount + betObjectData[i].bet * 11.66;
        }

        if (betObjectData[i].type == "4_number" && betObjectData[i].number.indexOf(itemIndex) != -1) {
            winnerData.push({
                uid: "tbInfo.playerInfo[x]._id",
                seatIndex: 0,
                winAmount: betObjectData[i].bet * 8.75,
            })

            TotalWinAmount = TotalWinAmount + betObjectData[i].bet * 8.75;
        }


        if (betObjectData[i].type == "6_number" && betObjectData[i].number.indexOf(itemIndex) != -1) {
            winnerData.push({
                uid: "tbInfo.playerInfo[x]._id",
                seatIndex: 0,
                winAmount: betObjectData[i].bet * 5.83,
            })

            TotalWinAmount = TotalWinAmount + betObjectData[i].bet * 5.83;
        }


    }


}
console.log("TotalWinAmount ", TotalWinAmount)

console.log("winnerData ",winnerData)

return false 


requestData ={
    betData:
    [
    { number: '[24]', type: 'number', bet: 2, betIndex: 24, coin: '[2]' },
    { number: '[23]', type: 'number', bet: 2, betIndex: 23, coin: '[2]' },
    { number: '[26]', type: 'number', bet: 2, betIndex: 26, coin: '[2]' }
  ]
}

  let currentBet =  requestData.betData.reduce((accumulator, currentValue) => {
    console.log("accumulator.bet ",accumulator)
    console.log("currentValue.bet ",currentValue)

    return accumulator + currentValue.bet
}, 0);

console.log("currentBet ",currentBet)

return false
function RobotAction(table,card){
    const playerInfo = table.playerInfo[table.turnSeatIndex]

    let totalPlayer =  getPlayingUserInRound(table.playerInfo)  

    let robotCardValue = valueOfCard([ 'C-3-0', 'D-4-0', 'C-11-0' ])

    function GetRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    //robotCardValue 
    // 5 4 3 2 1
    if(potlimit/2 <= potValue && GetRandomInt(0,1) && playStatus == "blind"){
        // Card Seen 
    }


    if(playerInfo.playerStatus == "chal"){
        //chal Valu Funcation call
        
        //1. check potlimit over ho gaya tha ke nahi
        if(table.chalLimit > table.chalValue*2){
            if(robotCardValue == 5 || robotCardValue == 4 || robotCardValue == 3 ){
                // double chalValue value and Chal
                //Chal chalValue 
            }else if(robotCardValue == 2 || robotCardValue == 1){
                //Chal chalValue Normal
                if(totalPlayer == 2){
                    //Check Pot Limit or turn Number 
                    // Show karna he ya chal 

                }else{
                    // Chal Ya Pack 
                    //check Pot Limit or turn Number 
                }

            }else {
                //Normal Card 
                // Pack Or Chal or Show 
                if(totalPlayer == 2){
                    //Check Pot Limit or turn Number 
                    // Show karna he ya chal 

                }else{
                    // Chal Ya Pack 
                    //check Pot Limit or turn Number 
                }
            }
        }else {
            if(robotCardValue == 5 || robotCardValue == 4 || robotCardValue == 3 || robotCardValue == 2 || robotCardValue == 1 ){
                // Cahal 
            }else{
                // Normal Card 
                // Pack Or Chal or Show 
                if(totalPlayer == 2){
                    //Check Pot Limit or turn Number 
                    // Show karna he ya chal 

                }else{
                    // Chal Ya Pack 
                    //check Pot Limit or turn Number 
                }
            }
        }

    }else if(playerInfo.playerStatus == "blind"){
        //Blind Valu Funcation call
        //1. check potlimit over ho gaya tha ke nahi
        if(table.chalLimit > table.chalValue*2){
            if(robotCardValue == 5 || robotCardValue == 4 || robotCardValue == 3 ){
                // double chalValue  value and Chal
                //Blind chalValue 
            }else if(robotCardValue == 2 || robotCardValue == 1){
                //Blind chalValue Normal
                if(totalPlayer == 2){
                    //Check Pot Limit or turn Number 
                    // Show karna he ya chal 

                }else{
                    // Chal Ya Pack 
                    //check Pot Limit or turn Number 
                }
            }
        }else {
            if(robotCardValue == 5 || robotCardValue == 4 || robotCardValue == 3 || robotCardValue == 2 || robotCardValue == 1 ){
                // Cahal 
            }else{
                //Nomral Card 
                // Pack Or Chal or Show 
            }
        }

    }
    
}
console.log("valueOfCard ",valueOfCard([ 'C-3-0', 'D-4-0', 'C-11-0' ]))

function valueOfCard(card){

    let cardsDiff =  DiffColor(card)
    console.log("cardsDiff ",cardsDiff)
    if(PureRonForCheck(cardsDiff)){
        return 5
    }else if(TeenForCheck(cardsDiff) ){
        return 4
    }else if(RonForCheck(cardsDiff)){
        return 3
    }else if(ColorCardCheck(cardsDiff)){
        return 2
    }else if(PairForCheck(cardsDiff)){
        return 1
    }
    return 0;
}


function DiffColor  (card) {
    let obj = {
        cards: [],
        color: []
    };
    for (let i in card) {
        if (card[i] != null) {
            let d = card[i].split('-');
            obj.cards.push(parseInt(d[1]));
            obj.color.push(d[0]);
        }
    }
    return obj;
}

function TeenForCheck  (a) {
    let flag = true;

    let point = _.filter(a.cards, function (num) { return num != 0; });
    let count = 0;

    for (let x in a.color) {

        if (a.color[x] == a.color[0]) {
            count++;
        }
    }

    if (count >= 2) {
        return false
    }

    if (point.length == 1) {
        return flag;
    }

    for (let x in point) {
        if (point[x] != point[0]) {
            flag = false;
            break;
        }
    }

    return flag;
}


function PureRonForCheck (a) {

    let flag = true;

    a.cards.sort(function (e, f) {
        return e - f
    });


    if (a.cards[0] == 1) {
        if ((a.cards.indexOf(12) || a.cards.indexOf(13)) && !a.cards.indexOf(2)) {
            removedCard = a.cards.splice(0, 1);
            a.cards.push(removedCard[0]);
        }
    }


    if (flag == true) {
        for (let x in a.color) {
            if (a.color[x] != a.color[0]) {
                flag = false;
                break;
            }
        }
    }

    if (flag == true) {
        for (let i = 1; i < a.cards.length; i++) {

            if (a.cards[i] - a.cards[i - 1] == 1 || a.cards[i] - a.cards[i - 1] == -12) {


                flag = true;
            } else {
                flag = false;
                break;
            }
        }
    }
    return flag;

}


function RonForCheck (a) {

    let flag = true;

    a.cards.sort(function (e, f) {
        return e - f
    });


    if (a.cards[0] == 1) {
        if ((a.cards.indexOf(12) || a.cards.indexOf(13)) && !a.cards.indexOf(2)) {
            removedCard = a.cards.splice(0, 1);
            a.cards.push(removedCard[0]);
        }
    }


    // if (flag == true) {
    //     for (let x in a.color) {
    //         if (a.color[x] != a.color[0]) {
    //             flag = false;
    //             break;
    //         }
    //     }
    // }

    if (flag == true) {
        for (let i = 1; i < a.cards.length; i++) {

            if (a.cards[i] - a.cards[i - 1] == 1 || a.cards[i] - a.cards[i - 1] == -12) {


                flag = true;
            } else {
                flag = false;
                break;
            }
        }
    }
    return flag;

}


function ColorCardCheck  (a) {
    let flag = true;
    //let point = _.filter(a.cards, function (num) { return num != 0; });
    let count = 0;

    for (let x in a.color) {

        if (a.color[x] == a.color[0]) {
            count++;
        }
    }

    if (count <= 2) {
        return false
    }
  
    return flag;
}

function PairForCheck  (a) {
    let flag = true;

    let point = _.filter(a.cards, function (num) { return num != 0; });

    console.log("Point ",point)
    let count = 0

    for (let x in point) {

        if (point[x] == point[0]) {
            count++
        }
    }
    console.log("count ",count)
    if(count < 2){
        return false
    }
    return flag;
}


