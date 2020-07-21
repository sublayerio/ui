import React from 'react'
import {css} from 'emotion'

export default class Menu extends React.Component {

    render() {

        return (
            <ul
                className={css`
                    padding: 0;
                    margin: 0;
                `}
            >
                {this.props.children}
            </ul>
        )
    }
}