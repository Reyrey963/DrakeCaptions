const LyricController = require('../controllers/lyric.controller');

module.exports = function(app){
    //Test to see if the server is working
    app.get('/api', LyricController.index);
    //Create a lyric
    app.post('/api/lyrics', LyricController.create);
    //Get all lyrics
    app.get('/api/lyrics', LyricController.findAll);
    //Delete a lyric by ID
    app.delete('/api/lyrics/:id', LyricController.delete);
    //Update a lyric by ID
    app.put('/api/lyrics/:id', LyricController.update);
    //Find a lyric by ID
    app.get('/api/lyrics/:id', LyricController.findById);
}