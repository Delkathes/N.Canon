import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

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
                    {/* <link
                        rel="preconnect"
                        href="https://res.cloudinary.com"
                        crossOrigin="anonymous"
                    />
                    <link
                        rel="dns-prefetch"
                        href="https://res.cloudinary.com"
                        crossOrigin="anonymous"
                    /> */}

                    <link
                        rel="preload"
                        as="font"
                        href="/fonts/SourceSansPro-Regular.ttf"
                        type="font/ttf"
                        crossOrigin="anonymous"
                    />

                    <style>
                        {`
                        @font-face {
                            font-family: 'Source Sans Pro';
                            font-display: auto;
                            src: url('/fonts/SourceSansPro-Regular.ttf') format("truetype");
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
