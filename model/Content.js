const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contentSchema = new Schema({
    _id: { type: mongoose.Types.ObjectId, required: true },
    header: {type: String, required: true },
    message: {type: String, required: true},
    position: {type: String, required: true},
    photo: {type: String, required: true}
});

module.exports = mongoose.model("Content", contentSchema);