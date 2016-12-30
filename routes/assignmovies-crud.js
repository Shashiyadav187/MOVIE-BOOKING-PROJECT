var express = require('express');
var router = express.Router();//?????
bodyParser = require('body-parser'), //parses information from POST


//Any requests to this controller must pass through this 'use' function
//Copy and pasted from method-override
router.use(bodyParser.urlencoded({ extended: true }))


var mongoose = require('mongoose');

var assignSchema = mongoose.Schema({

  // moviTitle: String,
  // moviLanguage: String,
  // moviGenre: String,
  // moviPoster: String,
  // moviDirector: String,
  // moviActors: String
     assignCity:String,
     assignThr:String,
     assignMovie:String,
     assignDTfr:String,
     assignDTto:String
 });

var AsgnMovie = mongoose.model('assignMovie', assignSchema, 'asMovie');

//Movie
router.get('/getAsgnMovie', function (req, res) {
    console.log("REACHED GET FUNCTION ON SERVER");
    AsgnMovie.find({}, function (err, docs) {
         res.json(docs);

    });
});

router.get('/getAsgnMovie/:id', function (req, res) {
    console.log("REACHED GET ID FUNCTION ON SERVER");
     AsgnMovie.find({_id: req.params.id}, function (err, docs) {
         res.json(docs);

    });
});

router.post('/addAsgnMovie', function(req, res){
 console.log(req.body);


  // var title = req.body.Title;
  // var language = req.body.Language;
  // var genre = req.body.Genre;
  // var poster = req.body.Poster;
  // var director = req.body.Director;
  // var actors = req.body.Actors;

  var asCity= req.body.assignCity;
  var asThr= req.body.assignThr;
  var asMovie=req.body.assignMovie;
  var asDTfr=req.body.assignDTfr;
  var asDTto=req.body.assignDTto;

  var asgnmovie = new AsgnMovie({

    assignCity:asCity,
    assignThr:asThr,
    assignMovie:asMovie,
    assignDTfr:asDTfr,
    assignDTto:asDTto,

  });

  asgnmovie.save(function(err, docs){
    if ( err ) throw err;
    console.log("Book Saved Successfully");
    res.json(docs);
  });


  })

router.delete('/deleteAsgnMovie/:id', function(req, res){
   console.log("REACHED Delete FUNCTION ON SERVER");
      AsgnMovie.remove({_id:req.params.id}, function(err, docs){
        res.json(docs);
    });
})

router.put('/updateAsgnMovie/:id', function(req, res){
    console.log("REACHED PUT");
    console.log(req.body);
    AsgnMovie.findOneAndUpdate({_id:req.params.id}, req.body, function (err, data) {
      console.log(data);
      res.json(data);
    });
})


// catch 404 and forward to error handler
router.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = router;
