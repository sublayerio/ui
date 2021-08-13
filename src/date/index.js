import React from 'react'
import get from 'lodash/get'
import moment from 'moment/moment'
import defaultEmptyRenderer from '../table/defaultEmptyRenderer'
import TruncatedText from '../truncated-text'
import DateInput from '../date-input'

export const renderer = ({ fieldId, field, onChange, value, editing }) => {

    const sameTimeZone = get(field, 'settings.sameTimeZone', false)
    const includeTime = get(field, 'settings.includeTime', false)

    let format = value => moment(value).format('D MMMM YYYY')

    if (includeTime) {
        format = value => `${moment(value).format('D MMMM YYYY')} om ${moment(value).format('HH:mm')}`
    }

    if (editing) {

        return (
            <DateInput
                value={value}
                includeTime={includeTime}
                sameTimeZone={sameTimeZone}
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
        <TruncatedText title={value}>
            {format(value)}
        </TruncatedText>
    )
}

export const textFormatter = ({ context = 'value', field, value }) => {

    const sameTimeZone = get(field, 'settings.sameTimeZone', false)
    const includeTime = get(field, 'settings.includeTime', false)

    let format = value => moment(value).format('D MMMM YYYY')

    if (includeTime) {
        format = value => `${moment(value).format('D MMMM YYYY')} om ${moment(value).format('HH:mm')}`
    }

    if (context === 'value') {
        return value
    }

    return format(value)
}