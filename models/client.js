const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const clientSchema = new mongoose.Schema(
    {
    name: String,
    email: String,
    phone: String,
    user: {type: Schema.Types.ObjectId, ref: 'User'}
}, {
    timestamps: true
})

module.exports = mongoose.model("Client", clientSchema)