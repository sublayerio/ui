import React from 'react'
import { css } from 'emotion'

export const renderer = ({ value }) => {

    return (
        <a href={`mailto:${value}`} className={css`color: #000;`}>
            {value}
        </a>
    )
}