const themeDir = __dirname + '/../../';

module.exports = {
  plugins: {
    '@tailwindcss/postcss': {
      config: themeDir + 'assets/css/tailwind.config.js'
    }
  }
}; 