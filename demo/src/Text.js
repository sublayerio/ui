import React from 'react'
import {css, cx} from 'emotion'

const Text = ({className, weight, children}) => (
    <div
        className={cx(css`
        font-weight: ${weight};
    `, className)}
    >
        {children}
    </div>
)

export default Text