import React from 'react'
import { css, cx } from 'emotion'

class Option extends React.Component {

    state = {
        hover: false
    }

    render() {

        return (
            <div
                className={css`
                    border-right: 1px solid #f2f2f2;
                    padding: 4px 7px;
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    &:last-of-type {
                        border-right: none;
                    }
                `}
                onMouseEnter={() => this.setState({ hover: true })}
                onMouseLeave={() => this.setState({ hover: false })}
                onClick={this.props.onClick}
            >
                <div
                    className={cx(
                        css`
                        background: #fff;
                        border: 1px solid #d9d9d9;
                        border-radius: 50%;
                        display: flex;
                        height: 14px;
                        margin-bottom: 0;
                        position: relative;
                        vertical-align: middle;
                        width: 14px;
                        margin-right: 8px;
                        ${this.state.hover ? 'border-color: #80bbff;' : ''}
                        &:after {
                            -webkit-transform: scale(.5);
                            -webkit-transition: all .1s ease-out;
                            background: #0022fd;
                            border-radius: 50%;
                            bottom: 2px;
                            content: "";
                            left: 2px;
                            opacity: 0;
                            position: absolute;
                            right: 2px;
                            top: 2px;
                            transform: scale(.5);
                            transition: all .1s ease-out;
                        }
                    `,
                        this.props.active ? css`
                            &:after {
                                opacity: 1;
                                transform: scale(1);
                            }
                        ` : null
                    )}
                >

                </div>
                <div
                    className={css`
                        font-size: 15px;
                    `}
                >
                    {this.props.name}
                </div>
            </div>
        )
    }
}

export default class SegmentedControl extends React.Component {

    render() {

        return (
            <div
                className={css`
                    -webkit-box-shadow: 0 0 0 1px rgba(0,0,0,.09), 0 1px 0 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.1);
                    border-radius: 5px;
                    box-shadow: 0 0 0 1px rgba(0,0,0,.09), 0 1px 0 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.1);
                    font-size: 15px;
                    height: 30px;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    display: inline-flex;
                `}
            >
                {this.props.options.map(option => (
                    <Option
                        active={this.props.value === option.id}
                        key={option.id}
                        id={option.id}
                        name={option.name}
                        onClick={() => this.props.onChange({ value: option.id })}
                    />
                ))}
            </div>
        )
    }
}