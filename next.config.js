const withPlugins = require('next-compose-plugins')
// const withImages = require('next-images')

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

    env: {
        STATICKIT_NICOLAS: process.env.STATICKIT_NICOLAS,

        SITE_NAME: process.env.SITE_NAME,
        SITE_LANG: process.env.SITE_LANG,
        DOMAIN: 'http://localhost:3000'
    }
}

// prettier-ignore
module.exports = withPlugins([
    // [withImages, {
    // inlineImageLimit: 16384,
    // fileExtensions: ["jpg", "jpeg", "png", "webp"],

    // }]
], nextConfig)
