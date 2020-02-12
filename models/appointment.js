const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    summary: String,
    img: String,
    hasFeedback: {type: Boolean, default: false}
}, {
    timestamps: true
})

const appointmentSchema = new mongoose.Schema(
    {
        clientName: String,
        date: Date,
        time: String,
        notes: [noteSchema],
        isOver: {type: Boolean, default: false},
        user: {type: Schema.Types.ObjectId, ref: 'User'}
    }, {
        timestamps: true
    }
)

module.exports = mongoose.model("Appointment", appointmentSchema)