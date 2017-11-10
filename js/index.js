/// <reference path="angular-route1.5.js" />
/// <reference path="angular1.5.js" />


var app = angular.module('alphaPhotographyApp', ['thatisuday.ng-image-gallery', 'angular-lazy-loader', 'ngRoute']);

app.config(['ngImageGalleryOptsProvider', function (ngImageGalleryOptsProvider) {
    ngImageGalleryOptsProvider.setOpts({
        thumbnails: true,
        thumbSize: 120,
        inline: false,
        bubbles: true,
        bubbleSize: 100,
        imgBubbles: true,
        bgClose: false,
        piracy: false,
        imgAnim: 'fadeup',
        bgClose: true
    });
}])


// configure our routes
app.config(function ($routeProvider, $locationProvider) {
    
    $routeProvider

        .when('/home', {
            templateUrl: 'home.html',
            controller: 'homeController'
        })

        .when('/portfolio', {
            templateUrl: 'portfolio.html',
            controller: 'portfolioController'
        })

        .when('/projects', {
            templateUrl: 'projects.html',
            controller: 'projectsController'
        })        
        .otherwise({ redirectTo: '/home' });

        // use the HTML5 History API
        $locationProvider.html5Mode(true);
});

app.run(function($rootScope, $location, $anchorScroll, $routeParams) {
  $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
    $location.hash($routeParams.scrollTo);
    $anchorScroll();  
  });
});

//$("#navbarmenu>li>a").click(function () {
//    $("#navbarmenu>li>a").removeClass("active");

//    $(this).addClass("active");
//});