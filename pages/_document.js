//? IMPORTS
//! Modules
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

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
                    <meta charSet="utf-8" />
                    <meta content="width=device-width,initial-scale=1" name="viewport" />

                    <link
                        rel="shortcut icon"
                        type="ico"
                        href="https://res.cloudinary.com/nicolas-canon/image/upload/q_80:420/v1580690648/Personal%20Site/ico.ico"
                    />
                    <link rel="preconnect" href="https://res.cloudinary.com" />
                    <link rel="dns-prefetch" href="https://res.cloudinary.com" />

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
