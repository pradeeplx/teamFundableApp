angular.module("teamFundableApp",['ui.router'])
.config(function($stateProvider, $urlRouterProvider){

//login
$stateProvider.state("home", {
  url:"/",
  templateUrl: '/views/home.html'
}).state("login", {
  url:"/login",
  templateUrl: '/views/login.html',
  
}).state("account", {
  url:"/account",
  templateUrl: '/views/account.html',
  
}).state("communityProjects", {
  url:"/communityProjects",
  templateUrl: '/views/communityProjects.html',
  
}).state("communityTeams", {
  url:"/communityTeams",
  templateUrl: '/views/communityTeams.html'

}).state("communityFundraisers", {
  url:"/communityFundraisers",
  templateUrl: '/views/communityFundraisers.html'

}).state("matchedPage", {
  url:"/matchedPage",
  templateUrl: '/views/matchedPage.html'

}).state("createProject", {
  url:"/createProject",
  templateUrl: '/views/createProject.html'

}).state("createTeam", {
  url:"/createTeam",
  templateUrl: '/views/createTeam.html'

}).state("createFundraiser", {
  url:"/createFundraiser",
  templateUrl: '/views/createFundraiser.html'

})
    $urlRouterProvider.otherwise("/")





});
