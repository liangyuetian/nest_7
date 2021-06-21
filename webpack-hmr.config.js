const nodeExternals = require('webpack-node-externals');
const pnpExternals = require('webpack-pnp-externals');
const WebpackBar = require('webpackbar');
const { RunScriptWebpackPlugin } = require('run-script-webpack-plugin');

module.exports = function (options, webpack) {
  return {
    ...options,
    entry: ['webpack/hot/poll?100', options.entry],
    externals: [
      nodeExternals({
        allowlist: ['webpack/hot/poll?100'],
      }),
      // pnpExternals.WebpackPnpExternals({
      //   allowlist: ['webpack/hot/poll?100'],
      // }),
    ],
    plugins: [
      ...options.plugins,
      new webpack.HotModuleReplacementPlugin(),
      new webpack.WatchIgnorePlugin({
        paths: [/\.js$/, /\.d\.ts$/],
      }),
      new RunScriptWebpackPlugin({ name: options.output.filename }),
      new WebpackBar(),
      // new ProgressBarPlugin({
      //   complete: '█',
      //   format: `${chalk.green('Building')} [ ${chalk.green(
      //     ':bar',
      //   )} ] ':msg:' ${chalk.bold('(:percent)')}`,
      //   clear: true,
      // }),
      // new webpack.WatchIgnorePlugin({
      //   paths: [
      //     '@nestjs/microservices',
      //     '@nestjs/microservices/microservices-module',
      //     'cache-manager',
      //     'class-validator',
      //     'class-transformer',
      //   ],
      // }),
      // new webpack.IgnorePlugin({}),
    ],
  };
};
