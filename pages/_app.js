import PropTypes from 'prop-types'
import { DefaultSeo } from 'next-seo'
import SEO from 'next-seo.config'

import Layout from 'components/Layout'

import './_app.css'
import Theme from 'styles/Theme'

import { ThemeProvider } from 'styled-components'
// import { CloudinaryContext } from 'cloudinary-react'

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
        {/* <CloudinaryContext secure cloudName={process.env.CLOUDINARY_CLOUD_NAME}>
        </CloudinaryContext> */}
    </>
)

MyApp.propTypes = {
    Component: PropTypes.func,
    pageProps: PropTypes.object
}

export default MyApp
