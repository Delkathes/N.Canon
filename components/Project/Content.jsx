import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Marked } from 'utils/marked'

const Description = styled.div`
    p {
        @media (${({ theme }) => theme.mediaQueries.mobileS}) {
            margin: 80px auto;
            width: 88%;
            font-size: 1.2em;
            color: ${({ theme: { colors } }) => colors.secondary};
            line-height: 1.5em;
            font-weight: 300;
            text-align: justify;
        }
        @media (${({ theme }) => theme.mediaQueries.tablet}) {
            margin: 120px auto;
            width: 70%;
            font-size: 1.6em;
            color: ${({ theme: { colors } }) => colors.secondary};
            line-height: 1.5em;
            font-weight: 300;
        }
        @media (${({ theme }) => theme.mediaQueries.laptop}) {
            margin: 120px auto;
            width: 60%;
            font-size: 1.9em;
            color: ${({ theme: { colors } }) => colors.secondary};
            line-height: 1.5em;
            font-weight: 300;
        }
    }
`
const List = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
`

import Element from './Element'

const Content = ({ background, dark, description, data }) => (
    <>
        <Description>
            <Marked markdown={description} />
        </Description>
        <List>
            {data.map((project, i) => (
                <Element key={i} {...project} background={background} dark={dark} />
            ))}
        </List>
    </>
)

Content.propTypes = {
    background: PropTypes.string,
    dark: PropTypes.bool,
    description: PropTypes.string,
    data: PropTypes.array
}

export default Content
