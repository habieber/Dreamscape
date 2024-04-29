const Note = require('../../models/note');

module.exports = {
    create,
    show,
    index
}

async function create(req, res) {
    req.body.user = req.user

    try {
        const note = await Note.create(req.body);
        res.json(note)
    } catch (err) {
        res.status(400).json(err)
    }
}

async function show(req, res) {
    const note = await Note.findById(req.params.id)
    res.json(note)
}

async function index(req, res) {
    const notes = await Note.find({})
    res.json(notes)
}