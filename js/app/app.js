/* -- app -- */
var app = angular.module('app', ['ui.router']);
console.log('app: ', app);
app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider){
	$urlRouterProvider.otherwise('/home');
	$stateProvider.state('home',{
        url: '/home',
        template: '<div navbar></div>'
    }).state('login',{
        url: '/login',
        controller: 'login',
        templateUrl: 'views/login.html'
    }).state('user',{
        url: '/user',
        controller: 'user',
        templateUrl: 'views/user.html'
    });
    $locationProvider.html5Mode(true);
}]);