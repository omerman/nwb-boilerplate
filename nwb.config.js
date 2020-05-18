module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'FoodcostReact',
      externals: {
        react: 'React'
      }
    }
  }
}
