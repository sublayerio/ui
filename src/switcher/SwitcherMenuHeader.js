import React from 'react'
import { css } from 'emotion'

const SwitcherMenuHeader = ({ children }) => (
    <div
        className={css`
        display: flex;
    padding-left: 14px;
    padding-right: 14px;
    margin-top: 6px;
    margin-bottom: 8px;
    color: rgba(55, 53, 47, 0.6);
    font-size: 11px;
    line-height: 120%;
    user-select: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 500;
        `}
    >
        <div
            className={css`
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            `}
        >
            {children}
        </div>
    </div>
)

export default SwitcherMenuHeader