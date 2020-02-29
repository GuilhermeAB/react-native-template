module.exports = {
  presets: ['module:metro-react-native-babel-preset', 'module:react-native-dotenv'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.tsx',
          '.ts',
          '.js',
          '.json',
        ],
        // Folders you need shortcuts for your module imports
        alias: {
          src: './src',
          assets: './src/assets',
          components: './src/components',
          pages: './src/pages',
          services: './src/services',
          store: './src/store',
          styles: './src/styles',
        },
      },
    ],
  ],
};
