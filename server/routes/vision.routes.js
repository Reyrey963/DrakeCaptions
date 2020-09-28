const VisionController = require('../controllers/vision.controller');

module.exports = function(app){
    //Test to see if the server is working
    app.post('/api/vision/getlabels', VisionController.getLabels);
    
}