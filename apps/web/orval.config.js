module.exports = {
  'petstore-file': {
    input: './config/api-spec/openapi.yaml',
    output: {
      target: './src/generated/petstore.ts',
      client: 'react-query',
      mock: true
    },
    hooks: {
      afterAllFilesWrite: 'prettier --write'
    }
  }
}
