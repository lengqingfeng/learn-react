// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  extraBabelPlugins: [['import', { libraryName: 'antd-mobile', style: true }]],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: false,
        dva: false,
        dynamicImport: false,
        title: 'react_web_app',
        dll: false,

        routes: {
          exclude: [/components\//],
        },
      },
    ],
  ],
};
