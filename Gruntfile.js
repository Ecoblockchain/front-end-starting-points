module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-express');
	grunt.loadNpmTasks('grunt-open');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		express: {
			all: {
				options: {
					port: 9000,
					hostname: "0.0.0.0",
					keepalive: true,
					bases: ['served'],
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
				options: {
					spawn: false,
					livereload: true
					// debounceDelay: 2000,
				},
				files: ['site/**/*.html', 'site/**/*.js', 'site/**/*.css']
			}
		},

		copy: {
			main: {
				files: [
					{
						expand: true,
						cwd: 'site/',
						src: ['**/*.html', '**/*.css', '**/*.js', 'images/*'],
						dest: 'served/'
					},
				]
			}
		}

	});

  grunt.registerTask('server', 'Run grunt-express server, open broswer and then watch files', ['express', 'open', 'watch']);
	grunt.registerTask('default', '', ['copy', 'server']);

	grunt.event.on('watch', function (action, filepath) {
		grunt.task.run('copy');
	});

}