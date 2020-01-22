const Client = require("../models/client");

module.exports = {
    create,
    show,
    index,
    delete: deleteOne
}

async function create(req, res) {
    try {
        const client = await Client.create(req.body);
        res.status(201).json(client);
    } catch (e) {
        console.log(e)
    }
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