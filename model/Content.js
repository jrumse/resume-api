const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contentSchema = new Schema({
    header: {type: String, required: true },
    message: {type: String, required: true},
    position: {type: String, required: true},
    photo: {type: String, required: true}
});

module.exports = mongoose.model("Content", contentSchema);