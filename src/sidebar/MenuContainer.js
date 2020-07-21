import React from 'react'
import {css, cx} from 'emotion'

export default class MenuContainer extends React.Component {

    render() {

        return (
            <div
                className={cx(
                    css`
                                flex: 1 1;
                                overflow-y: auto;
                            `,
                    `custom-scrollbar-${this.props.theme}`
                )}
            >
                {this.props.children}
            </div>
        )
    }
}