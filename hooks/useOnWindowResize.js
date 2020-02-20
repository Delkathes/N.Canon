//? IMPORT
//! Modules
import { useState, useEffect } from 'react'

export default () => {
    //* useState : dimensions
    const [dimensions, setDimensions] = useState([1920, 1080])
    useEffect(() => {
        function updateSize () {
            setDimensions([window.innerWidth, window.innerHeight])
        }
        window.addEventListener('resize', updateSize)
        updateSize()
        return () => window.removeEventListener('resize', updateSize)
    }, [])

    return dimensions
}