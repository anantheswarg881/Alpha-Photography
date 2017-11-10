//var app = angular.module('alphaPhotographyApp', ['thatisuday.ng-image-gallery', 'ngRoute']);
////app.config(function (ngImageGalleryOptsProvider) {
////    ngImageGalleryOptsProvider.setOpts({
////        thumbnails: true,
////        //inline      :   true,
////        bubbles: true,
////        imgBubbles: true,
////        bgClose     :   false
////    });
////});

//app.config(['ngImageGalleryOptsProvider', function (ngImageGalleryOptsProvider) {
//    ngImageGalleryOptsProvider.setOpts({
//        thumbnails: true,
//        thumbSize: 120,
//        inline: false,
//        bubbles: true,
//        bubbleSize: 100,
//        imgBubbles: true,
//        bgClose: false,
//        piracy: false,
//        imgAnim: 'fadeup',
//        bgClose: true
//    });
//}])
angular.module('alphaPhotographyApp').controller('portfolioController', function ($scope, $location, $window) {

    var getCategory = function () {

        var category = $location.path();
        category = category.substring(1);
        return category;
    };

    getCategory();

    
	//var shuffle = function(a) {
	//    var j, x, i;
	//    for (i = a.length; i; i--) {
	//        j = Math.floor(Math.random() * i);
	//        x = a[i - 1];
	//        a[i - 1] = a[j];
	//        a[j] = x;
	//    }
	//};

	var portfolioFolder = 'images/portfolio/';
	var portfolioThumbFolder = 'images/portfolio/thumb/';

	$scope.addImageCategories = function (images, imageCount, category) {
	    for (var i = 0; i < imageCount; i++) {
	        var imgPath = portfolioFolder + category + '/' + (i + 1) + '.jpg';
	        var thumbPath = portfolioThumbFolder + category + '/' + (i + 1) + '.jpg';
	        images.push({ id: (category + i + 1), thumbUrl: thumbPath, url: imgPath, category: category });
	    }
	};
    	
	$scope.activeImages = [];

	$scope.landscapesImages = [];
	$scope.portraitImages = [];
	$scope.kidsImages = [];
	$scope.toysImages = [];
	$scope.coupleImages = [];
	$scope.fashionImages = [];
	$scope.randomImages = [];
	$scope.addImageCategories($scope.landscapesImages, 12, 'landscapes');
	$scope.addImageCategories($scope.portraitImages, 4, 'portraits');
	$scope.addImageCategories($scope.kidsImages, 6, 'kids');
	$scope.addImageCategories($scope.toysImages, 4, 'toys');
	$scope.addImageCategories($scope.coupleImages, 8, 'couple');
	$scope.addImageCategories($scope.fashionImages, 14, 'fashion');
	$scope.addImageCategories($scope.randomImages, 16, 'random');

	$scope.portfolioImages = [];

	$scope.mergeImages = function (arr1, arr2) {
	    for (var i = 0; i < arr2.length-1; i++) {
	        arr1.push(arr2[i]);
	    }
	}

	$scope.mergeImages($scope.portfolioImages, $scope.landscapesImages);
	$scope.mergeImages($scope.portfolioImages, $scope.portraitImages);
	$scope.mergeImages($scope.portfolioImages, $scope.kidsImages);
	$scope.mergeImages($scope.portfolioImages, $scope.toysImages);
	$scope.mergeImages($scope.portfolioImages, $scope.coupleImages);
	$scope.mergeImages($scope.portfolioImages, $scope.fashionImages);
	$scope.mergeImages($scope.portfolioImages, $scope.randomImages);
	shuffle($scope.portfolioImages);
        	
	$scope.loadImages = function()
	{
	    var category = getCategory();
	    switch (category) {
	        case 'portraits':
	            $scope.activeImages = $scope.portraitImages;
	            setActive('#portraitTag');
	            break;
	        case 'landscapes':
	            $scope.activeImages = $scope.landscapesImages;
	            setActive('#landscapesTag');
	            break;
	        case 'fashion':
	            $scope.activeImages = $scope.fashionImages;
	            setActive('#fashionTag');
	            break;
	        case 'kids':
	            $scope.activeImages = $scope.kidsImages;
	            setActive('#kidsTag');
	            break;
	        case 'toys':
	            $scope.activeImages = $scope.toysImages;
	            setActive('#toysTag');
	            break;
	        case 'couple':
	            $scope.activeImages = $scope.coupleImages;
	            setActive('#coupleTag');
	            break;
	        case 'random':
	            $scope.activeImages = $scope.randomImages;
	            setActive('#randomTag');
	            break;
	        default:
	            $scope.activeImages = $scope.portfolioImages;
	            setActive('#allTag');
	            break;
	    }
	}

	$scope.anchor = '';
	var setActive = function (tagName) {
	        $scope.anchor = tagName;
	        var anchorTag = $(tagName);
	        anchorTag.addClass('active');
	};

	//$("a").click(function () {
	//    $("#navbarmenu1>li>a.active").removeClass("active");

	//    $(this).addClass("active");
	//});

	$scope.methods = {};
	$scope.openGallery = function () {
	    $scope.methods.open();
	};

	$scope.openGallery1 = function () {
	    //$("#thumbnailsdiv").smoothDivScroll({
	    //    autoScrollingMode: "onStart"
	    //});
	    $("#thumbnailsdiv").smoothTouchScroll({
	        continuousScrolling: false
	    });
	};

	$scope.applyFilter = function (category)
	{
	    $("#navbarmenu1>li>a.active").removeClass("active");

	    switch (category) {
	        case 'portraits':
	            $scope.activeImages = $scope.portraitImages;
	            setActive('#portraitTag');
	            break;
	        case 'landscapes':
	            $scope.activeImages = $scope.landscapesImages;
	            setActive('#landscapesTag');
	            break;
	        case 'fashion':
	            $scope.activeImages = $scope.fashionImages;
	            setActive('#fashionTag');
	            break;
	        case 'kids':
	            $scope.activeImages = $scope.kidsImages;
	            setActive('#kidsTag');
	            break;
	        case 'toys':
	            $scope.activeImages = $scope.toysImages;
	            setActive('#toysTag');
	            break;
	        case 'couple':
	            $scope.activeImages = $scope.coupleImages;
	            setActive('#coupleTag');
	            break;
	        case 'random':
	            $scope.activeImages = $scope.randomImages;
	            setActive('#randomTag');
	            break;
	        default:
	            $scope.activeImages = $scope.portfolioImages;
	            setActive('#allTag');
	            break;
	    }

	    
	    //var gallery = $('#lightgallery');
	    //gallery.data('lightGallery').destroy(true);
	    //gallery.lightGallery({
	    //    thumbnail: true
	    //});

	    //gallery.data('lightGallery');

	    //var baseurl = $location.absUrl().split("#");
	    //var redirectUrl = baseurl[0] + '#/' + category;
	    //$window.location.href = redirectUrl;
	    //$window.location.reload();
	};

	//var gallery = $('#lightgallery');
	//gallery.lightGallery({
	//    thumbnail: true
	//});
	$scope.loadImages('');
});