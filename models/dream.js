const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dreamSchema = new Schema({
    text: {type: String, required: true},
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false}
}, {
    timestamps: true
});

module.exports = mongoose.model('Dream', dreamSchema)