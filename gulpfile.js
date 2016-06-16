'use strict';

var browser = require('browser-sync');
var config = require('./gulpfile.config')()
var del = require('del');
var fs = require('fs');
var gulp = require('gulp');
var mergeStream = require('merge-stream');
var panini = require('panini');
var runSequence = require('run-sequence');
var yargs = require('yargs');

var $ = require('gulp-load-plugins')({ lazy: true });

var production = !!(yargs.argv.production);

gulp.task('build', function (done) {
    return runSequence('clean', ['icons', 'images', 'panini', 'styles', 'scripts'], function () {
        done();
    });
});

gulp.task('default', function (done) {
    return runSequence('build', 'browser', 'watch', function () {
        done();
    });
});

gulp.task('clean', function () {
    return del([config.paths.dist.root + '/*', config.paths.docs.root + '/*']);
});

gulp.task('browser', function (done) {
    browser.init({
        server: config.paths.docs.root, port: config.serverPort
    });

    return done();
});

gulp.task('browser:reload', function (done) {
    browser.reload();

    return done();
});

gulp.task('icons', function () {
    return gulp.src(config.paths.src.icons + '/**/*')
        .pipe($.imagemin({
            progressive: true
        }))
        .pipe(gulp.dest(config.paths.docs.icons));
});

gulp.task('images', function () {
    return gulp.src(config.paths.src.images + '/**/*')
        .pipe($.imagemin({
            progressive: true
        }))
        .pipe(gulp.dest(config.paths.docs.images));
});

gulp.task('panini', ['panini:layouts', 'panini:pages', 'panini:partials'], function () {
    return gulp.src(config.paths.bin.pages + '/**/*.{html,hbs,handlebars}')
        .pipe(panini({
            root: config.paths.bin.pages,
            layouts: config.paths.bin.layouts,
            partials: config.paths.bin.partials,
            data: config.paths.bin.data,
            helpers: config.paths.bin.helpers
        }))
        .pipe(gulp.dest(config.paths.docs.root));
});

gulp.task('panini:layouts', function () {
    return gulp.src(config.paths.src.layouts + '/**/*.{html,hbs,handlebars}')
        .pipe($.htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest(config.paths.bin.layouts));
});

gulp.task('panini:pages', function () {
    return gulp.src(config.paths.src.pages + '/**/*.{html,hbs,handlebars}')
        .pipe($.htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest(config.paths.bin.pages));
});

gulp.task('panini:partials', function () {
    return gulp.src(config.paths.src.partials + '/**/*.{html,hbs,handlebars}')
        .pipe($.htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest(config.paths.bin.partials));
});

gulp.task('panini:refresh', function (done) {
    panini.refresh();

    return done();
});

gulp.task('scripts', ['scripts:application']);

gulp.task('scripts:application', function () {
    var javaScripts = gulp.src([
        config.paths.src.scripts + '/**/*.js',
        '!' + config.paths.src.scripts + '/Modernizr.js'
    ]);

    var typeScripts = gulp.src(config.paths.src.scripts + '/**/*.ts')
        .pipe($.typescript({
            sortOutput: true
        }));

    return mergeStream(javaScripts, typeScripts)
        .pipe($.sourcemaps.init({ loadMaps: true }))
        .pipe($.babel())
        .pipe($.concat('oakbrookstyleguide.js'))
        .pipe(gulp.dest(config.paths.dist.scripts))
        .pipe(gulp.dest(config.paths.docs.scripts))
        .pipe($.uglify())
        .pipe($.rename('oakbrookstyleguide.min.js'))
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest(config.paths.dist.scripts))
        .pipe(gulp.dest(config.paths.docs.scripts));
});

gulp.task('scripts:docs', function () {
    return gulp.src([
        config.paths.bower.root + '/bootstrap-sass/assets/javascripts/bootstrap/dropdown.js',
        config.paths.bower.root + '/jquery/dist/jquery.js'
    ])

        .pipe($.sourcemaps.init({ loadMaps: true }))
        .pipe($.babel())
        .pipe($.concat('docs.js'))
        .pipe(gulp.dest(config.paths.docs.scripts))
        .pipe($.uglify())
        .pipe($.rename('docs.min.js'))
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest(config.paths.docs.scripts));
});

gulp.task('styles', ['styles:likelyloans', 'styles:docs']);

gulp.task('styles:likelyloans', function () {
    return gulp.src(config.paths.src.styles + '/LikelyLoans/LikelyLoans.scss')
        .pipe($.sourcemaps.init({ loadMaps: true }))
        .pipe($.sass({
            includePaths: config.paths.src.styles + '/LikelyLoans'
        }).on('error', $.sass.logError))
        .pipe($.concat('likelyloans.css'))
        .pipe($.autoprefixer({
            browsers: config.compatibility
        }))
        .pipe(gulp.dest(config.paths.dist.styles))
        .pipe($.cssnano())
        .pipe($.rename('likelyloans.min.css'))
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest(config.paths.dist.styles));
});

gulp.task('styles:docs', function () {
    return gulp.src(config.paths.src.styles + '/LikelyLoans/Docs.scss')
        .pipe($.sourcemaps.init({ loadMaps: true }))
        .pipe($.sass({
            includePaths: config.paths.src.styles + '/LikelyLoans'
        }).on('error', $.sass.logError))
        .pipe($.concat('likelyloans.css'))
        .pipe($.autoprefixer({
            browsers: config.compatibility
        }))
        .pipe(gulp.dest(config.paths.docs.styles))
        .pipe($.cssnano())
        .pipe($.rename('likelyloans.min.css'))
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest(config.paths.docs.styles));
});

gulp.task('watch', function () {
    gulp.watch(config.paths.src.icons + '/**/*', ['icons', browser.reload]);
    gulp.watch(config.paths.src.images + '/**/*', ['images', browser.reload]);
    gulp.watch([config.paths.src.layouts + '/**/*.{html,hbs,handlebars}', config.paths.src.pages + '/**/*.{html,hbs,handlebars}', config.paths.src.partials + '/**/*.{html,hbs,handlebars}'], function () {
        runSequence('panini:refresh', 'panini', 'browser:reload');
    });
    gulp.watch(config.paths.src.scripts + '/**/*.{js,ts}', ['scripts', browser.reload]);
    gulp.watch(config.paths.src.styles + '/**/*.scss', ['styles', browser.reload]);
});