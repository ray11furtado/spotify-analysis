module.exports = {
  entry: [
  './browser/index.js',
  ],
  output: {
    path: `${__dirname}/public`,
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1'],
      },
    },
    {
      test: /\.s?css$/,
      loader: 'style-loader!css-loader!sass-loader',
    },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
  },
};
