//? IMPORT
//! Modules
import React from 'react'
import App from 'next/app'

//! Components
import Layout from '../components/Layout'

//! Styles
import './_app.css'
import Theme from '../styles/Theme'

//! Providers
import { ThemeProvider } from 'styled-components'
import { StaticKitProvider } from '@statickit/react'
// import {GlobalProvider} from 'context/store'

//! Component : MyApp
class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props
        return (
            <StaticKitProvider site={process.env.STATICKIT_NICOLAS}>
                <ThemeProvider theme={Theme}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                    <style jsx global>{`
                        html {
                            font-family: 'Source Sans Pro', sans-serif;
                        }
                    `}</style>
                </ThemeProvider>
            </StaticKitProvider>
        )
    }
}

//? EXPORT
export default MyApp
