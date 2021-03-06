import React from 'react'
import ReactMarkdown from 'react-markdown'
import { css } from 'emotion'
import defaultEmptyRenderer from '../table/defaultEmptyRenderer'

const Component = ({ value, context }) => {

    if (!value) {
        return defaultEmptyRenderer
    }

    if (context === 'detail') {

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

    return value
}

export const renderer = props => <Component {...props} />