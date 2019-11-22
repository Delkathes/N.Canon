//? IMPORT
//! Modules
import React from 'react'
import App from 'next/app'
import {ThemeProvider} from 'styled-components'
import 'isomorphic-unfetch'

//! Components
import Layout from '../components/Layout'

//! Styles
// import Theme from 'styles/Theme'

//! Providers
// import {GlobalProvider} from 'context/store'

//! Component : MyApp
class MyApp extends App {
    // static async getInitialProps ({Component, ctx}) {
    //     const {query} = ctx
    //     let pageProps = {}
    //     if (Component.getInitialProps) {pageProps = await Component.getInitialProps(ctx)}
    //     return {pageProps, query}
    // }
    render () {
        const {Component, pageProps} = this.props
        return <ThemeProvider theme={{}}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
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