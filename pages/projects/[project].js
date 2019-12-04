//? IMPORT
//! Modules
// import {useState, useEffect, useRef} from 'react'
import {useState, useEffect,useRef} from 'react'
import Router from 'next/router'
import PropTypes from 'prop-types'
// import {useSpring, config} from 'react-spring'
// import Router, {useRouter} from 'next/router'
import {useSpring, useTransition, useChain, config, animated} from 'react-spring'

//! Content
import ProjectsData from '../../content/projects.json'

//! Constants
//! Utils
//! Helpers
//! Context
//! Hooks
//! Actions
//! Styles
// const animations = {
//     anim: (from, delay) =>
//         useSpring({
//             to: {opacity: 1, transform: "translate3d(0, 0, 0)"},
//             from: {opacity: 0, transform: `translate3d(0, ${from}, 0)`},
//             config: config.snap,
//             delay: delay,
//         })
// }
//! Components
import Slider from '../../components/Project/Slider'
import Main from '../../components/Project/Main.js'

//! High-order-components
//! SubPage : Project
const Project = ({query, target}) => {
    // console.log('query :', query)

    //* useState : querySlide
    const [querySlide, setSlide] = useState()
    const [changedRoute, setChange] = useState(false)

    useEffect(() => {
        
        const handleRouteChange = url => {
            console.log('App is changing to: ', url)
            setChange(true)
        }
        Router.events.on('routeChangeStart', handleRouteChange)
        return () => {
            Router.events.off('routeChangeStart', handleRouteChange)
        }
    }, [])
    useEffect(() => {
        query.slideQuery ? setSlide(!querySlide) : setSlide()
    }, [query])
    console.log(changedRoute);
    

    const transRef = useRef()
    const trans = useTransition(query.project, target => target, {
        ref: transRef,
        config: config.slow,
        from: {opacity: 0, position: 'absolute'},
        enter: {opacity: 1},
        leave: {opacity: 0, position: 'absolute'}
    })
    const springRef = useRef()
    const spring = useTransition(querySlide, null, {
        ref: springRef,
        config: {...config.default, duration: 1000},
        from: {transform: 'translateX(-140vw)'},
        enter: () => [{transform: 'translateX(140vw)'}],
        leave: {transform: 'translateX(-140vw)'},
        // reset: true
    })
    // const spring = useSpring({
//     ref: springRef,
//     config: {...config.default, duration: 1000},
//     transform: 'translateX(140vw)',
//     from: {transform: 'translateX(-140vw)'},
//     // reset: true
// })
    useChain([springRef, transRef], [0, 0])
    return <>
        {/* <Slider background={target.background} style={spring}/> */}
        {spring.map(({item, props, key}) => item && <Slider background={target.background} key={key} style={props} />)}
        {trans.map(({item, props, key}) => {
            {/* console.log('item :', item) */}
            const objective = ProjectsData.find(el => el.slug === item)
            return <Main key={key} query={query} target={objective} {...objective} style={props} />
        })}
        {/* <Main query={query} target={target} {...target} /> */}
    </>
}

//! Get initial props
Project.getInitialProps = async ({query}) => {
    const target = await ProjectsData.find(el => el.slug === query.project )
    return {query: query, target}
}

//! Default Props
Project.defaultProps = {
    SubPage: 'Project',
    route: '/projects/[project]',
}
Project.propTypes = {
    SubPage: PropTypes.string,
    route: PropTypes.string,
    query: PropTypes.object,
    target: PropTypes.object,
}

//? EXPORT
export default Project



// const sliderSpring = useSpring({
//     config: config.molasses,
//     to: {transform: query.queried ? 'translateX(120vw)' : 'translateX(-120vw)'},
//     from: {transform: 'translateX(-120vw)'}
// })
// const pageSpring = useSpring({
//     delay: query.queried ? 1000 : 0,
//     config: config.default,
//     to: {opacity: 1},
//     from: {opacity: 0}
// })

// const spring = useSpring({
//     ref: springRef,
//     config: {...config.default, duration: 1000},
//     transform: 'translateX(140vw)',
//     from: {transform: 'translateX(-140vw)'},
//     // reset: true
// })