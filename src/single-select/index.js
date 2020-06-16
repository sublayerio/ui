import React, { useState } from 'react'
import { css, cx } from 'emotion'
import get from 'lodash/get'
import { Manager, Reference, Popper } from 'react-popper';
import Portal from '../portal'
import Tooltip from '../tooltip'

const Badge = ({ color, name, backgroundColor, expanded }) => (
    <div
        className={cx(
            css`
            background-color: ${backgroundColor};
            padding: 2px 8px;
            font-size: 85%;
            border-radius: 99999px;
            display: inline-block;
            color: ${color};
            font-weight: 700;
        `,
            expanded ? css`
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        ` : null
        )}
    >
        {name}
    </div>
)

const SingleSelectCell = ({ field, value }) => {

    const [hover, setHover] = useState(false)

    const handleMouseEnter = () => setHover(true)
    const handleMouseLeave = () => setHover(false)

    const option = field.settings.options.find(option => option.id === value)

    if (!option) {
        return value ? value : null
    }

    const expanded = get(field, 'settings.expanded', false)

    return (
        <Manager>
            <Reference>
                {({ ref }) => (
                    <div
                        ref={ref}
                        onMouseOver={handleMouseEnter}
                        onMouseOut={handleMouseLeave}
                    >
                        <Badge backgroundColor={option.backgroundColor} color={option.color} name={option.name ? option.name : option.id} expanded={expanded} />
                    </div>
                )}
            </Reference>
            {hover ? (
                <Popper placement={'top'}>
                    {({ ref, style, placement, arrowProps }) => (
                        <Portal>
                            <div ref={ref} style={style} data-placement={placement} className={css`z-index:1300;`}>
                                <Tooltip placement={placement}>
                                    <div
                                        className={css`
                                            padding: 16px;
                                        `}
                                    >
                                        <div
                                            className={css`
                                                margin-bottom: 8px;
                                            `}
                                        >
                                            <Badge backgroundColor={option.backgroundColor} color={option.color} name={option.name ? option.name : option.id} />
                                        </div>
                                        <div>
                                            {option.description}
                                        </div>
                                    </div>
                                </Tooltip>
                            </div>
                        </Portal>
                    )}
                </Popper>
            ) : null}
        </Manager>
    )
}

export const renderer = ({ field, value }) => <SingleSelectCell field={field} value={value} />
export const textFormatter = ({ field, value }) => {

    const option = field.settings.options.find(option => option.id === value)

    if (!option) {
        return value
    }

    return option.name ? option.name : option.id
}