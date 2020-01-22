const Client = require("../models/appointment");

module.exports = {
    create,
    show,
    index,
    delete: deleteOne
}

async function create(req, res) {
    const client = await Client.create(req.body);
    res.status(201).json(client);
}

async function show(req, res) {
    const client = await Client.findById(req.params.id);
    res.status(200).json(client);
}

async function index(req, res) {
    const client = await Client.find({});
    res.status(200).json(client);
}

async function deleteOne(req, res) {
    const deletedClient = await Client.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedClient)
}