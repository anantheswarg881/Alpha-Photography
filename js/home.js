var app = angular.module('alphaPhotographyApp', ['thatisuday.ng-image-gallery', 'angular-lazy-loader']);
//app.config(function (ngImageGalleryOptsProvider) {
//    ngImageGalleryOptsProvider.setOpts({
//        thumbnails: true,
//        //inline      :   true,
//        bubbles: true,
//        imgBubbles: true,
//        bgClose: false
//    });
//});

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


app.controller('homeController', function($scope) {
    
    var recentworkFolder = 'images/recentwork/';
    var recentworkThumbFolder = 'images/recentwork/thumb/';
    $scope.recentworkImages = [];
    $scope.loadRecentImages = function () {
        for (var i = 0; i < 16; i++) {
            var imgPath = recentworkFolder + (i + 1) + '.jpg';
            var thumbPath = recentworkThumbFolder + (i + 1) + '.jpg';
            $scope.recentworkImages.push({ id: (i+1), thumbUrl: thumbPath, url: imgPath });
        }
    };

    $scope.loadRecentImages();

    shuffle($scope.recentworkImages);

	$scope.recentProjects = [
		{id:1, title:'Avengers',image:'images/projects/project1.jpg', shortDescription:'Toys come to life'},
		{id:2, title:'Splash',image:'images/projects/project2.jpg', shortDescription:'Studio water splashes'},
		{id:3, title:'Yoga for life',image:'images/projects/project3.jpg', shortDescription:'A yoga teacher in action'},
		{id:4, title:'Adarsh',image:'images/projects/project4.jpg', shortDescription:'I see me seing me!'},
		{id:5, title:'Salsa',image:'images/projects/project5.jpg', shortDescription:'string Dance = "Life";'},
		{id:6, title:'Broken Angel',image:'images/projects/project6.jpg', shortDescription:"I'm so lonely!!"},
		{id:7, title:'Ladakh',image:'images/projects/project7.jpg', shortDescription:'Heaven on Earth!'},
    	{id:8, title:'Christmas',image:'images/projects/project8.jpg', shortDescription:"A 'Marvel'ous Christmas!"}
    ];

	$scope.testimonials = [
		//{author:'Neha Sharma', image:'images/testimonials/2.jpg', authorDescription:' - a Techie from Hyderabad, India', content:'Ananth is an ex-colleague and a friend. I know him since he started learning photography. From crappy photos to award winning photos, he has put lot of effort to learn and enjoy photography. He can portray ordinary people as super models through his pics.'},
		{ author: 'Adarsh Kumar', image: 'images/testimonials/1.jpg', authorDescription: ' - a Salsa dancer from Seattle, US', content: 'I had the chance of working with Ananth on his Seattle trip in 2015 and I cant express that experience in words. He doesnt just take pictures and edit them by throwing in some fancy backgrounds and hand it over to you; he tries to tell a story, portrays a character out of it, paints a personality, a story of real You though his art of photography. He knows how to capture candid moments, expressions, and the things which cant be put into words. It was SO MUCH FUN working with you Ananth. Thanks for those amazing clicks and thanks Alpha photography!' },
		{ author: 'Prachi Thaker', image: 'images/testimonials/3.jpg', authorDescription: ' - a Model and an actress from Tollywood', content: 'Alpha photography by Ananth is a label which has a unique style of work. Just by playing with natural lights  one can create a beautiful output of photos. I loved my photos not only beause i looked pretty in them but the emotion was captured perfectly!' },
		{ author: 'Meenu Avi', image: 'images/testimonials/4.jpg', authorDescription: ' - a software engineer fom Banglore, India', content: 'We got our pre wedding shoot done from Ananth and it was AMAZING. We loved the approach how he executed the entire shoot. It was both professional and crazy..in a friendly manner. He captured great shots and the end results were fantastic!!' },
		{ author: 'Dinesh Kumar', image: 'images/testimonials/5.jpg', authorDescription: ' - a Model and an actor from Tollywood', content: 'Over the years I have had worked variety of great n professional photographers for photoshoots n for my modelling career...But Ananth (Alpha Photography) has depth of experience, creative insight, classic style, lighting expertise. The easiest thing to say is that Ananth is a gifted photographer & down to earth human being.what strikes me most is how he sees the world & how he captures its images. He does not just capture the shot he captures the experience. Ananth has a Designers eye that he create some of the most stunning images I have ever seen... Thanks  Ananth for beautiful pictures' }
	];

	shuffle($scope.testimonials);
	$scope.methods = {};
	$scope.openGallery = function () {
		$scope.methods.open();
	};

	//$scope.openGallery1 = function () {
	//	$("#thumbnailsdiv").smoothTouchScroll({
	//	    continuousScrolling: false
	//	});
	//};
});