//? IMPORT
//! Modules
import PropTypes from 'prop-types'
import { DefaultSeo } from 'next-seo'
import SEO from 'next-seo.config'

//! Components
import Layout from 'components/Layout'

//! Styles
import './_app.css'
import Theme from 'styles/Theme'

//! Providers
import { ThemeProvider } from 'styled-components'
import { StaticKitProvider } from '@statickit/react'
import { CloudinaryContext } from 'cloudinary-react'

//! Component : MyApp
const MyApp = ({ Component, pageProps }) => (
    <StaticKitProvider site={process.env.STATICKIT_NICOLAS}>
        <DefaultSeo {...SEO} />
        <CloudinaryContext secure cloudName={process.env.CLOUDINARY_CLOUD_NAME}>
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
        </CloudinaryContext>
    </StaticKitProvider>
)

MyApp.propTypes = {
    Component: PropTypes.func,
    pageProps: PropTypes.object
}

//? EXPORT
export default MyApp
