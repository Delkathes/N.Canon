//? IMPORT
//! Modules
//! Official next plugins
const withPlugins = require('next-compose-plugins')

//! Next.js configuration
const nextConfig = {
    //! target
    target: 'serverless',

    //! Page extensions
    pageExtensions: ['js', 'jsx'],

    //! Env
    env: {
        STATICKIT_NICOLAS: process.env.STATICKIT_NICOLAS
    },
    
    //? Webpack shared config
    webpack: (config) => {
        config.node = {
            fs: 'empty' // Fixes npm packages that depend on `fs` module
        }
        return config
    }
}


module.exports = withPlugins([], nextConfig)