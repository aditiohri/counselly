const Appointment = require("../models/appointment");

module.exports = {
    create,
    show,
    index
}

async function create(req, res) {
    const appointment = await Appointment.create(req.body);
    res.status(201).json(appointment);
}

async function show(req, res){
    const appointment = await Appointment.findById(req.params.id);
    res.status(200).json(appointment);
}

async function index(req, res){
    const appointment = await Appointment.find({});
    res.status(200).json(appointment);
}

