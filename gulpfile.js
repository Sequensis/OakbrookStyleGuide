'use strict';

var browser = require('browser-sync');
var config = require('./gulpfile.config')();
var del = require('del');
var fs = require('fs');
var gulp = require('gulp');
var mergeStream = require('merge-stream');
var a = require('./package.json');
var packageVersion = a.version;
var panini = require('panini');
var runSequence = require('run-sequence');
var yargs = require('yargs');
var realFavicon = require('gulp-real-favicon');
var fs = require('fs');

var $ = require('gulp-load-plugins')({ lazy: true });

var production = !!(yargs.argv.production);

// ===
var favicon = 'favicon.json';
// ===

gulp.task('build', function (done) {
    return runSequence('clean', 'icons', ['fonts', 'images', 'panini', 'styles', 'scripts'], function () {
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

gulp.task('fonts', ['fonts:font-awesome', 'fonts:likely-loans-font']);

gulp.task('fonts:font-awesome', function () {
    return gulp.src(
        config.paths.bower.root + '/components-font-awesome/fonts/**/*.*'
    )
        .pipe(gulp.dest(config.paths.docs.fonts))
        .pipe(gulp.dest(config.paths.dist.fonts));
});

gulp.task('fonts:likely-loans-font', function () {
    return gulp.src(config.paths.src.fonts + '/**/*')
        .pipe($.imagemin({
            progressive: true
        }))
        .pipe(gulp.dest(config.paths.docs.fonts))
        .pipe(gulp.dest(config.paths.dist.fonts));
});


gulp.task('icons', function (done) {
    return runSequence('icons:generate-favicon', 'icons:inject-favicon-markups', 'icons:check-for-favicon-update', function () {
        done();
    });
});

gulp.task('icons:generate-favicon', function (done) {
    realFavicon.generateFavicon({
        masterPicture: config.paths.src.icons + '/Likelyloans/Favicon.png',
        dest: config.paths.docs.root,
        iconsPath: '/',
        design: {
            ios: {
                pictureAspect: 'backgroundAndMargin',
                backgroundColor: '#005bc6',
                margin: '14%'
            },
            desktopBrowser: {},
            windows: {
                pictureAspect: 'noChange',
                backgroundColor: '#005bc6',
                onConflict: 'override'
            },
            androidChrome: {
                pictureAspect: 'backgroundAndMargin',
                margin: '17%',
                backgroundColor: '#005bc6',
                themeColor: '#005bc6',
                manifest: {
                    name: 'Likely Loans',
                    display: 'browser',
                    orientation: 'notSet',
                    onConflict: 'override',
                    declared: true
                }
            },
            safariPinnedTab: {
                pictureAspect: 'blackAndWhite',
                threshold: 86.71875,
                themeColor: '#005bc6'
            }
        },
        versioning: {
            paramName: 'v',
            paramValue: packageVersion
        },
        settings: {
            scalingAlgorithm: 'Mitchell',
            errorOnImageTooSmall: false
        },
        markupFile: favicon
    }, function () {
        return done();
    });
});

gulp.task('icons:inject-favicon-markups', function () {
    return gulp.src('./src/Layouts/*.html')
        .pipe(realFavicon.injectFaviconMarkups(JSON.parse(fs.readFileSync(favicon)).favicon.html_code))
        .pipe(gulp.dest('./src/Layouts'));
});

gulp.task('icons:check-for-favicon-update', function (done) {
    var currentVersion = JSON.parse(fs.readFileSync(favicon)).version;
    realFavicon.checkForUpdates(currentVersion, function (err) {
        if (err) {
            throw err;
        }
    });

    return done();
});

gulp.task('images', function () {
    return gulp.src(config.paths.src.images + '/**/*')
        .pipe($.imagemin({
            progressive: true
        }))
        .pipe(gulp.dest(config.paths.docs.images))
        .pipe(gulp.dest(config.paths.dist.images));
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
            collapseWhitespace: false
        }))
        .pipe(gulp.dest(config.paths.bin.layouts));
});

gulp.task('panini:pages', function () {
    return gulp.src(config.paths.src.pages + '/**/*.{html,hbs,handlebars}')
        .pipe($.htmlmin({
            collapseWhitespace: false
        }))
        .pipe(gulp.dest(config.paths.bin.pages));
});

gulp.task('panini:partials', function () {
    return gulp.src(config.paths.src.partials + '/**/*.{html,hbs,handlebars}')
        .pipe($.htmlmin({
            collapseWhitespace: false
        }))
        .pipe(gulp.dest(config.paths.bin.partials));
});

gulp.task('panini:refresh', function (done) {
    panini.refresh();

    return done();
});

gulp.task('scripts', ['scripts:application', 'scripts:docs']);

gulp.task('scripts:application', function () {
    var javaScripts = gulp.src([
        config.paths.src.scripts + '/Modernizr.js',
        config.paths.bower.root + '/jquery-legacy/dist/jquery.js',
        config.paths.bower.root + '/bootstrap-sass/assets/javascripts/bootstrap.js',
        config.paths.bower.root + '/Swiper/dist/js/swiper.jquery.min.js',
        config.paths.bower.root + '/jquery-animateNumber/jquery.animateNumber.min.js',
        config.paths.src.root + '/Scripts/Docs/Auth0.js'

    ]);

    var typeScripts = gulp.src(config.paths.src.scripts + '/**/*.ts')
        .pipe($.typescript({
            sortOutput: true
        }));

    return mergeStream(javaScripts, typeScripts)
        .pipe($.sourcemaps.init({ loadMaps: true }))
        .pipe($.concat('likelyloans.js'))
        .pipe(gulp.dest(config.paths.dist.scripts))
        .pipe($.uglify())
        .pipe($.rename('likelyloans.min.js'))
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest(config.paths.dist.scripts))
});

gulp.task('scripts:docs', function () {
    return gulp.src([
        config.paths.bower.root + '/jquery-legacy/dist/jquery.js',
        config.paths.bower.root + '/bootstrap-sass/assets/javascripts/bootstrap.js',
        config.paths.bower.root + '/Swiper/dist/js/swiper.jquery.min.js',        
        config.paths.bower.root + '/nouislider/distribute/nouislider.min.js',  
        config.paths.bower.root + '/jquery-animateNumber/jquery.animateNumber.min.js',
        config.paths.bower.root + '/highlightjs/highlight.pack.js',
        config.paths.src.scripts + '/Docs/**/*'
    ])

        .pipe($.sourcemaps.init({ loadMaps: true }))
        .pipe($.concat('docs.js'))
        .pipe(gulp.dest(config.paths.docs.scripts))
        .pipe($.uglify())
        .pipe($.rename('docs.min.js'))
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest(config.paths.docs.scripts));
});

gulp.task('styles', ['styles:likelyloans', 'styles:docs']);

gulp.task('styles:likelyloans', function () {
    return gulp.src([config.paths.src.styles + '/LikelyLoans/Docs.scss',config.paths.bower.root+'/Swiper/dist/css/swiper.css',config.paths.bower.root+'/nouislider/distribute/nouislider.min.css'])
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
    return gulp.src([config.paths.src.styles + '/LikelyLoans/Docs.scss',config.paths.bower.root+'/Swiper/dist/css/swiper.css',config.paths.bower.root+'/nouislider/distribute/nouislider.min.css'])
        .pipe($.sourcemaps.init({ loadMaps: true }))
        .pipe($.sass({
            includePaths: config.paths.src.styles + '/LikelyLoans'
        }).on('error', $.sass.logError))
        .pipe($.concat('likelyloans.css'))
        .pipe($.autoprefixer({
            browsers: config.compatibility
        }))
        .pipe(gulp.dest(config.paths.docs.styles))
        .pipe($.rename('likelyloans.min.css'))
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest(config.paths.docs.styles));
});

gulp.task('watch', function () {
    gulp.watch(config.paths.src.fonts + '/**/*', ['fonts', browser.reload])
    gulp.watch(config.paths.src.icons + '/LikelyLoans/Favicon.png', function () {
        runSequence('icons', 'panini:refresh', 'panini', 'browser:reload');
    });
    gulp.watch(config.paths.src.images + '/**/*', ['images', browser.reload]);
    gulp.watch([config.paths.src.layouts + '/**/*.{html,hbs,handlebars}', config.paths.src.pages + '/**/*.{html,hbs,handlebars}', config.paths.src.partials + '/**/*.{html,hbs,handlebars}'], function () {
        runSequence('panini:refresh', 'panini', 'browser:reload');
    });
    gulp.watch(config.paths.src.scripts + '/**/*.{js,ts}', ['scripts', browser.reload]);
    gulp.watch(config.paths.src.styles + '/**/*.scss', ['styles:docs', browser.reload]);
});