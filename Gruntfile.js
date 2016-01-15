module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-express');
	grunt.loadNpmTasks('grunt-open');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-less');


	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		express: {
			all: {
				options: {
					port: 9000,
					hostname: "0.0.0.0",
					keepalive: true,
					bases: ['src'],
					livereload: true
				}
			}
		},

		open: {
			all: {
				path: 'http://localhost:<%= express.all.options.port%>'
			}
		},

		watch: {
			all: {
				files: 'index.html',
				options: {
					livereload: true
				}
			}
		},

		copy: {

		},

		less: {

		}


	});

  	grunt.registerTask('server', 'Run grunt-express server', ['express', 'open', 'watch']);

	grunt.registerTask('default', 'Run server, auto compile files, and reload browser', ['watch']);

  	// grunt.registerTask('build', 'Build the web application for deployment', ['copy', 'requirejs');

	// grunt.event.on('watch', function (action, filepath) {
		// grunt.task.run('copy');
	// });


}