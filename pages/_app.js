import PropTypes from 'prop-types'
import { DefaultSeo } from 'next-seo'
import SEO from 'next-seo.config'

import Layout from 'components/Layout'

import './_app.css'
import Theme from 'styles/Theme'

import { ThemeProvider } from 'styled-components'

const MyApp = ({ Component, pageProps }) => (
    <>
        <DefaultSeo {...SEO} />
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
    </>
)

MyApp.propTypes = {
    Component: PropTypes.func,
    pageProps: PropTypes.object
}

export default MyApp
