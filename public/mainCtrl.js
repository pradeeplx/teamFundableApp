angular.module("teamFundableApp").controller("mainCtrl", function($scope, mainServ, $state){
 
  $scope.postLoginUser = function(user){
   mainServ.postLoginUser(user)
    .then(function(response){
      console.log(response);
      //if they are logged in kik em somewhere else kick em some where else
      $scope.getCurrentUser();
   })
  };
  $scope.getLogoutUser = function(){
    mainServ.getLogoutUser()
    .then(function(response){
      $state.go("main");
      $scope.getCurrentUser();
    })
  };
  $scope.getCurrentUser = function(){
    mainServ.getCurrentUser()
    .then(function(response){
      //  console.log(response)
      $scope.currentUser = response;

    })
  };

  //login user
  $scope.postNewUser = function(user) {
           mainServ.postNewUser(user)
               .then(function(response) {
                   $scope.getCurrentUser();
                   $state.go("home");
               });
       };




//fundraiser
  $scope.postFundraiserData = function(fundraiser){
    mainServ.postFundraiserData(fundraiser)
    .then(function(response){
    $scope.getFundraiserData();
    })
  };
  $scope.getFundraiserData = function(){
      mainServ.getFundraiserData()
      .then(function(response){
      $scope.fundraiserData = response;
    })
  };
  $scope.destroyFundraiserData = function(id){
      mainServ.destroyFundraiser(id)
      .then(function(response){
      $scope.getFundraiserData();
    })
  };
  $scope.updateFundraiserData= function(id){
      mainServ.updateFundraiser(id)
      .then(function(response){
      $scope.getFundraiserData();
    })
  };
  $scope.getFundraiserData();
  //matches
  $scope.postMatchData = function(match){
    mainServ.postMatchData(match)
    .then(function(response){
    $scope.getMatchData();
    })
  };
  $scope.getMatchData = function(){
      mainServ.getMatchData()
      .then(function(response){
      $scope.matchData = response;
    })
  };
  $scope.destroyMatchData = function(id){
      mainServ.destroyMatch(id)
      .then(function(response){
      $scope.getMatchData();
    })
  };
  $scope.updateMatchData= function(id){
      mainServ.updateMatch(id)
      .then(function(response){
      $scope.getMatchData();
    })
  };
  $scope.getMatchData();
    //projects
  $scope.postProjectData = function(project){
    mainServ.postProjectData(project)
    .then(function(response){
    $scope.getProjectData();
    })
  };
  $scope.getProjectData = function(){
      mainServ.getProjectData()
      .then(function(response){
      $scope.projectData = response;
    })
  };
  $scope.destroyProjectData = function(id){
      mainServ.destroyProject(id)
      .then(function(response){
      $scope.getProjectData();
    })
  };
  $scope.updateProjectData= function(id){
      mainServ.updateProject(id)
      .then(function(response){
      $scope.getProjectData();
    })
  };
  $scope.getProjectData();


$scope.test = "hello world";

});
