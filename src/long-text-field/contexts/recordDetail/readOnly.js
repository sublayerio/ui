import React from 'react'
import Preview from '../../Preview'

export default class LongTextField extends React.Component {

    render() {

        const { longText } = this.props

        return (
            <Preview
                value={longText}
            />
        )
    }
}