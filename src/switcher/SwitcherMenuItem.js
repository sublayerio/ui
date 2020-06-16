import React from 'react'
import { cx, css } from 'emotion'

const SwitcherMenuItem = ({ children, active, onClick }) => (
    <div
        className={cx(
            css`
                padding: 8px 15px;
        cursor: pointer;
        align-items: center;
        display: flex;
        min-height: 34px;
        &:active {
            opacity: 0.75;
        }
        &:hover {
            background-color: #e6f1ff;
        }
            `,
            active ? css`
                background-color: #0022fd;
        color: #fff;
        &:hover {
            background-color: #005fcc;
            color: #fff;
        }
            ` : null,
        )}
        onClick={onClick}
    >
        {children}
    </div>
)

export default SwitcherMenuItem