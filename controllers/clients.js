const Client = require("../models/client");

module.exports = {
    create,
    show,
    index,
    delete: deleteOne
}

async function create(req, res) {
    try {
        console.log('req.body from controllers/clients.js', req)
        const client = new Client(req.body)
        client.user = req.user._id;
        await client.save();
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
    const client = await Client.find({ user: req.user._id });
    res.status(200).json(client);
}

async function deleteOne(req, res) {
    const deletedClient = await Client.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedClient)
}