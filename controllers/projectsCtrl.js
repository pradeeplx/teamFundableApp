var ProjectModel = require('./../models/projectsModel.js')
module.exports = {
  read: function(req, res){
    ProjectModel
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
    var project = new ProjectModel
    (req.body);
    project.save(function(err, result){
      if(err){
        res.send(err);
      }else{
        res.send(result);
      }
    })
  },
  change: function(req, res){
    ProjectModel
    .findByIdAndUpdate(req.params.id, req.body, function(err, result){
      if(err){
        res.send(err);
      }else{
        res.send(result);
      }
    });
  },
  destroy: function(req, res){
    ProjectModel
    .findByIdAndRemove(req.params.id, req.body, function(err, result){
      if(err){
        res.send(err);
      }else{
        res.send(result);
      }
    })
  }
};
