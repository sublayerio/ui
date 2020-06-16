import React from 'react'
import {css} from 'emotion'
import Toggle from '../../toggle'

export default class CheckboxEditor extends React.Component {

    render() {
        return (
            <div
                className={css`
                    display: flex;
                    flex: 1 1 auto;
                    min-width: 0;
                    min-height: 0;
                    align-items: center;
                `}
            >
                <Toggle
                    width={26}
                    value={this.props.value}
                    onChange={this.props.onChange}
                />
            </div>
        )
    }
}