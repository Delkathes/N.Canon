//? IMPORT
//! Modules
// import {useState, useEffect} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

//! Content
//! Constants
const ExpData = [
    {title: 'Selt teaching', from: '01/18', to: 'Now', what: 'Web development '},
    {title: '', from: '', to: '', what: ''},
    {title: '', from: '', to: '', what: ''},
]
//! Utils
//! Helpers
//! Context
//! Hooks
//! Actions
//! Styles
const Section = styled.section`
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
const PageName = styled.div`
    font-weight: bold;
    font-size: 3em;
`
const ExpList = styled.ul`
    
`
const Experience = styled.li`
    
`
//! Components
//! High-order-components
//!  Page : Experiences
//? EXPORT
const Experiences = props => {
    return (
        <Section>
            <Container>
                <div>
                    <PageName>{props.Page}</PageName>
                    <p>Download a copy of my CV below.</p>
                </div>
                <ExpList>
                    {ExpData.map((exp, i) =>
                        <Experience key={i}>
                            <h3>{exp.title}</h3>
                            <div>{exp.from} - {exp.to}</div>
                            <p>{exp.what}</p>
                        </Experience>
                    )}
                </ExpList>
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