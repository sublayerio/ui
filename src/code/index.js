import React from 'react'
import { css } from 'emotion'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { githubGist } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import defaultEmptyRenderer from '../table/defaultEmptyRenderer'

const Component = ({ value, field, context }) => {

    if (!value) {
        return defaultEmptyRenderer
    }

    const { settings = {} } = field
    const { language = 'js' } = settings

    if (context === 'detail') {

        return (
            <div
                className={css`
                border: 1px solid #f2f2f2;
                border-radius: 6px;
                padding: 0 16px;
                width: 100%;
            `}
            >
                <SyntaxHighlighter
                    language={language}
                    style={githubGist}
                    customStyle={{ fontSize: 12 }}
                >
                    {value}
                </SyntaxHighlighter>
            </div>
        )
    }

    return value
}

export const renderer = props => <Component {...props} />