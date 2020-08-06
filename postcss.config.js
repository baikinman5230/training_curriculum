module.exports = {
  plugins: [
    require('post-import'),
    require('post-flexbugs-fixes'),
    require('post-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009'
      },
      stage: 3
    })
  ]
}
