
var myApp = angular.module('myApp', ['ngRoute','ngStorage']);
// configure our routes
myApp.config(function($routeProvider) {
    $routeProvider
        // route for the home page
        .when('/home', {
            templateUrl : 'partials/home.html',
            controller  : 'mainController'
        })
        // route for the about page
        .when('/aboutus', {
            templateUrl : 'partials/aboutUS.html',
            controller  : 'aboutController'
        })
        .when('/promotions', {
            templateUrl : 'partials/promotions.html',
            controller  : 'promotionsController'
        })
        .when('/album', {
            templateUrl : 'partials/album.html',
            controller  : 'albumController'
        })
        .when('/contactus', {
            templateUrl : 'partials/contactUs.html',
            controller  : 'contactController'
        }).when('/events', {
            templateUrl : 'partials/events.html',
            controller  : 'eventsController'
        })
        .otherwise('/home',{
            templateUrl : 'home.html'
        })
    ;
});

// create the controller and inject Angular's $scope
myApp.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

myApp.controller('aboutController', function($scope) {
    $scope.message = 'Look! I am an about page.';
});

myApp.controller('contactController', function($scope) {
    $scope.message = 'Contact us! This is just a demo.';
});
myApp.controller('promotionsController', function($scope) {
    $scope.promotions = [
        {promoName:'Standing Order', points:1},
        {promoName:'Associations', points:1},
        {promoName:'3 legs on SO & Associations', points:1},
        {promoName:'BWW Tech pack', points:1},
        {promoName:'2 WNO', points:1},
        {promoName:'150PV', points:1},
        {promoName:'300PV', points:2},
        {promoName:'500PV', points:3},
        {promoName:'Sign Up', points:1},
        {promoName:'12+ STP', points:1},
        {promoName:'20+ STP', points:1},
        {promoName:'30 F2F Contacts', points:1},
        {promoName:'60 F2F Contacts', points:2},
    ]
});
myApp.controller('albumController', function($scope) {
    $scope.message = 'Album! JK. This is just a demo.';
});
myApp.controller('eventsController', function($scope,$localStorage){
    $scope.paseSchedule = {};
    $scope.showCreatePase = false;
    $scope.showViewPase = false;

    $scope.createPaseSchedule = function(){
        $scope.showCreatePase = true;
        $scope.showViewPase = false;
    }

    $scope.savePaseSchedule = function(pase){
        //$scope.paseSchedule = angular.copy(pase);
        $scope.showCreatePase = false;
        $scope.showViewPase = false;
        $localStorage.mySavedObj = pase;

    }
    $scope.showPaseSchedule = function(){
        $scope.showCreatePase = false;
        $scope.showViewPase = true;
        $scope.paseSchedule =  $localStorage.mySavedObj;

    }

});
