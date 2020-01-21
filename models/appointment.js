const mongoose = require("mongoose");
const appointmentSchema = new mongoose.Schema(
    {
        Date: String,
        Time: String,
        Notes: String,
        isOver: {type: Boolean, default: false}
    }, {
        timestamps: true
    }
)

module.exports = mongoose.model("Appointment", appointmentSchema)