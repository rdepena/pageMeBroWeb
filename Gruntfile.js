var files = [
    'Gruntfile.js',
    'app.js',
    'sockets.js',
    'bin/www',
    'public/javascripts/*.js'
];
module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            files: files,
            tasks: ['jshint']
        },
        jshint : {
            files : files
        }
    });
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('default', ['jshint']);
};
