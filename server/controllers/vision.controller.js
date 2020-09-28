module.exports.getLabels = async (req, res) =>{
    console.log("here");
    try{
        const vision = require('@google-cloud/vision');
        const client = new vision.ImageAnnotatorClient();
        console.log(req.body.image);
        const [result] = await client.labelDetection(Buffer.from(req.body.image, 'base64'));
        console.log("Result");
        console.log(result);
        const labels = result.labelAnnotations;
        console.log(labels);
        res.json(labels);
    }
    catch(e){
        console.log(e);
        res.json(e);
    }
    
}