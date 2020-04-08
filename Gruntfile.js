module.exports = function (grunt) {
    grunt.initConfig({
        concat: {
            js: {
                src: ['js/*.js'],
                dest: 'dist/bundle.js'
            },
            css: {
                src: ['css/*.css'],
                dest: 'dist/bundle.css'
            }
        },
        htmlmin: {
            options: {
                collapseWhitespace: true,
                preserveLineBreaks: false
            },
            files: {
                src: 'dist/index.html',
                dest: 'dist/index.html'
            }
        },
        imagemin: {
            files: {
                expand: true,
                src: ['./images/*.png'],
                dest: 'dist/'
            }
        },
        uglify: {
            'dist/bundle.min.js': 'dist/bundle.js'
        },
        cssmin: {
            'dist/bundle.min.css': 'dist/bundle.css'
        }
    });
   
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
  
    grunt.registerTask('build', ['concat','uglify', 'cssmin','htmlmin', 'imagemin']);
};