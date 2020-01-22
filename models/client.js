const mongoose = require('mongoose');
const clientSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    userID: String
}, {
    timestamps: true
})

module.export = mongoose.model("Client", clientSchema)