const gulp=require("gulp");
const htmlmin = require('gulp-htmlmin');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const connect = require('gulp-connect');


//把所有文件拷贝到dist
gulp.task("all",function(){
    gulp.src("app/**/*.*")
    .pipe(gulp.dest("dist"))
})
//html压缩任务
gulp.task("html",function(){
    gulp.src("app/**/*.html")//找到这个位置
    .pipe(htmlmin({ collapseWhitespace: true,removeComments: true,collapseBooleanAttributes: true,removeEmptyAttributes: true,removeScriptTypeAttributes: true,removeStyleLinkTypeAttributes: true,minifyJS: true,minifyCSS: true}))
    .pipe(gulp.dest("dist"))   //将找到的.html文件全部输出到dist文件
    .pipe(connect.reload());
})
//压缩js
gulp.task("js",function(){
    gulp.src("app/**/*.js")
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest("dist"))
    .pipe(connect.reload());
})

gulp.task("watch",function(){
    gulp.watch("app/**/*.html",[html]);//监听app下的html,只要有改变，执行watch任务
    gulp.watch("app/**/*.js",[js]);
})


//合并任务,让build任务执行中括号里的任务
gulp.task("build",["all","html","js"])
//开启服务器
gulp.task("connect",function(){
    connect.server({
        root: 'dist',
        livereload: true
      });
})

gulp.task("default",["build","connect"]);