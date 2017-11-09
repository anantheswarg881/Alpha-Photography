module.exports = function (grunt) {

    grunt.initConfig({
        cssmin: {
            combine: {
                files: {
                    'css/main.css': ['asset/css/bootstrap.css', 'css/font-awesome.min.css', 'css/responsive.css',
                                     'css/animate.css', 'css/colors/red.css', 'css/smoothTouchScroll.css',
                                     'ng-gallery/ng-image-gallery.css']
                }
            }
        },

        uglify: {
            dist: {
                files: {
                    'js/main.js': ['js/angular1.5.js', 'js/angular-animate1.5.js', 'js/angular-touch.min.js', 'js/haamer.min.js', 'ng-gallery/ng-image-gallery.js',
                    //'js/main.js': ['js/angular.min.js', 'js/angular-animate.js', 'js/angular-touch.min.js', 'js/haamer.min.js', 'ng-gallery/ng-image-gallery.js',
                                    'js/jquery-2.1.1.min.js', 'js/jquery.fitvids.js', 'js/jquery.textillate.js', 'js/jquery.migrate.js', 'js/modernizrr.js', 'asset/js/bootstrap.min.js',
                                    'js/owl.carousel.js', 'js/nivo-lightbox.min.js', 'js/jquery.isotope.min.js', 'js/jquery.appear.js',
                                    'js/count-to.js', 'js/jquery.nicescroll.min.js', 'js/script.js', 'js/jquery-1.10.2.min.js', 
                                    'js/jquery-ui-1.10.3.custom.min.js', 'js/jquery.kinetic.min.js', 'js/jquery.smoothTouchScroll.min.js',
                                    'js/angular-lazy-loader.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['cssmin', 'uglify']);

};