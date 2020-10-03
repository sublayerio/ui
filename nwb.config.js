module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: false
  },
  devServer: {
    hot: false,
    liveReload: false,
    injectClient: false,
    inline: false,
    public: 'https://ui.keyflight.sublayer.io'
  }
}
