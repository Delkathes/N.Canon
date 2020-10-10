//? IMPORT
//! Modules
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'
import { Image, Transformation } from 'cloudinary-react'

//! Content
//! Constants
//! Utils
//! Helpers
//! Context
//! Hooks
//! Actions
//! Styles
const Li = styled.li`
    ${({ position }) =>
        position === 'left'
            ? `align-self: flex-start;`
            : position === 'right'
            ? `align-self: flex-end;`
            : `align-self: center;`}
    position: relative;
    margin-bottom: 280px;

    ${({ dark, theme: { colors } }) =>
        dark &&
        `
        color: ${colors.reverse};
    `}
    opacity: ${({ view }) => (view ? 1 : 0)};
    transition-duration: 0.8s;
    transition-delay: 0.2s;
    @media (${({ theme }) => theme.mediaQueries.mobileS}) {
        width: 100%;
    }
    @media (${({ theme }) => theme.mediaQueries.tablet}) {
        width: 70%;
    }

    img {
        width: 100%;
    }
`

//! Components
const TileSC = styled.div`
    position: absolute;

    width: 28%;
    min-width: 220px;

    @media (${({ theme }) => theme.mediaQueries.mobileS}) {
        bottom: -55px;
        padding: 14px 22px;
        ${({ position }) =>
            position === 'left'
                ? `right: 0vw;`
                : position === 'right'
                ? `left: 0vw;`
                : position === 'center'
                ? 'left: 15vw;'
                : ''}
    }
    @media (${({ theme }) => theme.mediaQueries.tablet}) {
        bottom: -45px;
        padding: 40px 32px;
        ${({ position }) =>
            position === 'left'
                ? `right: -4vw;`
                : position === 'right'
                ? `left: -4vw;`
                : position === 'center'
                ? 'left: 25vw;'
                : ''}
    }
    background-color: ${({ background }) => background};
    box-shadow: 0px 8px 18px 0px #0008;
    opacity: ${({ view }) => (view ? 1 : 0)};
    transition-duration: 0.8s;
    transition-delay: 0.3s;
    p {
        font-size: 0.95em;
    }
`
const Tile = ({ alt, text, background, position, inView }) => (
    <TileSC view={inView} background={background} position={position}>
        <h4>{alt}</h4>
        <p>{text}</p>
    </TileSC>
)
Tile.propTypes = {
    alt: PropTypes.string,
    inView: PropTypes.bool,
    text: PropTypes.string,
    background: PropTypes.string,
    position: PropTypes.string
}

//! High-order-components
//! Component : Element
//? EXPORT
const Element = ({ image, alt, position, text, background, dark, i }) => {
    const [ref, inView] = useInView({
        threshold: 0,
        rootMargin: '50px',
        triggerOnce: true
    })
    return (
        <Li
            key={i}
            ref={ref}
            position={position}
            background={background}
            dark={dark}
            view={inView}
        >
            {image.publicId && inView && (
                <Image
                    alt={alt}
                    publicId={image.publicId}
                    height="100%"
                    width="auto"
                    responsive
                >
                    <Transformation dpr="auto" fetchFormat="auto" quality="auto:eco" />
                    <Transformation flags="force_strip" />
                    <Transformation flags="strip_profile" />
                    <Transformation flags="immutable_cache" />
                </Image>
            )}
            {text && (
                <Tile
                    alt={alt}
                    text={text}
                    background={background}
                    position={position}
                    inView={inView}
                />
            )}
        </Li>
    )
}

//! Default Props
Element.defaultProps = {
    Component: 'Element'
}
Element.propTypes = {
    Component: PropTypes.string,
    background: PropTypes.string,
    dark: PropTypes.bool,
    i: PropTypes.number,
    image: PropTypes.object,
    alt: PropTypes.string,
    position: PropTypes.string,
    text: PropTypes.string
}

export default Element
