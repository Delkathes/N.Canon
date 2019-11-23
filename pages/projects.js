//? IMPORT
//! Modules
// import {useState, useEffect} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

//! Content
//! Constants
//! Utils
//! Helpers
//! Context
//! Hooks
//! Actions
//! Styles
const Section = styled.section`
    height: auto;
    width: 70%;
    margin: 0px auto;
    padding-top: 180px;
`
const Container = styled.div`
    height: auto;
    width: 100%;
`
const PageName = styled.div`
    font-weight: bold;
    font-size: 3em;
`
const Grid = styled.ul`
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 10px;
`
const SubGrid = styled.div`
    border: 1px solid white;
    height: 500px;
    width: 100%;
    ${({long}) => long && `grid-column: span 2 / auto;`}
`
// const Grid = styled.ul`
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: space-between;
// `
// const Fart = styled.div`
//     border: 1px solid white;
//     height: 400px;
//     width: ${({long}) => long ? '100%' : '49%'};
// `
//! Components
//! High-order-components
//!  Page : Projects
//? EXPORT
const Projects = props => {
    return(
        <>
            <Section>
                <Container>
                    <PageName>{props.Page}</PageName>
                    <Grid>
                        <SubGrid>SubGrid</SubGrid>
                        <SubGrid>SubGrid</SubGrid>
                        <SubGrid long>SubGrid</SubGrid>
                        <SubGrid>SubGrid</SubGrid>
                    </Grid>
                </Container>
            </Section>
        </>
    )
}

//! Default Props
Projects.defaultProps = {
     Page: 'Projects'
}
Projects.propTypes = {
    Page: PropTypes.string
}

export default Projects