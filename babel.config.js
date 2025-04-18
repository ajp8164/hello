module.exports = {
  presets: ['module:@react-native/babel-preset'],
  overrides: [
    {
      plugins: [
        [
          '@babel/plugin-transform-private-methods',
          {
            loose: true,
          },
        ],
      ],
    },
  ],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ios.js', '.android.js', '.ts', '.tsx'],
        root: ['.'],
        alias: {
          app: './src/app/',
          config: './src/config/',
          components: './src/components/',
          img: './src/theme/img/',
          lib: './src/lib/',
          store: './src/store/',
          theme: './src/theme/',
          types: './src/types/',
        },
      },
    ],
    [
      'babel-plugin-inline-import',
      {
        extensions: ['.svg'],
      },
    ],
    'module:react-native-dotenv',
    'react-native-reanimated/plugin',
  ],
};
