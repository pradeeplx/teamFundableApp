angular.module("teamFundableApp").service("mainServ",
function($http){
this.postNewUser = function(user) {
       return $http({
           method: "POST",
           url: "/login",
           data: user
       }).then(function(response) {
           return response.data;
       })
   };
   this.getCurrentUser = function() {
       return $http({
           method: "GET",
           url: "/current"
       }).then(function(response) {
           return response.data;
       })
   }

   this.logout = function() {
       return $http({
           method: "GET",
           url: "/logout"
       }).then(function(resp) {
           return resp;
       })
   };

   this.updateTheUser = function(currentUser) {
       return $http({
           method: "PUT",
           url: "/current/" + currentUser._id,
           data: currentUser
       }).then(function(response) {
           console.log(response);
           return response.data;
       });
   };

   this.deleteUser = function(currentUser) {
       return $http({
           method: "DELETE",
           url: '/current/' + currentUser._id,
       }).then(function(response) {
           return response.data;
       });
   };

   ///end







//   //current User Info
//   this.getCurrentUser = function (){
//     return $http({
//       method: "GET",
//       url: "/current"
//     }).then(function(response){
//       return response.data;
//     })
//   }
// //login User
//   this.postLoginUser = function (user){
//     return $http({
//       method: "POST",
//       url: "/login",
//       data: user
//     }).then(function(response){
//       return response.data;
//     })
//   }
// //logout User
//   this.getLogoutUser = function (){
//     return $http({
//       method: "GET",
//       url: "/logout"
//     }).then(function(response){
//       return response.data;
//     })
//   }
//fundraiser
this.getFundraiserData = function (){
  return $http({
    method: "GET",
    url: "/fundraisers"
  }).then(function(response){
    return response.data;
  })
}

this.postFundraiserData = function(fundraiser){
  return $http({
    method: "POST",
    url: "/fundraisers",
    data: fundraiser
  }).then(function(response){
      return response.data;
  })
}

this.destroyFundraiserData = function(fundraiser){
  // console.log(fundraiser);
  return $http({
    method: "DELETE",
    url: "/fundraisers/" + fundraiser._id
  }).then(function(response){
    // console.log(response.data);
    return response.data;
  })
}

this.updateFundraiserData = function(fundraiser){
  return $http({
    method: "PUT",
    url: "/fundraisers/" + fundraiser._id,
    data: fundraiser
  }).then(function(response){
    console.log(response);
    return response.data;
  })
}
//matches
this.getMatchData = function (){
  return $http({
    method: "GET",
    url: "/matches"
  }).then(function(response){
    return response.data;
  })
}

this.postMatchData = function(match){
  return $http({
    method: "POST",
    url: "/matches",
    data: match
  }).then(function(response){
      return response.data;
  })
}

this.destroyMatchData = function(match){
  // console.log(fundraiser);
  return $http({
    method: "DELETE",
    url: "/matches/" + match._id
  }).then(function(response){
    // console.log(response.data);
    return response.data;
  })
}

this.updateMatchData = function(match){
  return $http({
    method: "PUT",
    url: "/matches/" + match._id,
    data: match
  }).then(function(response){
    console.log(response);
    return response.data;
  })
}
//porjects
this.getProjectData = function (){
  return $http({
    method: "GET",
    url: "/projects"
  }).then(function(response){
    return response.data;
  })
}

this.postProjectData = function(project){
  return $http({
    method: "POST",
    url: "/projects",
    data: project
  }).then(function(response){
      return response.data;
  })
}

this.destroyProjectData = function(match){
  // console.log(fundraiser);
  return $http({
    method: "DELETE",
    url: "/projects/" + project._id
  }).then(function(response){
    // console.log(response.data);
    return response.data;
  })
}

this.updateProjectData = function(project){
  return $http({
    method: "PUT",
    url: "/projects/" + project._id,
    data: project
  }).then(function(response){
    console.log(response);
    return response.data;
  })
}

});