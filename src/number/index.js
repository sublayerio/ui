import React from 'react'
import numeral from 'numeral'
import get from 'lodash/get'
import times from 'lodash/times'

export const renderer = ({ field, value }) => {

    const format = get(field, 'settings.format')
    const precision = get(field, 'settings.precision', 2)

    let precisionString = ''

    if (format === 'decimal' && precision > 0) {
        precisionString = '.' + times(precision).map(() => 0).join('')
    }

    const renderers = {
        percentage: value => numeral(value).format(`0${precisionString}`) + '%',
        currency: value => numeral(value).format(`$ 0,0${precisionString}`),
        distance: value => `${numeral(value).format('0,0')} km`
    }

    const defaultRenderer = value => {

        if (format === 'decimal') {
            return numeral(value).format(`0${precisionString}`)
        }

        if (format === 'integer') {
            return numeral(value).format(`0`)
        }

        return value
    }

    const ui = get(field, 'settings.ui')

    const renderer = renderers[ui] || defaultRenderer

    return renderer(value)
}