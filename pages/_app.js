//? IMPORT
//! Modules
import React from 'react'
import App from 'next/app'
import 'isomorphic-unfetch'
import {ThemeProvider} from 'styled-components'

//! Components
import Layout from '../components/Layout'

//! Styles
// import Theme from 'styles/Theme'

//! Providers
// import {GlobalProvider} from 'context/store'

//! Component : MyApp
class MyApp extends App {
    render () {
        const {Component, pageProps} = this.props
        return <ThemeProvider theme={{}}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
            <style jsx global>{`
                html {
                    font-family: 'Source Sans Pro', sans-serif;
                }
                `}</style>
        </ThemeProvider>
    }
}

/* <GlobalProvider globalQuery={query.globalQuery}>
    <ThemeProvider theme={Theme}>
        <Layout {...pageProps}>
            <Component {...pageProps} />
        </Layout>
    </ThemeProvider>
</GlobalProvider> */
//? EXPORT
export default MyApp