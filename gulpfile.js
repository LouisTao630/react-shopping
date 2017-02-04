var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var minifycss = require('gulp-minify-css');

gulp.task('default',function(){
	return browserify('./source/app.js')
	.transform(babelify,{presets: ["es2015", "react"]})
	.bundle()
	.pipe(source('app.js'))
	.pipe(gulp.dest('./build/'));
});

gulp.task('minifycss', function() {
    return gulp.src('./source/components/item.css')      //压缩的文件
        .pipe(minifycss())   //输出文件夹
        .pipe(gulp.dest('./build/'));   //执行压缩
});