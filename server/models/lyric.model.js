const mongoose = require('mongoose');

const LyricSchema = new mongoose.Schema({
    lyric: {type: String,
        required: [true, "lyric is required"]},
    artist: {type: String,
        required: [true, "artist is required"]},
    song: {type: String,
        required: [true, "song is required"]},
    tags: {type: [String]},
    }, 
    {timestamps: true});

module.exports.Lyric = mongoose.model('Lyric', LyricSchema);