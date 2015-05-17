module.exports = function (grunt) {
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      ts: {
        files: [{src: ['src/**/*.ts'], dest: '/dist/thread.js'}],
        options:{
            comments: false,
            declaration: true,
            module: 'commonjs'
        }
      },
//      concat: {
//        options: {
//          stripBanners: true,
//          separator: '/*=====================--========================*/',
//          banner: '/*! <%= pkg.name %> compiled in the lab <%= grunt.template.today("yyyy-mm-dd") %> version <%= pkg.version %>*/\n'
//        },
//        dist: {
//          src: ['src/core/core.js', 'src/manager/manager-core.js', 'src/thread/spawner.js', 'src/thread/requesters.js', 'src/**/*.js'],
//          dest: 'dist/thread.js'
//        }
//      },
      uglify: {
        options: {
          banner: '/*! <%= pkg.name %> compiled in the lab <%= grunt.template.today("yyyy-mm-dd") %> version <%= pkg.version %>*/\n'
        },
        dist: {
            files: {
              'dist/thread.min.js': ['dist/thread.js']
            }
          }
      },
      jshint: {
        files: ['src/**/*.js', 'dest/*.js']
      }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks("grunt-ts");

    grunt.registerTask('default', ['ts','uglify']);
    grunt.registerTask('linted-build', ['jshint','concat', 'uglify']);
};