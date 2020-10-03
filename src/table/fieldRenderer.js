import React from 'react'
import assert from '../utils/assert'
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
import { renderer as button } from '../button'

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
    boolean,
    button
}

export default props => {

    assert(props.context, 'fieldRenderer requires context property')
    assert(props.modelId, 'fieldRenderer requires modelId property')
    assert(props.fieldId, 'fieldRenderer requires fieldId property')
    assert(props.field, 'fieldRenderer requires field property')

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