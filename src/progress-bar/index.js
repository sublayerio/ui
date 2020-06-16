import React from 'react'
import { css } from 'emotion'

export default class ProgressBar extends React.Component {

    render() {
        return (
            <div
                className={css`
                    background-color: #f2f2f2;
                    border-radius: 6px;
                    height: 10px;
                    width: 100%;
                    position: relative;
                `}
            >
                <div
                    className={css`
                    height: 10px;
                    background-color: #07f;
                    border-radius: 6px;
                    position: absolute;
                    top: 0;
                    left: 0;
                    transition: 600ms ease width;
                `}
                    style={{ width: this.props.value + '%' }}
                />
            </div>
        )
    }
}

export const renderer = ({ value }) => <ProgressBar value={value} />