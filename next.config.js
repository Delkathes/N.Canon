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

    images: {
        domains: ['res.cloudinary.com']
    },

    // pageBuffer
    onDemandEntries: {
        maxInactiveAge: 360 * 1000,
        pagesBufferLength: 2
    },

    //! Env
    env: {
        STATICKIT_NICOLAS: process.env.STATICKIT_NICOLAS,

        SITE_NAME: process.env.SITE_NAME,
        SITE_LANG: process.env.SITE_LANG,
        DOMAIN: 'http://localhost:3000',

        OWNER_FIRST_NAME: process.env.OWNER_FIRST_NAME,
        OWNER_NAME: process.env.OWNER_NAME,
        OWNER_MAIL: process.env.OWNER_MAIL,
        OWNER_PHONE: process.env.OWNER_PHONE,

        CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
        CLOUDINARY_KEY: process.env.CLOUDINARY_KEY,
        CLOUDINARY_SECRET: process.env.CLOUDINARY_SECRET
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
