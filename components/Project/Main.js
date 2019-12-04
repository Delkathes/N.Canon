//? IMPORT
//! Modules
// import {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {animated} from 'react-spring'
// import {useSpring, useTransition, useChain, config, animated} from 'react-spring'

//! Content
//! Constants
//! Utils
//! Helpers
//! Context
//! Hooks
//! Actions
//! Styles
const Hero = styled(animated.section)`
    position: relative;
    height: 380px;
    width: 100%;
    background-color: ${({background}) => background};
    img {
        filter: blur(2px);
        position: absolute;
        bottom: 0;
        right: 4vw;
        max-width: 700px;
    }
`
const Title = styled.div`
    z-index: 1;
    ${({dark, theme: {colors}}) => dark && `
        color: ${colors.reverse};
        `}
    position: absolute;
    bottom: 0;
    @media(${({theme}) => theme.mediaQueries.mobileS}) {
        left: 8vw;
    }
    @media(${({theme}) => theme.mediaQueries.tablet}) {
        left: 16vw;
    }
    h2 {
        font-size: 1em;
        font-weight: 400;
        padding-bottom: 14px;
    }
    h3 {
        
        line-height: 0.76;
        text-shadow: rgba(0, 0, 0, 0.5) 0px 0px 1em;
        @media(${({theme}) => theme.mediaQueries.mobileS}) {
            font-size: 3em;
        }
        @media(${({theme}) => theme.mediaQueries.tablet}) {
            font-size: 4em;
        }
    }
`
const Filter = styled.div`
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    background-color: ${({background}) => `${background}60`};
    z-index: 0;
`

//! Components
import BottomNav from './BottomNav'
import Content from './Content'

//! High-order-components
//! Component : Main
//? EXPORT
const Main = ({background, dark, title, subtitle, image, slug, target, query, style}) => {
    return(
        <animated.section style={style}>
            <Hero background={background}>
                <Title dark={dark}>
                    <h2>{title}</h2>
                    <h3>{subtitle}</h3>
                </Title>
                <Filter background={background} />
                <img
                    src={image} srcSet={image}
                    alt={slug}
                />
            </Hero>
            <section>
                <Content {...target} />
            </section>
            <section>
                <BottomNav query={query} />
            </section>
        </animated.section>
    )
}

//! PropTypes
Main.propTypes = {
    Component: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    image: PropTypes.string,
    slug: PropTypes.string,
    background: PropTypes.string,
    dark: PropTypes.bool,
    query: PropTypes.object,
    style: PropTypes.object,
    target: PropTypes.object,
}
//! Default Props
Main.defaultProps = {
    Component: 'Main'
}

export default Main
