module.exports = function (grunt) {
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      concat: {
        options: {
          stripBanners: true,
          separator: '',
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\nvar thlibVersion = "<%= pkg.version %>";\n'
        },
        dist: {
          src: ['src/core/core.js', 'src/manager/manager-core.js', 'src/thread/spawner.js', 'src/thread/requesters.js', 'src/**/*.js'],
          dest: 'dist/<%= pkg.name %>.js'
        }
      },
      uglify: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\nvar thlibVersion = "<%= pkg.version %>";\n'
        },
        dist: {
            files: {
              'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
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

    grunt.registerTask('default', ['concat', 'uglify']);
    grunt.registerTask('linted-build', ['jshint','concat', 'uglify']);
};