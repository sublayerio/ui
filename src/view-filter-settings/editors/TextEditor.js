import React from 'react'
import TextInput from '@pndr/text-input'

export default class TextEditor extends React.Component {

    render() {
        return (
            <TextInput
                size={'sm'}
                value={this.props.value || ''}
                onChange={({ value }) => {
                    this.props.onChange({
                        value: value === '' ? null : value
                    })
                }}
            />
        )
    }
}