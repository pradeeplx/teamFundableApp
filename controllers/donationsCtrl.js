var DonationModel = require('./../models/donationsModel.js')
module.exports = {
  read: function(req, res){
    DonationModel
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
    var match = new DonationModel
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
    DonationModel
    .findByIdAndUpdate(req.params.id, req.body, function(err, result){
      if(err){
        res.send(err);
      }else{
        res.send(result);
      }
    });
  },
  destroy: function(req, res){
    DonationModel
    .findByIdAndRemove(req.params.id, req.body, function(err, result){
      if(err){
        res.send(err);
      }else{
        res.send(result);
      }
    })
  }
};
