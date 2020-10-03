import React, { useState } from 'react'
import { css } from 'emotion'
import { Manager, Reference, Popper } from 'react-popper';
import ReactJson from 'react-json-view'
import Portal from '../portal'
import Tooltip from '../tooltip'
import defaultEmptyRenderer from '../table/defaultEmptyRenderer'

const Component = ({ value, context }) => {

    if (!value) {
        return defaultEmptyRenderer()
    }

    const [hover, setHover] = useState(false)

    const handleMouseEnter = () => setHover(true)
    const handleMouseLeave = () => setHover(false)

    const value_string = JSON.stringify(value)
    const collapsed = value_string.length > 100000 ? 1 : false // larger than ~100kb? collapse on first level

    if (context === 'detail') {

        return (
            <div
                className={css`
                    padding: 16px;
                    border: 1px solid #f2f2f2;
                    border-radius: 6px;
                    width: 100%;
                    max-height: 400px;
                    overflow: hidden auto;
                    font-size: 12px;
                `}
            >
                <ReactJson
                    src={value}
                    collapsed={collapsed}
                />
            </div>
        )
    }

    return (
        <Manager>
            <Reference>
                {({ ref }) => (
                    <div
                        ref={ref}
                        onMouseOver={handleMouseEnter}
                        onMouseOut={handleMouseLeave}
                    >
                        <div
                            className={css`
            background-color: #fff;
            border: 1px solid #e0e0e0;
            padding: 2px 8px;
            font-size: 80%;
            border-radius: 99999px;
            display: inline-block;
            color: #333;
            font-weight: 700;
        `}
                        >
                            {JSON.stringify(value).substr(0, 50)}
                        </div>
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
                                        max-height: 400px;
                                        padding: 16px;
                                        font-size: 12px;
                                        overflow: auto;
                                    `}
                                    >
                                        <ReactJson src={value} collapsed={collapsed} />
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
export const renderer = props => <Component {...props} />