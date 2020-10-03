import React from 'react'
import ReactMarkdown from 'react-markdown'
import { css } from 'emotion'

const Component = ({ value }) => {

    return (
        <div
            className={css`
            border: 1px solid #f2f2f2;
            border-radius: 6px;
            width: 100%;
            overflow: hidden;
            padding 0 16px;
            color: #000;
        `}
        >
            <ReactMarkdown source={value} />
        </div>
    )
}

export const renderer = props => <Component {...props} />