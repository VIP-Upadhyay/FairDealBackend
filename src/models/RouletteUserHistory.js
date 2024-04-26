const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameUser = mongoose.model("users");

const collectionName = 'RouletteUserHistory';

const RouletteUserSchema = new Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: GameUser },
    ballposition:{ type: Number},
    play:{ type: Number},
    won:{ type: Number},
    uuid:{ type: String, default: "" },
    createdAt: { type: Date, default: Date.now }
}, { versionKey: false });

module.exports = mongoose.model(collectionName, RouletteUserSchema, collectionName);