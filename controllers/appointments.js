const Appointment = require("../models/appointment");

module.exports = {
    create,
    show,
    index,
    delete: deleteOne
}

async function create(req, res) {
    console.log('appt create controllers printing req.body: ', req.body)
    const appointment = new Appointment(req.body);
// req.user is the logged in user
    appointment.user = req.user._id;
    await appointment.save();
    res.status(201).json(appointment);
}

async function show(req, res){
    const appointment = await Appointment.findById(req.params.id);
    res.status(200).json(appointment);
}

async function index(req, res){
    const appointment = await Appointment.find({ user: req.user._id });
    res.status(200).json(appointment);
}

async function deleteOne(req, res) {
    const deletedAppt = await Appointment.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedAppt)
}
