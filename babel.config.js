module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@': './src',
          '@icons': './src/icons',
          '@styles': './src/styles',
          '@components': './src/components',
          '@pages': './src/pages',
          '@utils': './src/utils',
        },
      },
    ],
    ['import', {libraryName: '@ant-design/react-native'}],
  ],
};
