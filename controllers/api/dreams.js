const Dream = require('../../models/dream');
const OpenAI = require('openai')

module.exports = {
    create,
    show,
    index,
    getImage,
    delete: deleteDream,
}

const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
})

async function getImage(req, res) {
    try {
        console.log(req.body.prompt)
        // const response = await openai.images.generate({
        //     prompt: req.body.prompt,
        //     n:1,
        //     size: "512x512"
        // })     
        // res.json(response)   
    } catch (err) {
        res.status(400).json(err)
    }
}

async function create(req, res) {
    req.body.user = req.user

    try {
        const note = await Dream.create(req.body);
        res.json(note)
    } catch (err) {
        res.status(400).json(err)
    }
}

async function deleteDream(req, res) {
    try {
        console.log('inside delete ctrl func')
        const dream = await Dream.findByIdAndDelete(req.params.id)
        if (!dream) {
            return res.status(404).json({ message: 'Dream not found' });
        }
        res.json({ message: 'Note deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
}

async function index(req, res) {
    const dreams = await Dream.find({})
    res.json(dreams)
}

async function show(req, res) {
    console.log(req.params.id)
    const dream = await Dream.findById(req.params.id)
    res.json(dream)
}