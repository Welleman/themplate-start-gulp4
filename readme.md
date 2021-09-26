# Стартовый шаблон для верстки с Gulp 4
- [node.js] - evented I/O for the backend
- [Gulp] - the streaming build system
- [browser-sync] - Browsersync + Gulp.js (web server)
- [gulp-uglify-es] - gulp stream to uglify with 'terser'
- [gulp-autoprefixer] - Prefix CSS with Autoprefixer
- [gulp-sass] - Sass plugin for Gulp
- [gulp-concat] - Concatenates files
- [gulp-imagemin] - Minify PNG, JPEG, GIF and SVG images with imagemin
- [gulp-htmlmin] - gulp plugin to minify HTML
- [merge-stream] - Merge (interleave) a bunch of streams
- [gulp-plumber] - Prevent pipe breaking caused by errors from gulp plugins
- [panini] - A super simple flat file generator for use with Gulp. It compiles a series of HTML pages using a common layout. These pages can also include HTML partials, external Handlebars helpers, or external data as JSON or YAML
- [del] - Delete files and directories using globs

## Vendors

Vendors - `src/js/vendors/` third party libraries ( jQuery, slick, ... )

## Installation

Requires [Node.js](https://nodejs.org/) v14+ to run.

Install the dependencies and devDependencies and start the server.

```sh
cd site
npm i -D
gulp
```

## Cleaning `dist` folder
```sh
gulp clean
```
Deletes the dist folder


   [node.js]: <http://nodejs.org>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [Gulp]: <http://gulpjs.com>
   [browser-sync]: <https://browsersync.io/docs/gulp>
   [gulp-uglify-es]: <https://www.npmjs.com/package/gulp-uglify-es>
   [gulp-autoprefixer]: <https://www.npmjs.com/package/gulp-autoprefixer>
   [gulp-sass]: <https://www.npmjs.com/package/gulp-sass>
   [gulp-concat]: <https://www.npmjs.com/package/gulp-concat>
   [gulp-imagemin]: <https://www.npmjs.com/package/gulp-imagemin>
   [gulp-htmlmin]: <https://www.npmjs.com/package/gulp-htmlmin>
   [merge-stream]: <https://www.npmjs.com/package/merge-stream>
   [gulp-plumber]: <https://www.npmjs.com/package/gulp-plumber>
   [panini]: <https://www.npmjs.com/package/panini>
   [del]: <https://www.npmjs.com/package/del>
