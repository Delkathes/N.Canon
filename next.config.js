//? IMPORT
//! Modules
// const path = require('path')
// const {PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD} = require('next/constants')

//! Official next plugins
const withPlugins = require('next-compose-plugins')
// const withSize = require('next-size')
// const withImages = require('next-images')
// const optimizedImages = require('next-optimized-images')
// const withFonts = require('next-fonts')

//! Absolute imports
// const {AbsoluteImports, sharedConfig, devConfig, prodConfig} = require('./config/_extend.next')
// function resolveHelper (config, alias, target) {
//     config.resolve.alias[alias] = path.join(__dirname, target)
// }

//! Router
// const {router} = require("./router")


//! Next.js configuration
const nextConfig = {
    //! target
    target: 'serverless',
    //! Export PathMap
    // exportPathMap: async () => {
    //     return router
    // },
    // ...sharedConfig,
    //? Webpack shared config
    webpack: (config) => {
    // webpack: (config, {buildId, dev, isServer, defaultLoaders, webpack}) => {
        // AbsoluteImports.map(abs => resolveHelper(config, abs.alias, abs.target)) //! absolute imports

        config.node = {
            fs: 'empty' //! Fixes npm packages that depend on `fs` module
        }
        //* Loader
        // config.module.rules.push(
        //     {
        //         test: /\.md$/,
        //         use: 'frontmatter-markdown-loader'
        //     }
        // )
        return config
    },
    //? Phased configs
    // //* Dev server
    // [PHASE_DEVELOPMENT_SERVER]: devConfig,
    // //* Prod build
    // [PHASE_PRODUCTION_BUILD]: prodConfig,
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