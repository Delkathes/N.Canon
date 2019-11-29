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
        mobileS: '300px',
        mobileM: '375px',
        mobileL: '425px',
        tablet: '730px',
        laptop: '1024px',
        laptopL: '1440px',
        desktop: '1600px'
    },
    rules: {
        noMarPad: `
            margin: 0;
            padding: 0;
        `,
        flexCenter: `
            display: flex;
            justify-content: center;
            align-items: center;
        `,
        customDim: (height = 'auto', width = 'auto') => ({
            height: height,
            width: width
        })
    }
}
export const device = {
    mobileS: `min-width: ${Theme.mediaQueries.mobileS}`,
    mobileM: `min-width: ${Theme.mediaQueries.mobileM}`,
    mobileL: `min-width: ${Theme.mediaQueries.mobileL}`,
    tablet: `min-width: ${Theme.mediaQueries.tablet}`,
    laptop: `min-width: ${Theme.mediaQueries.laptop}`,
    laptopL: `min-width: ${Theme.mediaQueries.laptopL}`,
    desktop: `min-width: ${Theme.mediaQueries.desktop}`,
    desktopL: `min-width: ${Theme.mediaQueries.desktop}`
}
//? EXPORTS
//! Theme
export default Theme


export const Container = styled(animated.div)`
    display: ${({display}) => display};
    flex-direction: ${({direction}) => direction};
    justify-content: ${({justify}) => justify};
    align-items: ${({alignement}) => alignement};
    grid-template-columns: ${({columns}) => columns};
    grid-template-rows: ${({rows}) => rows};

    position: ${({position}) => position};
    top: ${({top}) => top};
    bottom: ${({bottom}) => bottom};
    right: ${({right}) => right};
    left: ${({left}) => left};
    z-index: ${({superposition}) => superposition};
    overflow: ${({overflow}) => overflow};

    height: ${({height}) => height};
    width: ${({width}) => width};


    margin: ${({margin}) => margin};
    padding: ${({padding}) => padding};

    background: ${({background}) => background};
    box-shadow: ${({shadow}) => shadow};

    border-radius: ${({radius}) => radius};
    border-left: ${({borderleft}) => borderleft};
    border-top: ${({bordertop}) => bordertop};
    border-right: ${({borderright}) => borderright};
    border-bottom: ${({borderbottom}) => borderbottom};

    font-family: ${({family}) => family};

    opacity: ${({opacity}) => opacity};
    transition-duration: ${({duration}) => duration};
`
