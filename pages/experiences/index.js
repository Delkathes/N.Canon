//? IMPORT
//! Modules
import {useEffect, useState} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {animated, useSpring, useTrail} from 'react-spring'

//! Content
//! Constants
import ExpData from '../../content/experiences.json'
const ExpLength = ExpData.length

//! Utils
//! Helpers
//! Context
//! Hooks
//! Actions
//! Styles
const Section = styled(animated.section)`
    width: 66%;
    margin: 0px auto;
`
const Container = styled.div`
    width: 100%;
    margin-top: 30vh;
    display: grid;
    grid-template-columns: 50% auto;
    grid-column-gap: 10px;
`
const PageInfo = styled(animated.div)`
    h2 {
        font-weight: bold;
        font-size: 3em;
    }
    p {
        margin: 16px 0px;
    }
    a {
        color: rgb(26, 160, 203);
        font-weight: bold;
    }
    span {
        cursor: pointer;
        position: absolute;
        display: flex;
        align-items: center;
        margin: 16px 0px;
        /* color: rgb(26, 160, 203); */
        
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
const Experiences = ({Page}) => {
    //* useState : mounted
    const [mounted, setMount] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setMount(true)
        }, 350)
        return () => {
            setMount(false)
        }
    }, [])
    
    const pageSpring = useSpring({
        to: {
            transform: 'translateY(0px)',
            opacity: 1
        },
        from: {
            transform: 'translateY(200px)',
            opacity: 0
        },
    })
    
    

    const trail = useTrail(ExpLength, {
        trail: 1000,
        transform: mounted ? 'translateX(-40px)' : 'translateX(0px)',
        opacity: mounted ? 1 : 0,
    })

    return (
        <Section>
            <Container>
                <PageInfo style={pageSpring}>
                    <h2>{Page}</h2>
                    <p>Check <a href="/static/CV.pdf" target="_blank">my CV</a> or download a copy of it below.</p>
                    <a href="/static/CV.pdf" download><span>Download CV <Icon icon="PDF" color="rgb(26, 160, 203)" /></span></a>
                </PageInfo>
                <ul>
                    {trail.map((props, i) =>
                        <animated.li key={i} style={props}>
                            <Article first={i === 0}>
                                <h3>{ExpData[i].title}</h3>
                                <div>{ExpData[i].from} - {ExpData[i].to}</div>
                                <p>{ExpData[i].what}</p>
                            </Article>
                        </animated.li>
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