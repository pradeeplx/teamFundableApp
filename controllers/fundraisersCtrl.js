var fundraiserModel = require('./../models/fundraisersModel.js')
module.exports = {
  read: function(req, res){
    fundraiserModel
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
    var fundraiser = new fundraiserModel
    (req.body);
    fundraiser.save(function(err, result){
      if(err){
        res.send(err);
      }else{
        res.send(result);
      }
    })
  },
  change: function(req, res){
    fundraiserModel
    .findByIdAndUpdate(req.params.id, req.body, function(err, result){
      if(err){
        res.send(err);
      }else{
        res.send(result);
      }
    });
  },
  destroy: function(req, res){
    fundraiserModel
    .findByIdAndRemove(req.params.id, req.body, function(err, result){
      if(err){
        res.send(err);
      }else{
        res.send(result);
      }
    })
  }
};
