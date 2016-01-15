module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-less');


	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		watch: {

		},

		copy: {

		},

		less: {

		}


	});

	grunt.registerTask('default', 'Run server, auto compile files, and reload browser', ['watch']);

  	// grunt.registerTask('build', 'Build the web application for deployment', ['copy', 'requirejs');

	grunt.event.on('watch', function (action, filepath) {
		// grunt.task.run('copy');
	});


}