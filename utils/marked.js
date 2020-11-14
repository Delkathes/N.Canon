//? IMPORT
//! Modules
import { memo } from 'react'
import PropTypes from 'prop-types'

import marked from 'marked'
import DOMPurify from 'isomorphic-dompurify'

//! Marked options
marked.setOptions({
    smartLists: true,
    smartypants: true,
    xhtml: true
})

//! Marked memoized component
export const Marked = memo(function MemoizedMarked({ markdown }) {
    return <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(markdown) }} />
})
Marked.propTypes = {
    markdown: PropTypes.string.isRequired
}

//! marked keys from data to string
export const markedKeysToString = async (data, keys) => {
    const enhanced = {}
    await Promise.all(
        keys.map(
            async key => (enhanced[key] = DOMPurify.sanitize(await marked(data[key])))
        )
    )
    return {
        ...data,
        ...enhanced
    }
}

//! map list for marked keys from data to string
export const mapMarkedKeysToString = async (list, keys) =>
    await Promise.all(list.map(async data => await markedKeysToString(data, keys)))
