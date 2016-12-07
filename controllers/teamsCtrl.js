var TeamModel = require('./../models/teamsModel.js')
module.exports = {
  read: function(req, res){
    TeamModel
     .find(req.query)
     .exec(function(err, result){
       if(err){
         res.send(err);
       }else{
         res.send(result);
       }
     })
  },
  create: function(req, res){
    var team = new TeamModel
    (req.body);
    team.save(function(err, result){
      if(err){
        res.send(err);
      }else{
        res.send(result);
      }
    })
  },
  change: function(req, res){
    TeamModel
    .findByIdAndUpdate(req.params.id, req.body, function(err, result){
      if(err){
        res.send(err);
      }else{
        res.send(result);
      }
    });
  },
  destroy: function(req, res){
    TeamModel
    .findByIdAndRemove(req.params.id, req.body, function(err, result){
      if(err){
        res.send(err);
      }else{
        res.send(result);
      }
    })
  }
};
