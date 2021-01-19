import React from 'react'
import numeral from 'numeral'
import get from 'lodash/get'
import times from 'lodash/times'
import NumberInput from '../number-input'

export const renderer = ({ fieldId, field, value, editing, onChange }) => {

    let format = get(field, 'settings.format')
    const allowNegativeNumbers = get(field, 'settings.allowNegativeNumbers')
    const precision = get(field, 'settings.precision', 2)
    const ui = get(field, 'settings.ui')

    let displayPrecision = precision
    if (ui === 'percentage') {
        displayPrecision = precision - 2
    }

    if (editing) {

        return (
            <NumberInput
                size={'sm'}
                value={value}
                allowNegative={allowNegativeNumbers}
                format={format}
                precision={precision}
                onChange={({ value }) => {
                    onChange({
                        id: fieldId,
                        value
                    })
                }}
            />
        )
    }

    let precisionString = ''
    let displayPrecisionString = ''

    if (format === 'decimal' && precision > 0) {
        precisionString = '.' + times(precision).map(() => 0).join('')
        displayPrecisionString = '.' + times(displayPrecision).map(() => 0).join('')
    }

    const renderers = {
        percentage: value => numeral(value * 100).format(`0${displayPrecisionString}`) + '%',
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

    const renderer = renderers[ui] || defaultRenderer

    return renderer(value)
}