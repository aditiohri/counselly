const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const appointmentSchema = new Schema(
    {
        clientName: String,
        date: String,
        time: String,
        notes: String,
        isOver: {type: Boolean, default: false},
        user: {type: Schema.Types.ObjectId, ref: 'User'}
    }, {
        timestamps: true
    }
)

module.exports = mongoose.model("Appointment", appointmentSchema)