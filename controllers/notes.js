const Appointment = require('../models/appointment');

module.exports = {
    create,
    delete: deleteNote
}

function create(req, res) {
    Appointment.findById(req.params.id, function(err, appt) {
        appt.notes.push(req.body);
        appt.save(function(err) {
            console.log('error from notes controller: ', err)
        });
        res.status(201).json(appt);
    })
}


function deleteNote(req, res) {
    Appointment.findById(req.params.id, function(err, appt) {
        if (err) return res.render(`/all-appointments`);
        let note = appt.notes;
        let id = note.indexOf(note)
        note.splice(id, 1)
        appt.save(function(err) {
            res.redirect(`/api/appointments/${appt._id}`)
        })
    })
}