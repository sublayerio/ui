import React from 'react'
import defaultEmptyRenderer from '../table/defaultEmptyRenderer'
import TruncatedText from '../truncated-text'

const Component = ({ value }) => {

    if (!value) {
        return defaultEmptyRenderer()
    }

    return (
        <TruncatedText>{value}</TruncatedText>
    )
}

export const renderer = props => <Component {...props} />