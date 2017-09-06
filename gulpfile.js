var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
var fse = require('fs-extra');
var connect = require('gulp-connect');
var replace = require('gulp-replace');


//public clean
gulp.task('clean', function () {
    fse.emptyDirSync('dist');
});

//load assets
gulp.task("assets",function(){
    gulp.src([
        'bower_components/angular/angular.js',
        'bower_components/angular-ui-router/release/angular-ui-router.min.js',
        'bower_components/angular-animate/angular-animate.js',
        'bower_components/angular-aria/angular-aria.js',
        'bower_components/angular-material/angular-material.js',
        'bower_components/angular-material/angular-material-mocks.js',
        'bower_components/material-design-lite/material.min.js'
    ])
        .pipe(concat('angular.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/assets/js'));
    gulp.src([
        'bower_components/angular-material/*.css',
        'bower_components/material-design-lite/*.css']).pipe(gulp.dest('dist/assets/styles'));

});

//copy files
gulp.task('copy',function(){
    gulp.src('src/app/templates/*').pipe(gulp.dest('dist/templates'));
    gulp.src('src/index.html').pipe(gulp.dest('dist'));
    gulp.src('src/404.html').pipe(gulp.dest('dist'));
    fse.copySync('src/app/views', 'dist/views');

    fse.copySync('src/app/resource', 'dist/resource');
    fse.copySync('src/app/resource/images', 'dist/views/man');
});

//app builder
gulp.task('app',function(){
    gulp.src(['src/app/*.js'])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('dist/scripts'));
    gulp.src('src/app/*.css')
        .pipe(concat('app.css'))
        .pipe(gulp.dest('dist/styles'));
    gulp.src(['src/app/directives/*.js'])
        .pipe(concat('directive.min.js'))
        .pipe(gulp.dest('dist/scripts'));
});

gulp.task('app-build',function(){
    gulp.src(['src/app/*.js'])
        .pipe(concat('app.js'))
        .pipe(replace(/\/\/#[^#]*\/\/##/g,''))
        .pipe(uglify({
            mangle:false
        }))
        .pipe(gulp.dest('dist/scripts'));
    gulp.src('src/app/*.css')
        .pipe(concat('app.css'))
        .pipe(cssmin())
        .pipe(gulp.dest('dist/styles'));
    gulp.src(['src/app/directives/*.js'])
        .pipe(replace(/\/\/#[^#]*\/\/##/g,''))
        .pipe(concat('directive.min.js'))
        .pipe(uglify({
            mangle:false
        }))
        .pipe(gulp.dest('dist/scripts'));
});

gulp.task('service',function(){
    gulp.src('src/app/services/*.js')
        .pipe(gulp.dest('dist/scripts/'));
});
gulp.task('replace',function(){
    gulp.src('src/app/services/*.js')
        .pipe(replace(/\/\/#[^#]*\/\/##/g,''))
        .pipe(gulp.dest('dist/scripts/'));
});


gulp.task('watch', function () {
    gulp.watch(['src/index.html','src/app/templates/*','src/app/views/**/*.html','src/app/service/*','src/app/directives/*','src/app/views/**/**/*'], ['copy','reload']);
    gulp.watch(['src/app/*.js','src/app/*.css'], ['app','reload']);
});
gulp.task('reload',function () {
    gulp.src('dist').pipe(connect.reload())
});
gulp.task('connect',['dev'],function(){
    connect.server({
        root: 'dist',
        livereload:true
    })
});

gulp.task('dev',['clean', 'assets', 'copy','app','service']);
gulp.task('build-dev',['connect','watch']);

gulp.task('build',['clean', 'assets', 'copy','app-build','replace']);
gulp.task('default',['build']);