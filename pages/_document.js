//? IMPORTS
//! Modules
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import LogoIcon from 'public/static/Logo.ico'

//? EXPORT
//! Component : MyDocument
export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage
        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
                })
            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                )
            }
        } finally {
            sheet.seal()
        }
    }
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link
                        rel="preconnect"
                        href="https://res.cloudinary.com"
                        crossOrigin="anonymous"
                    />
                    <link
                        rel="dns-prefetch"
                        href="https://res.cloudinary.com"
                        crossOrigin="anonymous"
                    />

                    <link rel="shortcut icon" type="ico" href={LogoIcon} />
                    <style>
                        {`
                        @font-face {
                            font-family: 'Source Sans Pro';
                            font-display: auto;
                            src: url('/public/static/fonts/SourceSansPro-Regular.ttf') format("truetype");
                        }
                    `}
                    </style>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
