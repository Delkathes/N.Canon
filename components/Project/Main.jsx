import PropTypes from 'prop-types'
import styled from 'styled-components'
// import { Image, Transformation, Placeholder } from 'cloudinary-react'
import Image from 'next/image'
import cloudinary from 'cloudinary-core'

const cl = cloudinary.Cloudinary.new({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
})

const Hero = styled.section`
    position: relative;
    @media (${({ theme }) => theme.mediaQueries.mobileS}) {
        height: 280px;
    }
    @media (${({ theme }) => theme.mediaQueries.tablet}) {
        height: 380px;
    }
    width: 100%;
    background-color: ${({ background }) => background};
    img {
        filter: blur(1px);
        position: absolute;
        bottom: 0;
        right: 4vw;
        max-width: 700px;
    }
`
const Title = styled.div`
    z-index: 1;
    ${({ dark, theme: { colors } }) =>
        dark &&
        `
        color: ${colors.reverse};
        `}
    position: absolute;
    bottom: 0;
    @media (${({ theme }) => theme.mediaQueries.mobileS}) {
        left: 8vw;
    }
    @media (${({ theme }) => theme.mediaQueries.tablet}) {
        left: 16vw;
    }
    h1 {
        font-size: 1em;
        font-weight: 400;
        padding-bottom: 14px;
    }
    h2 {
        font-weight: bold;
        line-height: 0.74;
        text-shadow: rgba(0, 0, 0, 0.5) 0px 0px 1em;
        @media (${({ theme }) => theme.mediaQueries.mobileS}) {
            font-size: 3em;
        }
        @media (${({ theme }) => theme.mediaQueries.tablet}) {
            font-size: 4.2em;
        }
    }
`
const Filter = styled.div`
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    background-color: ${({ background }) => `${background}60`};
    z-index: 0;
`

import BottomNav from './BottomNav'
import Content from './Content'

const Main = ({
    description,
    background,
    dark,
    slug,
    title,
    subtitle,
    image,
    data,
    projects
}) => (
    <section className="page-fade" key={title}>
        <Hero background={background}>
            <Title dark={dark}>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
            </Title>
            <Filter background={background} />
            <Image
                alt={title}
                loading="lazy"
                layout="intrinsic"
                quality={90}
                height={300}
                width={300}
                src={cl.url(image, {
                    height: 300,
                    width: 300,
                    crop: 'pad',
                    gravity: 'center',
                    quality: 'auto:eco',
                    flags: ['immutable_cache']
                })}
            />
            {/* <Image
                alt={title}
                publicId={image}
                height="100%"
                width="auto"
                responsive
                loading="eager"
            >
                <Placeholder />
                <Transformation dpr="auto" fetchFormat="auto" quality="auto:eco" />
                <Transformation flags="force_strip.strip_profile.immutable_cache" />
            </Image> */}
        </Hero>
        <section>
            <Content
                background={background}
                description={description}
                dark={dark}
                data={data}
            />
        </section>
        <section>
            <BottomNav projects={projects} slug={slug} />
        </section>
    </section>
)

Main.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    image: PropTypes.object,
    slug: PropTypes.string.isRequired,
    background: PropTypes.string,
    dark: PropTypes.bool,
    data: PropTypes.array,
    style: PropTypes.object,
    target: PropTypes.object,
    projects: PropTypes.array.isRequired
}

export default Main
