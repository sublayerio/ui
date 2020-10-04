import React, { useState } from 'react'
import { css } from 'emotion'
import get from 'lodash/get'
import { Manager, Reference, Popper } from 'react-popper';
import Portal from '../portal'
import Tooltip from '../tooltip'
import defaultEmptyRenderer from '../default-empty-renderer'
import RecordHoverCard from '../record-hover-card'

const ForeignRecordBadge = ({ name, onClick, modelId, recordId, children, data, schema, hooks, record }) => {

    const [hover, setHover] = useState(false)

    const handleMouseEnter = () => setHover(true)
    const handleMouseLeave = () => setHover(false)

    return (
        <Manager>
            <Reference>
                {({ ref }) => (
                    <div
                        ref={ref}
                        onMouseOver={handleMouseEnter}
                        onMouseOut={handleMouseLeave}
                        className={css`
            line-height: 1.5;
            word-break: break-word;
            background-image: linear-gradient(to right, rgba(55, 53, 47, 0.16) 0%, rgba(55, 53, 47, 0.16) 100%);
            background-repeat: repeat-x;
            background-position: 0px 100%;
            background-size: 100% 1px;
            font-weight: 500;
            display: inline-block;
            margin-right: 8px;
            color: #000;
            max-width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            cursor: pointer;
            &:hover {
                opacity: 0.75;
            }
        `}
                        onClick={e => {

                            e.stopPropagation()
                            onClick({ modelId, recordId })
                        }}
                    >
                        {name}
                    </div>
                )}
            </Reference>
            {hover ? (
                <Popper placement={'top'}>
                    {({ ref, style, placement, arrowProps }) => (
                        <Portal>
                            <div ref={ref} style={style} data-placement={placement} className={css`z-index:1300;`}>
                                <Tooltip placement={placement}>
                                    <RecordHoverCard
                                        name={name}
                                        schema={schema}
                                        data={data}
                                        hooks={hooks}
                                        record={record}
                                        modelId={modelId}
                                        recordId={recordId}
                                    />
                                </Tooltip>
                            </div>
                        </Portal>
                    )}
                </Popper>
            ) : null}
        </Manager>
    )
}

export const renderer = ({ field, value, data, schema, hooks }) => {

    // const foreignModel = schema.ModelDatas[field.settings.foreignModel]

    const type = get(field, 'settings.type')
    const foreignModelId = get(field, 'settings.foreignModel')

    if (!value) {
        return defaultEmptyRenderer()
    }

    if (['hasOne', 'hasMany'].includes(type) === false) {
        return value
    }

    const refs = type === 'hasOne' ? [value] : value

    if (!refs.length) {
        return defaultEmptyRenderer()
    }

    return (
        <div
            className={css`
                width: 100%;
            `}
        >
            {refs.map(ref => {

                const record = data[foreignModelId + 'Datas'][ref]
                const foreignModel = schema.ModelDatas[foreignModelId]
                const value = record[foreignModel.primaryField || 'id']

                const hookId = `relationship.onRecordClick`
                const onRecordClick = hooks[hookId]

                if (!onRecordClick) {
                    throw new Error(`hooks["relationship.onRecordClick"] is not defined`)
                }

                return (
                    <ForeignRecordBadge
                        key={ref}
                        name={value}
                        data={data}
                        schema={schema}
                        hooks={hooks}
                        record={record}
                        modelId={foreignModelId}
                        recordId={ref}
                        onClick={onRecordClick}
                    />
                )
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
        const foreignModel = schema.ModelDatas[foreignModelId]
        return record[foreignModel.primaryField || 'id']
    }).join(', ')
}