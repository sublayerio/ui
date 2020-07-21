import React from 'react'
import { css } from 'emotion'

const Tooltip = ({ children, placement }) => (
    <div
        className={css`
        background-color: #fff;
        box-shadow: 0 8px 24px rgba(149, 157, 165, .2);
        border: 1px solid #e1e4e8;
        border-radius: 6px;
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