import React from 'react'
import { css, cx } from 'emotion'

const TruncatedText = props => (
    <div
        {...props}
        className={cx(css`width: 100%;`, props.className)}
    >
        <div
            className={css`
                max-width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            `}
        >
            {props.children}
        </div>
    </div>
)

export default TruncatedText