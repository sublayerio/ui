import React, { useState } from 'react'
import { css } from 'emotion'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const copy = props => (
    <svg {...props} preserveAspectRatio="xMidYMid meet" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"><g><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></g></svg>
)

const CopyLink = ({ value }) => {

    const [copied, setCopied] = useState(false)

    const handleCopy = (e) => {
        setCopied(true)
        setTimeout(() =>
            setCopied(false),
            2000
        )
    }

    return (
        <div onClick={e => e.stopPropagation()}>
            <CopyToClipboard text={value} onCopy={handleCopy}>
                {copied ? <span className={css`font-size: 12px; padding: 2px 4px; background: rgba(185, 244, 188, 0.2); color: rgb(27, 185, 120); border-radius: 3px; user-select: none;`}>Copied!</span> : copy({ width: 12, className: css`cursor: pointer; &:hover {opactiy: 0.5;}` })}
            </CopyToClipboard>
        </div>
    )
}
export const renderer = ({ value }) => {

    return (
        <div
            className={css`
                        display: flex;
                        align-items: center;
                    `}
        >
            <a href={value} target="_blank" rel="noopener noreferrer" className={css`color: #000;`}>
                {value}
            </a>
            <div
                className={css`
                            margin-left: 4px;
                            display: flex;
                            align-items: center;
                        `}
            >
                <CopyLink value={value} />
            </div>
        </div>
    )
}