var app = angular.module('alphaPhotographyApp', []);
app.controller('projectsController', function($scope, $location) {

	var getId = function()
	{
		var url = window.location.search.substring(1);
		var params = url.split('=');

		if(params[0] == 'id')
		{
			return params[1];
		}
		return 1;
	};

	var projectid = getId();

	$scope.otherBlogs = [
		{id:1, title:'Broken Angel', image:'images/projects/project1.jpg', shortDescription:'Toys come to life'},
		{id:2, title:'Splash', image:'images/projects/project2.jpg', shortDescription:'Studio water splashes'},
		{id:3, title:'Yoga for life', image:'images/projects/project3.jpg', shortDescription:'A yoga teacher in action'},
		{id:4, title:'Adarsh', image:'images/projects/project4.jpg', shortDescription:'I see me seing me!'},
		{id:5, title:'Salsa', image:'images/projects/project5.jpg', shortDescription:'string Dance = "Life";'},
		{id:6, title:'Broken Angel', image:'images/projects/project6.jpg', shortDescription:''}
	];
});