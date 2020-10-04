import React from 'react'
import { css } from 'emotion'
import defaultEmptyRenderer from '../table/defaultEmptyRenderer'

const Component = ({ value, context }) => {

    if (!value) {
        return defaultEmptyRenderer()
    }

    if (context === 'detail') {

        return (
            <div
                className={css`
                    border: 1px solid #f2f2f2;
                    border-radius: 6px;
                    height: 600px;
                    width: 100%;
                    overflow: hidden;
                `}
            >
                <iframe
                    srcDoc={value}
                    className={css`
                    width: 100%;
                    height: 100%;
                    border: none;
                `}
                />
            </div>
        )
    }

    return value
}

export const renderer = props => <Component {...props} />