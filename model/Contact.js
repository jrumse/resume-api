const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    name: {type: String, required: true },
    email: {type: String, required: true},
    number: {type: String, required: false},
    message: {type: String, required: true},
    timestamp: {type: Date, required: true}
});

module.exports = mongoose.model("Contact", contactSchema);