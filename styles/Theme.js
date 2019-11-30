import styled from 'styled-components'
import {animated} from 'react-spring'

const Theme = {
    colors: {
        primary: 'rgb(261,261, 261)',
        secondary: 'rgb(230, 230, 230)',
        reverse: 'rgb(20, 20, 20)',
        highlight: 'rgb(26, 160, 203)',
    },
    fontFamilies: {
        primary: "'Nunito', sans-serif",
        second: "'Roboto', sans-serif"
    },
    fontSource: `
        @font-face {
            font-family: 'Nunito';
            src: url('/static/fonts/Nunito-Regular.ttf');
        }
    `,
    mediaQueries: {
        mobileS: `min-width: 300px`,
        mobileM: `min-width: 375px`,
        mobileL: `min-width: 425px`,
        tablet: `min-width: 730px`,
        laptop: `min-width: 1024px`,
        laptopL: `min-width: 1440px`,
        desktop: `min-width: 1600px`
    }
}

//? EXPORTS
//! Devices
export const device = {
    mobileS: Theme.mediaQueries.mobileS,
    mobileM: Theme.mediaQueries.mobileM,
    mobileL: Theme.mediaQueries.mobileL,
    tablet: Theme.mediaQueries.tablet,
    laptop: Theme.mediaQueries.laptop,
    laptopL: Theme.mediaQueries.laptopL,
    desktop: Theme.mediaQueries.desktop,
    desktopL: Theme.mediaQueries.desktop
}
//! PageName Component
export const PageInfo = styled(animated.div)`
    @media(${device.mobileS}) {
        margin-bottom: 70px;
    }
    @media(${device.tablet}) {
        margin-bottom: 0;
    }
`
export const PageName = styled.div`
    font-weight: bold;
    @media(${device.mobileS}) {
        font-size: 2em;
    }
    @media(${device.tablet}) {
        font-size: 3em;
    }
`
//! Theme
export default Theme