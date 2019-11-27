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
const CustomHead = ({head}) =>
    <Head>
        <title>{head}</title>
        <meta charSet='utf-8' />

        <meta name="author" content="Nicolas 'Delkathes' Canon" />
        <meta name="description" content="Nicolas canon - Web developer" />
        <meta name="keywords" content="nicolas, canon, react, next, nextjs, web, web developer" />
    </Head>
    
CustomHead.propTypes = {
    head: PropTypes.string
}
//? EXPORT
export default CustomHead