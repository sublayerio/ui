import React from 'react'
import { renderer as date } from '../date'
import { renderer as singleSelect } from '../single-select'
import { renderer as relationship } from '../relationship'
import { renderer as number } from '../number'
import { renderer as json } from '../json'
import { renderer as progressBar } from '../progress-bar'
import { renderer as email } from '../email'
import { renderer as phone } from '../phone'
import { renderer as markdown } from '../markdown'
import { renderer as code } from '../code'
import { renderer as html } from '../html'
import { renderer as url } from '../url'
import { renderer as boolean } from '../boolean'

const displayTypeRenderers = {
    progressBar,
    email,
    phone,
    markdown,
    code,
    html,
    url
}

const renderers = {
    relationship,
    singleSelect,
    date,
    number,
    json,
    boolean
}

export default props => {

    const displayTypeRenderer = displayTypeRenderers[props.field.displayType]

    if (displayTypeRenderer) {
        return displayTypeRenderer(props)
    }
 
    const renderer = renderers[props.field.type]

    if (renderer) {
        return renderer(props)
    }

    const { value } = props

    return (
        <div>
            {value}
        </div>
    )
}