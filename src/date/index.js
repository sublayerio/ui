import React from 'react'
import get from 'lodash/get'
import moment from 'moment/moment'

export const renderer = ({ field, value }) => {

    const includeTime = get(field, 'settings.includeTime', false)

    let format = value => moment(value).format('D MMMM YYYY')

    if (includeTime) {
        format = value => `${moment(value).format('D MMMM YYYY')} om ${moment(value).format('HH:mm')}`
    }

    return (
        <span title={value}>
            {format(value)}
        </span>
    )
}