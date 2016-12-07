var UserModel = require('./../models/usersModel.js');


module.exports = {
  login: function(req, res){
      res.send();
  },
  logout: function(req, res){
    req.logout();
    console.log(req + "logged out now");
    res.send();
  },
  change: function(req, res){
    UserModel
    .findByIdAndUpdate(req.params.id, req.body, function(err, result){
      if(err){
        res.send(err);
      }else{
        res.send(result);
      }
    });
  },
  getMe: function(req, res){
    if(!req.user){
      return res.send();
    }
    UserModel
    .findById(req.user._id)
    .exec(function(err, result){
      if(err){
        res.send(err);
      } else {
        res.send(result);
      }
    })
  }
};
