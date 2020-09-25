const mongoose = require('mongoose');

const SelectionSchema = new mongoose.Schema({
    lyric_id: {type: String,
        required: [true, "lyric_id is required"]},
    artist: {type: String,
        required: [true, "artist is required"]},
    image_tags: {type: [String]},
    lyric_tags: {type: [String]},
}, {timestamps: true});

module.exports.Selection = mongoose.model('Selection', SelectionSchema);