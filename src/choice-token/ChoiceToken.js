import React from 'react'
import { css } from 'emotion'

const ChoiceToken = ({ name, background, color }) => (
    <div
        className={css`
                    background-color: ${background};
                    color: ${color};
                    min-width: 18px;
                    line-height: 1.2;
                    max-width: 100%;
                    align-items: center;
                    display: inline-flex;
                    padding-left: 6px;
                    padding-right: 6px;
                    padding-top: 3px;
                    padding-bottom: 3px;
                    -webkit-print-color-adjust: exact;
                    border-radius: 6px;
                    flex: 0 0 auto;
                    white-space: nowrap;
                `}
    >
        {name}
    </div>
)

export default ChoiceToken