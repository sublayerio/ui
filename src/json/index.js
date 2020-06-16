import React, { useState } from 'react'
import { css } from 'emotion'
import { Manager, Reference, Popper } from 'react-popper';
import ReactJson from 'react-json-view'
import Portal from '../portal'
import Tooltip from '../tooltip'

const Component = ({ value }) => {

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
                                        <ReactJson src={value} />
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
export const renderer = ({ value }) => <Component value={value} />