module.exports = {
  singleQuote: true,
  semi: false,
  trailingComma: 'none',
  endOfLine: 'auto',
  overrides: [
    {
      files: ['**/*.css', '**/*.scss', '**/*.html'],
      options: {
        singleQuote: false
      }
    }
  ]
}
