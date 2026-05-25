const { getDefaultConfig } = require('@expo/metro-config');
const { withNativeWind } = require('nativewind/metro');
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');

/**
 * Metro configuration
 * https://docs.expo.dev/bare/installing-expo-modules/
 *
 * @type {import('@expo/metro-config').MetroConfig}
 */
const config = getDefaultConfig(__dirname);

module.exports = wrapWithReanimatedMetroConfig(
  withNativeWind(config, { input: './app/styles/global.css' }),
);
