import React from 'react'
import { css } from 'emotion'
import fieldTypes from '../field-types'

const FieldTechnical = props => {

    const { field } = props
    const fieldType = fieldTypes.find(fieldType => fieldType.get('id') === props.field.type)

    return (
        <div
            className={css`
                display: flex;
                align-items: center;
            `}
        >
            <div className={css`display: flex; align-items: center;`}>
                <span className={css`font-weight: bold;`}>{field.name ? field.name : field.id}</span> {field.name ? <span className={css`margin-left: 12px; color: #808080; font-size: 12px; padding: 2px 6px; border: 1px solid #f2f2f2; border-radius: 3px;`}>{field.id}</span> : null}
            </div>
            <div className={css`margin-left: auto; flex-shrink: 0; font-weight: 400; font-size: 12px; color: #808080;`}>
                {fieldType ? fieldType.get('name') : field.type}{field.displayType ? ` (${field.displayType})` : ''}
            </div>
        </div>
    )
}

export default FieldTechnical