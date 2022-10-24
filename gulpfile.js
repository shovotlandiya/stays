import gulp from 'gulp';
import browserSync from 'browser-sync';
import fileInclude from 'gulp-file-include';
import del from 'del';
import gulpSass from 'gulp-sass';
import sassCompiler from 'sass';
import autoprefixer from 'gulp-autoprefixer';
import groupMedia from 'gulp-group-css-media-queries';
import cleanCSS from 'gulp-clean-css';
import rename from "gulp-rename";
import gulpUglify from 'gulp-uglify-es';
import babel from 'gulp-babel';
import imagemin from 'gulp-imagemin';
import ttf2woff from 'gulp-ttf2woff';
import ttf2woff2 from 'gulp-ttf2woff2';
import inject from 'gulp-inject-string';
import concat from 'gulp-concat';

const path = {
  build: {
    html: 'build/',
    styles: 'build/styles/',
    scripts: 'build/scripts/',
    images: 'build/assets/images',
    fonts: 'build/assets/fonts',
  },
  dev: {
    html: 'dev/',
    styles: 'dev/styles/',
    scripts: 'dev/scripts/',
    images: 'dev/assets/images',
    fonts: 'dev/assets/fonts',
  },
  src: {
    html: ['src/*.html', '!src/_*.html'],
    styles: 'src/styles/main.scss',
    scripts: 'src/scripts/*.js',
    images: 'src/assets/images/**/*.{svg,jpg,png,gif,webm,mp4,avi,mpeg}',
    fonts: 'src/assets/fonts/*.ttf',
  },
  watch: {
    html: 'src/*.html',
    styles: 'src/styles/**/*.scss',
    scripts: 'src/scripts/**/*.js',
    images: 'src/assets/images/**/*.{jpg,png,svg,gif,webm,mp4,avi,mpeg}',
  }
};


const { src, dest } = gulp;
const scss = gulpSass(sassCompiler);
const uglify = gulpUglify.default;


const serve = () => {
  browserSync.init({
    server: {
      baseDir: './dev/',
    },
    port: 3000,
    notify: false
  });
};


//HTML
const htmlBase = () => gulp.src(path.src.html)
  .pipe(fileInclude());

const htmlDev = () => htmlBase()
  .pipe(inject.before('<title', '<link rel="stylesheet" href="styles/main.css">\n<script defer src="scripts/main.js"></script>\n'))
  .pipe(gulp.dest(path.dev.html))
  .pipe(browserSync.stream());

const htmlBuild = () => htmlBase()
  .pipe(inject.before('<title', '<link rel="stylesheet" href="styles/main.min.css">\n<script defer src="scripts/main.min.js"></script>\n'))
  .pipe(gulp.dest(path.build.html));


//CSS
const cssBase = () => gulp.src(path.src.styles)
  .pipe(scss({ outputStyle: 'expanded' }));

const cssDev = () => cssBase()
  .pipe(gulp.dest(path.dev.styles))
  .pipe(browserSync.stream());

const cssBuild = () => cssBase()
  .pipe(groupMedia())
  .pipe(autoprefixer({
    overrideBrowserslist: ['last 5 versions'],
    cascade: true,
  }))
  .pipe(gulp.dest(path.build.styles))
  .pipe(cleanCSS())
  .pipe(rename({ extname: '.min.css' }))
  .pipe(gulp.dest(path.build.styles));


// JS
const jsBase = () => gulp.src(['./node_modules/swiper/dist/js/swiper.js', './node_modules/imask/dist/imask.js', path.src.scripts])
  .pipe(concat('main.js'))
  .pipe(fileInclude())
  .pipe(babel({
    presets: ['@babel/env']
  }));

const jsDev = () => jsBase()
  .pipe(gulp.dest(path.dev.scripts))
  .pipe(browserSync.stream());

const jsBuild = () => jsBase()
  .pipe(gulp.dest(path.build.scripts))
  .pipe(uglify())
  .pipe((rename({ extname: '.min.js' })))
  .pipe(gulp.dest(path.build.scripts));


// Images
const imagesBase = () => gulp.src(path.src.images);

const imagesDev = () => imagesBase()
  .pipe(gulp.dest(path.dev.images))
  .pipe(browserSync.stream());

const imagesBuild = () => imagesBase()
  .pipe(gulp.dest(path.build.images))
  .pipe(imagemin({
     interlaced : true,
    progressive: true,
    svgoPlugins: [{ removeViewBox: false }],
    interlaced: true,
    optimizationLevel: 3
  }))
  .pipe(gulp.dest(path.build.images));


const fonts = folder => {
  const ttfToWoff = () => src(path.src.fonts)
    .pipe(ttf2woff())
    .pipe(dest(path[folder].fonts));

  const ttfToWoff2 = () => src(path.src.fonts)
    .pipe(ttf2woff2())
    .pipe(dest(path[folder].fonts));

  return gulp.parallel(
    ttfToWoff,
    ttfToWoff2
  );
};

const watchFiles = () => {
  gulp.watch([path.watch.html], htmlDev);
  gulp.watch([path.watch.styles], cssDev);
  gulp.watch([path.watch.scripts], jsDev);
  gulp.watch([path.watch.images], imagesDev);
};

const deleteFolder = folder => {
  const remove = () => del(folder);
  return remove;
};


export const build = gulp.series(deleteFolder('build'), gulp.parallel(htmlBuild, cssBuild, jsBuild, imagesBuild, fonts('build')));
export const dev = gulp.series(deleteFolder('dev'), gulp.parallel(htmlDev, cssDev, jsDev, imagesDev, fonts('dev')));
export default gulp.series(dev, gulp.parallel(watchFiles, serve));