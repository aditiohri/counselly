const mongoose = require("mongoose");
const appointmentSchema = new mongoose.Schema(
    {
        clientName: String,
        date: String,
        time: String,
        notes: String,
        isOver: {type: Boolean, default: false},
        userID: String
    }, {
        timestamps: true
    }
)

module.exports = mongoose.model("Appointment", appointmentSchema)