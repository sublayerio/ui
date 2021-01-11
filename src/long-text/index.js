import React from 'react'
import { css } from 'emotion'
import defaultEmptyRenderer from '../table/defaultEmptyRenderer'
import TruncatedText from '../truncated-text'
import LongTextField from '../long-text-field'

const Component = props => {

    const { fieldId, value, editing, onChange, context } = props

    if (editing) {

        return (
            <LongTextField
                contextId={'recordDetail'}
                roleId={'editor'}
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

    if (context === 'detail') {

        return (
            <div
                className={css`
                    white-space: pre-wrap;
                `}
            >
                {value}
            </div> 
        )
    }

    return (
        <TruncatedText>{value}</TruncatedText>
    )
}

export const renderer = props => <Component {...props} />