import React from 'react'
import { css } from 'emotion'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { githubGist } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const Component = ({ value, field }) => {

    const { settings = {} } = field
    const { language = 'js' } = settings

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

export const renderer = props => <Component {...props} />