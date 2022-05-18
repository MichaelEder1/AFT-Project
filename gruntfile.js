module.exports = function (grunt) {
    grunt.initConfig({
        concat: {
            dist: {
                src: ['./src/js/main.js'],
                dest: './public/js/main.js',
            },
        },
        uglify: {
            my_target: {
                files: {
                    './public/js/main.min.js': ['./src/js/main.js']
                }
            }
        },
        watch: {
            css: {
                files: './src/scss/*.scss',
                tasks: ['sass', 'cssmin'],
                options: {
                    livereload: true,
                },
            },
            scripts: {
                files: ['./src/js/*.js'],
                tasks: ['concat', 'uglify'],
            },
            html: {
                files: ['./src/*.html'],
                tasks: ['htmlmin'],
            },
        },
        sass: {                              // Task
            dist: {                            // Target
                options: {                       // Target options
                    style: 'expanded'
                },
                files: {                         // Dictionary of files
                    './public/css/style.css': './src/scss/main.scss',       // 'destination': 'source'
                }
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: './public/css',
                    src: ['*.css', '!*.min.css'],
                    dest: './public/css',
                    ext: '.min.css'
                }]
            }
        },
        htmlmin: {                                     // Task
            dist: {                                      // Target
                options: {                                 // Target options
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {                                   // Dictionary of files
                    './public/index.html': './src/index.html',     // 'destination': 'source'
                }
            },
        },
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.registerTask('default', ['sass', 'concat', 'uglify', 'cssmin', 'htmlmin']);
};