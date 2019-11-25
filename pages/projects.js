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
    width: 62%;
    margin: 0px auto;
    padding-top: 180px;
`
const Container = styled.div`
    height: auto;
    width: 100%;
    margin: auto;
`
const PageName = styled.div`
    font-weight: bold;
    font-size: 3em;
`
const Grid = styled.ul`
    display: grid;
    grid-template-columns: 50% 50%;
`
const ElGrid = styled.li`
    width: 100%;
    padding-top: 100%;
    border: 1px solid white;
    ${({long}) => long && `
        grid-column: span 2 / auto;
        padding-top: 50%;
    `}
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
                        <ElGrid>
                            
                        </ElGrid>
                        <ElGrid>
                            
                        </ElGrid>
                        <ElGrid long>
                            
                        </ElGrid>
                        <ElGrid>
                            
                        </ElGrid>
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