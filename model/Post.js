const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    _id: { type: mongoose.Types.ObjectId, required: true },
    title: {type: String, required: true },
    type: {type: String, required: true},
    category: {type: String, required: true},
    content: {type: [mongoose.Types.ObjectId], required: true}
});

module.exports = mongoose.model("Post", postSchema);