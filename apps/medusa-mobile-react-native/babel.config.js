module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    'react-native-worklets/plugin',
    [
      'module-resolver',
      {
        root: ['./app'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@styles': './app/styles',
          '@images': './app/images',
          '@screens': './app/screens',
          '@components': './app/components',
          '@constants': './app/constants',
          '@api': './app/api',
          '@utils': './app/utils',
          '@data': './app/data',
          '@types': './app/types',
        },
      },
    ],
  ],
};