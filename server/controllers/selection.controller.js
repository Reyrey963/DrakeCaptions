const { Selection } = require("../models/selection.model");

module.exports.index = (req, res)=>{
    res.json({
        message: "working"
    });
}

module.exports.findAll = (req, res)=>{
    Selection.find({})
        .then(selections => res.json(selections))
        .catch(err => res.json(err));
}

module.exports.findById =(req, res)=>{
    Selection.findOne({_id: req.params.id})
        .then(selection => res.json(selection))
        .catch(err => res.json(err));
}

module.exports.create = (req, res) =>{
    Selection.create(req.body)
        .then(selection => res.json(selection))
        .catch(err => res.status(400).json(err));
}

module.exports.delete = (req, res) =>{
    Selection.deleteOne({_id: req.params.id})
        .then(r => res.json(r))
        .catch(err => res.json(err));
}

module.exports.update = (req, res) =>{
    Selection.updateOne({_id: req.params.id}, req.body, {new:true, runValidators: true})
        .then(r => res.json(r))
        .catch(err => res.status(400).json(err));
}