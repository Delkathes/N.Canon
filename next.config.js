//? IMPORT
//! Modules
//! Official next plugins
const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')

//! Next.js configuration
const nextConfig = {
    target: 'serverless',
    distDir: '.next',
    pageExtensions: ['js', 'jsx'],

    // pageBuffer
    onDemandEntries: {
        maxInactiveAge: 360 * 1000,
        pagesBufferLength: 2
    },

    //! Env
    env: {
        STATICKIT_NICOLAS: process.env.STATICKIT_NICOLAS,
        CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME
    },

    //? Webpack shared config
    webpack: config => {
        config.node = {
            fs: 'empty' // Fixes npm packages that depend on `fs` module
        }
        return config
    }
}

// prettier-ignore
module.exports = withPlugins([[withImages, {
    inlineImageLimit: 16384,
    fileExtensions: ["jpg", "jpeg", "png", "webp", "ico"],

}]], nextConfig)
