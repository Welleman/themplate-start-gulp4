const {
    src,
    dest,
    watch,
    parallel
} = require("gulp");

const server = require("browser-sync").create();
const uglify = require("gulp-uglify-es").default;
const autoprefixer = require("gulp-autoprefixer");
const sass = require("gulp-sass")(require("sass"));
const imagemin = require("gulp-imagemin");
const concat = require("gulp-concat");
const htmlmin = require("gulp-htmlmin");
const merge = require('merge-stream');
const notify = require("gulp-notify"); // Notification | Уведомления
const plumber = require("gulp-plumber");
const panini = require("panini");
const del = require("del");

// Sections of site (sass)
const sections = ['main', 'post'];

/**
 * HTML
 */
const html = () => {
    panini.refresh();
    return src('src/html/**.html')
        .pipe(panini({
            root: 'src/html',
            layouts: 'src/html/layouts/',
            partials: 'src/html/partials/',
            pageLayouts: {
                'main': 'main',
                'posts': 'posts',
                'post': 'post',
            }
        }))
        .pipe(htmlmin({
            collapseWhitespace: false
        }))
        .pipe(dest('dist'))
}

/**
 * Clean DIST
 */
const cleanDist = async () => {
    return await del("dist");
}

/**
 * Images
 */
const images = () => {
    return src("src/img/*")
        .pipe(imagemin([
            imagemin.gifsicle({
                interlaced: true
            }),
            imagemin.mozjpeg({
                quality: 75,
                progressive: true
            }),
            imagemin.optipng({
                optimizationLevel: 5
            }),
            imagemin.svgo({
                plugins: [{
                    removeViewBox: true
                }, {
                    cleanupIDs: false
                }],
            }),
        ]))
        .pipe(dest("dist/img"));
}

/**
 * Scripts
 */
const scripts = () => {
    return src("src/js/*.js")
        .pipe(concat("app.min.js"))
        .pipe(uglify())
        .pipe(dest("dist/js"))
}

/**
 * Подключение любых сторонних библиотек
 */
const vendors = () => {
    return src("src/js/vendors/*.js")
        .pipe(dest("dist/js"))
}

/**
 * Styles
 */
const styles = () => {
    const streams = sections.map((item) => {
        return src(`src/sass/${[item]}/*.sass`)
            .pipe(sass({
                outputStyle: "compressed"
            }))
            .pipe(concat(`${[item]}.min.css`))
            .pipe(plumber())
            .pipe(
                autoprefixer({
                    overrideBrowserslist: ["last 10 version"],
                    grid: true,
                })
            )
            .pipe(dest(`dist/css`));
    });
    // объединение потоков для Gulp
    return merge(streams);
}

const serve = () => {
    server.init({
        server: {
            baseDir: "dist/",
        },
    });
}

const startwatch = () => {
    watch(['src/js/**/*.js', '!src/js/*.min.js'], scripts).on('change', server.reload)
    watch('src/sass/**/*.sass', styles).on('change', server.reload)
    watch('src/html/**/*.html', html).on('change', server.reload)
}

exports.html = html
exports.scripts = scripts
exports.vendors = vendors
exports.styles = styles
exports.images = images
exports.serve = serve
exports.startwatch = startwatch
exports.clean = cleanDist
exports.default = parallel(html, scripts, vendors, styles, images, startwatch, serve)