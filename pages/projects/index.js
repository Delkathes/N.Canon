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
    grid-gap: 10px;
`
const ElGrid = styled.li`
    cursor: pointer;
    overflow: hidden;
    position: relative;
    width: 100%;
    padding-top: 100%;
    background-color: red;
    ${({long}) => long && `
        grid-column: span 2 / auto;
        padding-top: 50%;
    `}
    &:hover {
        figure {
            background-color: black;
        }
        div {
            transform: translateY(${({top, bottom}) => top ? '50px' : bottom ? '-50px' : ''});
        }
    }
`
const Figure = styled.figure`
    position: absolute;
    top: 0px;
    left: 0px;
    margin: 0px;
    padding: 0px;
    display: flex;
    height: 100%;
    width: 100%;
    z-index: 0;
`
const Read = styled.div`
    z-index: 2;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: ${({top}) => top && '-50px'};
    bottom: ${({bottom}) => bottom && '-50px'};
    right: ${({right}) => right && '60px'};
    left: ${({left}) => left && '60px'};
    padding: 0px 30px;
    background-color: rgb(34, 34, 34);
    transition-duration: 0.3s;
`
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
                        <ElGrid top>
                            <Read right top>Read More</Read>
                            <Figure></Figure>
                        </ElGrid>
                        <ElGrid bottom>
                            <Read right bottom>Read More</Read>
                            <Figure></Figure>
                        </ElGrid>
                        <ElGrid long top>
                            <Read right top>Read More</Read>
                        </ElGrid>
                        <ElGrid bottom>
                            <Read left bottom>Read More</Read>
                            <Figure></Figure>
                        </ElGrid>
                        <ElGrid top>
                            <Read right top>Read More</Read>
                            <Figure></Figure>
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