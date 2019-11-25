//? IMPORT
//! Modules
// import {useState, useEffect} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {animated, useSpring, config} from 'react-spring'

//! Content
//! Constants
const ExpData = [
    {title: 'Self teaching', from: '01/18', to: 'Now', what: 'Learning web development from online sources. Specializing on React and late NextJS.'},
    {title: 'Real estate studies', from: '09-14', to: '08-16', what: 'Real estate studies and work in social real estates'},
    {title: 'Business school', from: '09-13', to: '07-14', what: 'Business bachelor school'},
]
//! Utils
//! Helpers
//! Context
//! Hooks
//! Actions
//! Styles
const Section = styled(animated.section)`
    width: 70%;
    margin: 0px auto;
`
const Container = styled.div`
    width: 100%;
    margin-top: 30vh;
    display: grid;
    grid-template-columns: 50% auto;
    grid-column-gap: 10px;
`
const PageInfo = styled.div`
    h2 {
        font-weight: bold;
        font-size: 3em;
    }
    p {
        margin: 16px 0px;
    }
    span {
        cursor: pointer;
        position: absolute;
        display: flex;
        align-items: center;
        margin: 16px 0px;
        color: rgb(26, 160, 203);
        font-weight: bold;
        svg {
            margin-left: 6px;
        }
    }
`
const Article = styled.article`
    display: flex;
    flex-direction: column;
    margin: ${({first}) => first ? '00px 0px 65px' : '35px 0px'};
    h3 {
        
    }
    div {
        color: #aaa;
    }
    p {

    }
`
//! Components
import Icon from '../../components/Global/Icon'

//! High-order-components
//!  Page : Experiences
//? EXPORT
const Experiences = props => {
    const pageSpring = useSpring({
        config: config.default,
        to: {
            transform: 'translateY(0px)',
            opacity: 1
        },
        from: {
            transform: 'translateY(250px)',
            opacity: 0
        },
    })
    return (
        <Section style={pageSpring}>
            <Container>
                <PageInfo>
                    <h2>{props.Page}</h2>
                    <p>Download a copy of my CV below.</p>
                    <span>Download CV <Icon icon="PDF" color="rgb(26, 160, 203)" /></span>
                </PageInfo>
                <ul>
                    {ExpData.map((exp, i) =>
                        <li key={i}>
                            <Article first={i === 0}>
                                <h3>{exp.title}</h3>
                                <div>{exp.from} - {exp.to}</div>
                                <p>{exp.what}</p>
                            </Article>
                        </li>
                    )}
                </ul>
            </Container>
        </Section>
    )
}

//! Default Props
Experiences.defaultProps = {
    Page: 'Experiences'
}
Experiences.propTypes = {
    Page: PropTypes.string
}

export default Experiences