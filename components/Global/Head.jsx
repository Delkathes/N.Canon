//? IMPORT
//! Modules
import Head from 'next/head'
import PropTypes from 'prop-types'

//! Constants
//! Utils
//! Context
//! Hooks
//! Actions
//! Styles
//! Components
//! High-order-components
//! Component : CustomHead
const CustomHead = ({head, description}) =>
    <Head>
        <title>{head}</title>
        <meta charSet='utf-8' />

        <meta name="author" content="Nicolas 'Delkathes' Canon - canon.nicolas@protonmail.com" />
        <meta name="description" content={description || "Welcome to my personal website. I'm a React and Next.js developer. I build fullstack modern javascript applications and play guitar."} />
        <meta name="keywords" content="nicolas, canon, react, next, nextjs, web, web developer" />
    </Head>
    
CustomHead.propTypes = {
    head: PropTypes.string,
    description: PropTypes.string,
}
//? EXPORT
export default CustomHead