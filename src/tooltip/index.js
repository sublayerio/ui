import React from 'react'
import { css } from 'emotion'

const Tooltip = ({ children, placement }) => (
    <div
        className={css`
        background-color: #fff;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 4px 11px;
        border-radius: 3px;
        overflow: hidden;
        min-width: 250px;
        max-width: 400px;
        ${placement === 'bottom' ? 'margin-top: 10px;' : ''}
        ${placement === 'top' ? 'margin-bottom: 10px;' : ''}
        ${placement === 'left' ? 'margin-right: 10px;' : ''}
        ${placement === 'right' ? 'margin-left: 10px;' : ''}
        `}
    >
        {children}
    </div>
)

export default Tooltip