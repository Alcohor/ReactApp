
const { injectBabelPlugin } = require('react-app-rewired');
const PATH = require('path')

function resolve(url) {
    return PATH.resolve(__dirname, 'src/', url)
}

module.exports = function override(config, env) {
    config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' }], config);
  
    // 配置别名
    config.resolve.alias = {
        ...config.resolve.alias,
        '@': resolve(''),
        '@As': resolve('assets'),
        '@C': resolve('components'), 
        '@common': resolve('component/common'),
        '@pages': resolve('pages'),
        '@lib': resolve('lib'),
        '@hoc': resolve('components/hoc'),
        "@store": resolve('store'),
        "@connect": resolve('connect'),
    }
    console.log(config.resolve.alias)

    return config;
};