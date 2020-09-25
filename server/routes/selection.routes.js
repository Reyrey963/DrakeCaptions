const SelectionController = require('../controllers/selection.controller');

module.exports = function(app){
    //Create a selection
    app.post('/api/selections', SelectionController.create);
    //Get all selections
    app.get('/api/selections', SelectionController.findAll);
    //Delete a selection by ID
    app.delete('/api/selections/:id', SelectionController.delete);
    //Update a selection by ID
    app.put('/api/selections/:id', SelectionController.update);
    //Find a selection by ID
    app.get('/api/selections/:id', SelectionController.findById);
}