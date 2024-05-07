const Dream = require('../../models/dream');
const OpenAI = require('openai')

module.exports = {
    create,
    show,
    index,
    getImage,
    delete: deleteDream,
    update,
}

const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
})

async function getImage(req, res) {
    try {
        console.log(req.body.prompt)
        const dreamPrompt = `Generate an image that depicts the following account as a dream: ${req.body.prompt}`;
        const response = await openai.images.generate({
            model: "dall-e-3",
            prompt: dreamPrompt,
            n: 1,
            size: "1024x1024",
          });
        res.json(response)   
    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }
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
    const dreams = await Dream.find({'user': req.user._id})
    res.json(dreams)
}

async function show(req, res) {
    const dream = await Dream.findById(req.params.id)
    res.json(dream)
}

async function update(req, res) {
    const updatedDream = await Dream.findByIdAndUpdate(req.params.id, { text: req.body.editedText}, { new: true })
    res.json(updatedDream)
}