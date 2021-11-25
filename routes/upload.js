var express = require('express');
var router = express.Router();

router.post("/", function(req, res) {
  
    console.log(req.files)
    //console.log(Object.keys(req.files))

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    let uploadedFile = req.files.uploadedFile;
    let uploadPath = __dirname + '/../public/files' + uploadedFile.name;

    uploadedFile.mv(uploadPath, function (err) {
        if (err) {
            res.send(err)
            return res.status(500)
        }

        res.send("File successfully uploaded with name: " + uploadedFile.name)
  });

});

module.exports = router;