module.exports = {
    content: [
      './_site/**/*.html',
      './src/**/*.{html,njk,md}'
    ],
    theme: {
      extend: {
        fontFamily: {
          'lexend': ['Lexend', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }