import PropTypes from 'prop-types'
import { FaArrowRight, FaGithub, FaLinkedinIn, FaFilePdf } from 'react-icons/fa'

const styleIcon = {
    position: 'relative',
    zIndex: '-1'
}

const Icon = ({ icon, color }) => {
    switch (icon) {
        case 'ArrowRight':
            return <FaArrowRight color={color} style={styleIcon} />
        case 'GitHub':
            return <FaGithub color={color} style={styleIcon} />
        case 'LinkedIn':
            return <FaLinkedinIn color={color} style={styleIcon} />
        case 'PDF':
            return <FaFilePdf color={color} style={styleIcon} />
        default:
            return ''
    }
}

Icon.defaultProps = {
    Component: 'Icon'
}

Icon.propTypes = {
    Component: PropTypes.string,
    icon: PropTypes.string
}

export default Icon
