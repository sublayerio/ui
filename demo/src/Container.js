import React from 'react'
import {css} from 'emotion'

const Container = ({children}) => (
    <div
        className={css`
            padding: 100px 100px 60px 100px;
        `}
    >
        {children}
    </div>
)

export default Container