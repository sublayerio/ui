import React from 'react'
import {cx, css} from 'emotion'

export default class MenuSeparator extends React.Component {

    render() {

        const {large, theme} = this.props

        return (
            <hr
                className={cx(
                    css`
                    border-color: #000;
                    border-width: 1px 0 0;
                    margin: 8px 0;
                `,
                    large ? css`
                        margin-bottom: 8px;
                    ` : null,
                    theme === 'light' ? css`
                        display: none;
                    ` : null
                )}
            />
        )
    }
}