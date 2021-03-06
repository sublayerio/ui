import React from 'react'
import defaultEmptyRenderer from '../table/defaultEmptyRenderer'
import TruncatedText from '../truncated-text'
import TextInput from '../text-input'

const Component = props => {

    const { fieldId, value, editing, onChange } = props

    if (editing) {

        return (
            <TextInput
                size={'sm'}
                value={value}
                onChange={({ value }) => {

                    onChange({
                        id: fieldId,
                        value
                    })
                }}
            />
        )
    }

    if (!value) {
        return defaultEmptyRenderer()
    }

    return (
        <TruncatedText>{value}</TruncatedText>
    )
}

export const renderer = props => <Component {...props} />