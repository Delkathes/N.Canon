//? IMPORTS
//! Modules
import Document, {Html, Head, Main, NextScript} from 'next/document'
import {ServerStyleSheet} from 'styled-components'

//? EXPORT
//! Component : MyDocument
export default class MyDocument extends Document {
    static async getInitialProps (ctx) {
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
    render () {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                    <meta content="width=device-width,initial-scale=1" name="viewport" />

                    <link rel="shortcut icon" type="ico" href="/static/Logo.ico" />

                    {/* <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700&display=auto" rel="stylesheet" /> */}

                    <link rel="canonical" href="https://nicolas-canon.fr" />

                    <style>{`
                        @font-face {
                            font-family: 'Source Sans Pro';
                            font-display: auto;
                            src: url('/public/static/fonts/SourceSansPro-Regular.ttf') format("truetype");
                        }
                        ::-webkit-scrollbar {
                            display: none;
                        }
                        html {
                            background-color: rgb(34, 34, 34);
                            color: rgb(251, 251, 251);
                            -ms-overflow-style: none;
                            scrollbar-width: none;
                        }
                        body {
                            margin: 0;
                            padding: 0;
                        }
                        figure {
                            margin: 0;
                            padding: 0;
                        }
                        ul {
                            list-style: none;
                            margin: 0;
                            padding: 0;
                        }
                        p, h1, h2, h3, h4 {
                            margin: 0;
                            padding: 0;
                            line-height: 1;
                        }
                        a {
                            text-decoration: none;
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