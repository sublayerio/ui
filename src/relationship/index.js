import React from 'react'
import { css } from 'emotion'
import get from 'lodash/get'
import defaultEmptyRenderer from '../default-empty-renderer'

const Badge = ({ children }) => (
    <div
        className={css`
            line-height: 1.5;
            white-space: normal;
            word-break: break-word;
            pointer-events: none;
            background-image: linear-gradient(to right, rgba(55, 53, 47, 0.16) 0%, rgba(55, 53, 47, 0.16) 100%);
            background-repeat: repeat-x;
            background-position: 0px 100%;
            background-size: 100% 1px;
            font-weight: 500;
            display: inline-block;
            margin-right: 8px;
            color: #000;
        `}
    >
        {children}
    </div>
)

export const renderer = ({ field, value, data, schema }) => {

    // const foreignModel = schema.modelDatas[field.settings.foreignModel]

    const type = get(field, 'settings.type')
    const foreignModelId = get(field, 'settings.foreignModel')

    if (!value) {
        return defaultEmptyRenderer()
    }

    if (['hasOne', 'hasMany'].includes(type) === false) {
        return value
    }

    const refs = type === 'hasOne' ? [value] : value

    return (
        <div>
            {refs.map(ref => {

                const record = data[foreignModelId + 'Datas'][ref]
                const foreignModel = schema.modelDatas[foreignModelId]
                const value = record[foreignModel.primaryField || 'id']

                return <Badge key={ref}>{value}</Badge>
            })}
        </div>
    )
}

export const textFormatter = ({ field, value, data, schema }) => {

    const type = get(field, 'settings.type')
    const foreignModelId = get(field, 'settings.foreignModel')

    if (!value) {
        return ''
    }

    if (['hasOne', 'hasMany'].includes(type) === false) {
        return value
    }

    const refs = type === 'hasOne' ? [value] : value

    return refs.map(ref => {

        const record = data[foreignModelId + 'Datas'][ref]
        const foreignModel = schema.modelDatas[foreignModelId]
        return record[foreignModel.primaryField || 'id']
    }).join(', ')
}