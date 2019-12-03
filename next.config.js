//? IMPORT
//! Modules
//! Official next plugins
const withPlugins = require('next-compose-plugins')

//! Next.js configuration
const nextConfig = {
    //! target
    target: 'serverless',
    
    //? Webpack shared config
    // webpack: (config, {buildId, dev, isServer, defaultLoaders, webpack}) => {
    webpack: (config) => {
        config.node = {
            fs: 'empty' //! Fixes npm packages that depend on `fs` module
        }
        return config
    }
}


module.exports = withPlugins([
    // [withSize],
    // [withImages],
    // [optimizedImages, {
    //     inlineImageLimit: 8192,
    //     // imagesFolder: 'images',
    //     imagesName: '[name]-[hash].[ext]',
    //     handleImages: ['jpeg', 'png', 'svg', 'jpg'],
    //     // imagesOutputPath: 'static/images/',
    //     optimizeImages: true,
    //     optimizeImagesInDev: true,
    //     mozjpeg: {
    //         quality: 80,
    //     },
    //     // optipng: {
    //     //     optimizationLevel: 3,
    //     // },
    //     // pngquant: false
    // }],
    // [withFonts]
], nextConfig)