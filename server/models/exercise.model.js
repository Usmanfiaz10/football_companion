const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Exercise title is required'],
    },
    videoId: {
        type: String,
        required: [true, 'Video id is required']
    },
    description: {
        type: String,
        required: [true, 'Description is required']
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Exercise', exerciseSchema);