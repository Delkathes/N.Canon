//? IMPORT
//! Modules
const { PHASE_PRODUCTION_BUILD, PHASE_DEVELOPMENT_SERVER } = require('next/constants')

//! Official next plugins
const withPlugins = require('next-compose-plugins')

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
    [PHASE_DEVELOPMENT_SERVER]: {
        env: {
            DOMAIN: 'http://localhost:3000',
            STATICKIT_NICOLAS: process.env.STATICKIT_NICOLAS,
            CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME
        }
    },
    [PHASE_PRODUCTION_BUILD]: {
        env: {
            DOMAIN: 'https://nicolas-canon.fr',
            STATICKIT_NICOLAS: process.env.STATICKIT_NICOLAS,
            CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME
        }
    },

    //? Webpack shared config
    webpack: config => {
        config.node = {
            fs: 'empty' // Fixes npm packages that depend on `fs` module
        }
        return config
    }
}

module.exports = withPlugins([], nextConfig)
