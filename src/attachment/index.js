import React from 'react'
import defaultEmptyRenderer from '../table/defaultEmptyRenderer'

const Component = ({ value }) => {

    if (!value) {
        return defaultEmptyRenderer()
    }

    return (
        <div>
            <div
                className={css`
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    padding: 4px;
                    background-color: #fff;
                `}
            >
                <div>
                    {value.filename}
                </div>
                <div>
                    {filesize(value.size)}
                </div>
            </div>
        </div>
    )
}

export const renderer = props => <Component {...props} />