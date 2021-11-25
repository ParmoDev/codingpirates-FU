var express = require('express');
var router = express.Router();
var fs = require('fs');

let tracks;
let trackData;


router.get('/', function(req, res) {
  fs.readdir('public/files', function (err, files) {
    if (err) {
      console.log(err)
      return
    }

    tracks = []

    files.forEach(function (file) {
      trackData = {
        name: file,
        path: 'assets/Audio/' + file
      }

      tracks.push(trackData)
    });

    res.send(tracks)
    return tracks;
  })
});

module.exports = router;