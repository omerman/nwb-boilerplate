module.exports = (args, command) => {
  return {
    type: 'react-component',
    npm: {
      esModules: true,
      umd: {
        global: 'FoodcostReact',
        externals: {
          react: 'React'
        }
      }
    },
    webpack: {
      extra: {
        entry: {
          demo: './demo/src/index',
        },
        resolve: {
          extensions: ['.ts', '.tsx', '.js', '.jsx'],
        },
        module: {
          rules: [{test: /\.tsx$/, loader: 'ts-loader'}, {
            test: /\.(ts|tsx)$/,
            enforce: 'pre',
            loader: 'eslint-loader',
            exclude: /node_modules/
          }],
        },
      },
    }
  }
};
