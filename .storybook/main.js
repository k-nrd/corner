const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  'stories': [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'
  ],
  'addons': [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-svelte-csf',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  'framework': '@storybook/svelte',
  'svelteOptions': {
    'preprocess': import('../svelte.config.js').preprocess
  },
   webpackFinal: async  (config) => {
    const svelteLoader = config.module.rules.find(
      (r) => r.loader && r.loader.includes("svelte-loader"),
    )
    svelteLoader.options.preprocess = require("svelte-preprocess")({})
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions,
      }),
    ]
    return config
  },
}
