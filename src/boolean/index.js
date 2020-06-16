import React from 'react'
import get from 'lodash/get'
import Checkbox from '../checkbox'
import Toggle from '../toggle'

export const renderer = ({ field, value }) => {

    const ui = get(field, 'settings.ui', 'checkbox')
    const trueLabel = get(field, 'settings.trueLabel')
    const falseLabel = get(field, 'settings.falseLabel')

    if (ui === 'toggle') {
        return (
            <Toggle width={22} value={value} />
        )
    }

    return (
        <Checkbox 
            value={value}
            trueLabel={trueLabel}
            falseLabel={falseLabel}
        />
    )
}