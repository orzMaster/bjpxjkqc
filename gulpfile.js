var gulp = require('gulp')
var concat = require('gulp-concat')
var clean = require('gulp-clean')
var copy = require('gulp-copy')
var uglify = require('gulp-uglify')
var browserify = require('gulp-browserify')
var rename = require('gulp-rename')
var minifycss = require('gulp-minify-css')
var jshint = require('gulp-jshint')

var config = {
    images: {

    },
    fonts: {
        src: [
            'bower_components/bootstrap/dist/fonts/*.*',
            'bower_components/material-design-iconic-font/dist/fonts/*.*'
        ],
        dist: 'public/fonts'
    },
    css: {
        src: [
            'bower_components/bootstrap/dist/css/bootstrap.min.css',
            'bower_components/bootstrap/dist/css/bootstrap.min.css.map',
            'bower_components/bootstrap/dist/css/bootstrap-theme.min.css',
            'bower_components/bootstrap/dist/css/bootstrap-theme.min.css.map',
            'bower_components/bootstrapvalidator/dist/css/bootstrapValidator.min.css',
            'bower_components/bootstrap-sweetalert/dist/sweetalert.css',
            'bower_components/bootstrap-select/dist/css/bootstrap-select.min.css',
            'bower_components/jquery.bootgrid/dist/jquery.bootgrid.min.css',
            'public/vendors/bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css',
            'bower_components/animate.css/animate.min.css',
            'bower_components/dropzone/dist/min/dropzone.min.css',
            'bower_components/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.min.css',
            'bower_components/material-design-iconic-font/dist/css/material-design-iconic-font.min.css'
        ],
        dist: 'public/css/lib',
    },
    js: {
        src: [
            'bower_components/jquery/dist/jquery.min.js',
            'bower_components/jquery/dist/jquery.min.map',
            'bower_components/paging/jquery.paging.min.js',
            'bower_components/bootstrap/dist/js/bootstrap.min.js',
            'bower_components/bootstrap/js/carousel.js',
            'bower_components/bootstrap-sweetalert/dist/sweetalert.min.js',
            'bower_components/bootstrap-select/dist/js/bootstrap-select.min.js',
            'public/vendors/bootstrap-datetimepicker/js/bootstrap-datetimepicker.min.js',
            'public/vendors/bootstrap-datetimepicker/js/locales/bootstrap-datetimepicker.zh-CN.js',
            'bower_components/bootstrapvalidator/dist/js/bootstrapValidator.min.js',
            'bower_components/bootstrapvalidator/dist/js/language/zh_CN.js',
            'bower_components/jquery.bootgrid/dist/jquery.bootgrid.min.js',
            'bower_components/jquery.easy-pie-chart/dist/jquery.easypiechart.min.js',
            'bower_components/simpleWeather/jquery.simpleWeather.min.js',
            'bower_components/flot/jquery.flot.js',
            'bower_components/flot/jquery.flot.resize.js',
            'bower_components/flot.curvedlines/curvedLines.js',
            'bower_components/Waves/dist/waves.min.js',
            'bower_components/Waves/dist/waves.min.js.map',
            'bower_components/dropzone/dist/min/dropzone.min.js',
            'bower_components/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js',
            'public/vendors/sparklines/jquery.sparkline.min.js',
            'public/vendors/bootstrap-growl/bootstrap-growl.min.js',
            'public/vendors/fileinput/fileinput.min.js',
            'bower_components/moment/min/moment.min.js'
        ],
        dist: 'public/js/lib'
    }
}

gulp.task('clean', function() {
    return gulp.src(['public/js/build/client/build.js', 'public/js/build/admin/build.js'])
        .pipe(clean({
            force: true
        }))
})

gulp.task('lint', function() {
    return gulp.src('public/js/src/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
})

gulp.task('images', function() {

})

gulp.task('fonts', function() {
    gulp.src(config.fonts.src)
        .pipe(gulp.dest(config.fonts.dist))
})

gulp.task('css', function() {
    gulp.src(config.css.src)
        .pipe(gulp.dest(config.css.dist))

    gulp.src('public/css/src/client/*.css')
        .pipe(concat('main.css'))
        .pipe(gulp.dest('public/css/build/client'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(minifycss())
        .pipe(gulp.dest('public/css/build/client'))

    gulp.src('public/css/src/admin/*.css')
        .pipe(concat('main.css'))
        .pipe(gulp.dest('public/css/build/admin'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(minifycss())
        .pipe(gulp.dest('public/css/build/admin'))
})

gulp.task('js', ['lint'], function() {
    gulp.src(config.js.src)
        .pipe(gulp.dest(config.js.dist))

    gulp.src('public/js/src/main/client/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('public/js/build/client'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify())
        .pipe(gulp.dest('public/js/build/client'))

    gulp.src('public/js/src/main/admin/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('public/js/build/admin'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify())
        .pipe(gulp.dest('public/js/build/admin'))
})

gulp.task('browserify', ['clean', 'lint'], function() {
    gulp.src('public/js/src/client/app.js')
        .pipe(browserify({
            transform: ["debowerify", "vueify"]
        }))
        .pipe(rename('build.js'))
        .pipe(gulp.dest('public/js/build/client'))

    gulp.src('public/js/src/admin/app.js')
        .pipe(browserify({
            transform: ["debowerify", "vueify"]
        }))
        .pipe(rename('build.js'))
        .pipe(gulp.dest('public/js/build/admin'))
})

gulp.task('build', ['images', 'fonts', 'css', 'js', 'browserify'])

gulp.task('watch', ['build'], function() {
    gulp.watch([
        'public/js/src/client/*.js',
        'public/js/src/client/components/**/*.vue',
        'public/js/src/admin/*.js',
        'public/js/src/admin/components/**/*.vue'
    ], ['browserify'])
    gulp.watch([
        'public/css/src/client/*.css',
        'public/css/src/admin/*.css'
    ], ['css'])
    gulp.watch([
        'public/js/src/main/client/*.js',
        'public/js/src/main/admin/*.js'
    ], ['js'])
    gulp.watch([
        'gulpfile.json'
    ], ['build'])
})

gulp.task('default', ['watch'])
