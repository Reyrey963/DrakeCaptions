const { Lyric } = require("../models/lyric.model");

module.exports.index = (req, res)=>{
    res.json({
        message: "working"
    });
}

module.exports.findAll = (req, res)=>{
    Lyric.find({})
        .then(lyrics => res.json(lyrics))
        .catch(err => res.json(err));
}

module.exports.findById =(req, res)=>{
    Lyric.findOne({_id: req.params.id})
        .then(lyric => res.json(lyric))
        .catch(err => res.json(err));
}

module.exports.create = (req, res) =>{
    //Check if lyric is already in the database
    const lyric = req.body.lyric;
    Lyric.find({lyric: lyric})
        .then(response => {
            //If lyric does not exist then create it
            if(response.length == 0){
                Lyric.create(req.body)
                    .then(lyric => res.json(lyric))
                    .catch(err => res.status(400).json(err));
            }else{
                //If lyric is already in the database then update the current one
                Lyric.findOneAndUpdate({lyric: lyric}, req.body, {new:true, runValidators:true, useFindAndModify: false})
                    .then(r => res.json(r))
                    .catch(err => res.status(400).json(err));
            }
        })
}

module.exports.delete = (req, res) =>{
    Lyric.deleteOne({_id: req.params.id})
        .then(r => res.json(r))
        .catch(err => res.json(err));
}

module.exports.update = (req, res) =>{
    Lyric.updateOne({_id: req.params.id}, req.body, {new:true, runValidators: true})
        .then(r => res.json(r))
        .catch(err => res.status(400).json(err));
}