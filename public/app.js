angular.module("teamFundableApp",['ui.router'])
.config(function($stateProvider, $urlRouterProvider){

//login
$stateProvider.state("home", {
  url:"/",
  templateUrl: '/views/home.html'
}).state("communityProjects", {
  url:"/communityProjects",
  templateUrl: '/views/communityProjects.html',
  
}).state("communityTeams", {
  url:"/communityTeams",
  templateUrl: '/views/communityTeams.html'

}).state("matchedPage", {
  url:"/matchedPage",
  templateUrl: '/views/matchedPage.html'

})
    $urlRouterProvider.otherwise("/")





});
