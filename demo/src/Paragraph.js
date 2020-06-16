import React from 'react'
import {css} from 'emotion'

const Paragraph = ({children}) => (
    <div
        className={css`
        color: rgb(153, 153, 153);
    font-size: 12px;
    margin: 0px 0px 20px;
    `}
    >
        {children}
    </div>
)

export default Paragraph