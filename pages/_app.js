//? IMPORT
//! Modules
import PropTypes from 'prop-types'

//! Components
import Layout from 'components/Layout'

//! Styles
import './_app.css'
import Theme from 'styles/Theme'

//! Providers
import { ThemeProvider } from 'styled-components'
import { CloudinaryContext } from 'cloudinary-react'

//! Component : MyApp
const MyApp = ({ Component, pageProps }) => (
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
)

MyApp.propTypes = {
    Component: PropTypes.func,
    pageProps: PropTypes.object
}

//? EXPORT
export default MyApp
