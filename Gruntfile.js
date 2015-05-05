module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				separator: '\n\n/* --- Ny fil --- */ \n\n'
			},
			app: {
				src: [
					'src/js/game/module.js',
					'src/js/game/*.js'
				],
				dest: 'dist/js/game.packed.js'
			},
			libs: {
				src: [
					'src/js/lib/angular.min.js',
					'src/js/lib/*.js'
				],
				dest: 'dist/js/libraries.packed.js'
			}
		},
		jshint: {
			files: [
				'src/js/**/*.js'
			],
			options: {
				// options here to override JSHint defaults
				globals: {
				jQuery: true,
				console: true,
				module: true,
				document: true
			}
		}
	},
	sass: {
		options: {
			sourceMap: true
		},
		dist: {
			files: {
				'dist/css/main.css': 'src/sass/main.scss'
			}
		}
	},
	watch: {
		options: {
			debounceDelay: 250,
			livereload: true
		},
		styles: {
			files: ['src/sass/**/*.scss'],
			tasks: ['sass']
		},
		images: {
			files: ['src/images/**/*'],
			tasks: ['sass']
		},
		scripts: {
			files: ['src/js/**/*.js'],
			tasks: ['concat']
		}
	},
	connect: {
		server: {
			options: {
				port: 9001,
				keepalive: true
			}
		}
	}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['jshint', 'concat', 'sass']);
	grunt.registerTask('js', ['jshint', 'concat']);
};