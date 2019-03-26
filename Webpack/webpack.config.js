module.exports = {
  // 入口
  entry: {
    main: './main.js'
  },
  // 出口
  output: {
    filename: './build.js',
    path: __dirname + '/dist'
  },
  watch: true // 文件发生改动，自动监视
}