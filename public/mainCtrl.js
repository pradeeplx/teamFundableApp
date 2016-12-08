angular.module("teamFundableApp").controller("mainCtrl", function($scope, mainServ, $state){

  $scope.toggleLogin = false;
  $scope.toggleTeam = false;
  $scope.toggleProject = false;
  $scope.toggleFundraiser = false;

  $scope.editTeamButton = false;
  $scope.editProjectButton = false;
  $scope.editFundraiserButton = false;

  $scope.loveConnection = {};

  $scope.toDonate = function(match){
    $scope.loveConnection = match;
    $state.go('donateLove');
  };

//what happens when donate now is pressed
  $scope.buttonDonateNow = function(donation){
    $scope.postDonationData(donation);



    $state.go('donateLoveThanks');


  }

//what happens when you push the Match button on the fundraiser page

  $scope.buttonMatch = function(project){

  var fun = {};
  var funData = $scope.fundraiserData;
    for(var i = 0; i < funData.length; i++){
      if(funData[i].createdBy == $scope.currentUser._id){
        var fun = funData[i];
      }
    };
  var team = {};
  var tData = $scope.teamData;
   for(var j = 0; j < tData.length; j++){
    if(tData[j].createdBy == $scope.currentUser._id){
      var team = tData[j];
    }
   };

    var match = {
      "status": "active",
      "projectId": project._id,
      "projectName": project.name,
      "projectMainDescription": project.mainDescription,
      "projectDropDate": project.dropDate,
      "projectImage": project.image,
      "projectCreatedBy": project.createdBy,
      "fundraiserId": fun._id,
      "fundraiserMainDescription": fun.mainDescription,
      "fundraiserGoal": fun.goal,
      "fundraiserImage": fun.image,
      "teamName": team.teamName,
      "teamMainDescription": team.MainDescription,
      "teamClubAge": team.clubAge,
      "teamLogo": team.logo
    };
    $scope.postMatchData(match);
  };




  //filters for using in ng-repeats

  $scope.filterProjectIsMatched = function(item){
    if(item.isMatched){
      return false;
    }else{
      return true;
    }
  };
    $scope.filterProjectIsActive= function(item){
    if(item.status == "active"){
      return true;
    }else{
      return false;
    }
  };

  $scope.filterFundraiserIsActive= function(item){
    if(item.status == "active"){
      return true;
    }else{
      return false;
    }
  };
  $scope.filterFundraiserIsMatched = function(item){
    if(item.isMatched){
      return false;
    }else{
      return true;
    }
  };

    $scope.filterMatchActive = function(item){
    if(item.isMatched){
      return false;
    }else{
      return true;
    }
  };

 $scope.filterTeamLogo = function(item){
      if(item.createdBy == $scope.currentUser){
      return false;
    }else{
      return true;
    }
 };



  //CRUD
  $scope.putCurrentUser = function(user) {
    mainServ.updateTheUser(user)
    .then(function(response){
      $scope.getCurrentUser();

    })
  };


  $scope.postLoginUser = function(user){
   mainServ.postNewUser(user)
    .then(function(response){

      //if they are logged in kik em somewhere else kick em some where else
      $scope.getCurrentUser();


   })
  };
  $scope.logout = function(){
    $scope.toggleLogin = false;
    mainServ.logout()
    .then(function(response){
      $scope.currentUser = null;
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
                   // $state.go("communityProjects");
               });
       };




//fundraiser
  $scope.postFundraiserData = function(fundraiser){
    fundraiser.createdBy = $scope.currentUser;
    fundraiser.isMatched = false;
    fundraiser.status = "active";

    var userHelper = $scope.currentUser;
    userHelper.hasFundraisers = true;
    $scope.putCurrentUser(userHelper);

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
      mainServ.destroyFundraiserData(id)
      .then(function(response){
      $scope.getFundraiserData();
    })
  };
  $scope.updateFundraiserData= function(id){
      mainServ.updateFundraiserData(id)
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
    $state.go('matchedPage');
    })
  };
  $scope.getMatchData = function(){
      mainServ.getMatchData()
      .then(function(response){
      $scope.matchData = response;
      for (var i = 0; i < $scope.matchData.length; i++) {
          $scope.matchData[i].projectDropDate = moment($scope.matchData[i].projectDropDate).format("MMM. DD, YYYY");
      }
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
    project.createdBy = $scope.currentUser;
    project.isMatched = false;
    project.status = "active";

    var userHelper = $scope.currentUser;
    userHelper.hasProjects = true;
    $scope.putCurrentUser(userHelper);

    mainServ.postProjectData(project)
    .then(function(response){
    $scope.getProjectData();
    })
  };
  $scope.getProjectData = function(){
      mainServ.getProjectData()
      .then(function(response){
      $scope.projectData = response;
      for (var i = 0; i < $scope.projectData.length; i++) {
          $scope.projectData[i].dropDate = moment($scope.projectData[i].dropDate).format("MMM. DD, YYYY");
      }
    })
  };
  $scope.destroyProjectData = function(id){
      mainServ.destroyProjectData(id)
      .then(function(response){
      $scope.getProjectData();
    })
  };
  $scope.updateProjectData= function(id){
      mainServ.updateProjectData(id)
      .then(function(response){
      $scope.getProjectData();
    })
  };
  $scope.getProjectData();

   //teams
  $scope.postTeamData = function(team){

    var userHelper = $scope.currentUser;
    userHelper.hasTeams = true;
    $scope.putCurrentUser(userHelper);

    team.createdBy = $scope.currentUser;
    mainServ.postTeamData(team)
    .then(function(response){

    $scope.getTeamData();
    })
  };
  $scope.getTeamData = function(){
      mainServ.getTeamData()
      .then(function(response){
      $scope.teamData = response;
    })
  };
  $scope.destroyTeamData = function(id){
    console.log(id);
      mainServ.destroyTeamData(id)
      .then(function(response){
      $scope.getTeamData();
    })
  };
  $scope.updateTeamData= function(id){
      mainServ.updateTeamData(id)
      .then(function(response){
      $scope.getTeamData();
    })
  };
  $scope.getTeamData();

  //donations
  $scope.postDonationData = function(donation){
    mainServ.postTeamData(donation)
    .then(function(response){
    $scope.getDonationData();
    })
  };
  $scope.getDonationData = function(){
      mainServ.getDonationData()
      .then(function(response){
      $scope.donationData = response;
    })
  };
  $scope.destroyDonationData = function(id){
      mainServ.destroyDonationData(id)
      .then(function(response){
      $scope.getDonationData();
    })
  };
  $scope.updateDonationData= function(id){
      mainServ.updateDonationData(id)
      .then(function(response){
      $scope.getDonationData();
    })
  };
  $scope.getDonationData();




});
