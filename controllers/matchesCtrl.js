var MatchModel = require('./../models/matchesModel.js')
module.exports = {
  read: function(req, res){
    MatchModel
     .find(req.query)
     //if a collection then the key if not no pupulate
    //  .populate('stars')
     .exec(function(err, result){
       if(err){
         res.send(err);
       }else{
         res.send(result);
       }
     })
  },
  create: function(req, res){
    var match = new MatchModel
    (req.body);
    match.save(function(err, result){
      if(err){
        res.send(err);
      }else{
        res.send(result);
      }
    })
  },
  change: function(req, res){
    MatchModel
    .findByIdAndUpdate(req.params.id, req.body, function(err, result){
      if(err){
        res.send(err);
      }else{
        res.send(result);
      }
    });
  },
  destroy: function(req, res){
    MatchModel
    .findByIdAndRemove(req.params.id, req.body, function(err, result){
      if(err){
        res.send(err);
      }else{
        res.send(result);
      }
    })
  }
};
