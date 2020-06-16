import React from 'react'
import ClickOutside from 'react-click-outside'
import icons from './icons'
import {css, cx} from 'emotion'

const Option = ({id, active, name, icon, onClick}) => (
    <div
        className={cx(
            css`
            padding-top: 8px;
            padding-bottom: 8px;
            padding-left: 8px;
            padding-right: 8px;
            cursor: pointer;
            align-items: center;
            display: flex;
            &:active {
                opacity: 0.75;
            }
        `, active ? css`
            background: #fff;
            border-radius: 6px;
            color: #000;
        ` : null
        )}
        onClick={() => {
            onClick({
                id
            })
        }}
    >
        {icon ? icon({height: 16, style: {marginRight: 8, color: '#6C9AEF'}}) : null}
        {name}
    </div>
)

const defaultOptionNameGetter = option => option.name

export default class Select extends React.Component {

    state = {
        open: false
    }

    render() {

        const optionNameGetter = this.props.optionNameGetter || defaultOptionNameGetter

        const option = this.props.options.find(option => {
            return option.id === this.props.value
        })

        return (
            <div
                className={cx(
                    css`
                    display: flex;
                    flex: 1 1 auto;
                    min-width: 0;
                    min-height: 0;
                `,
                    this.props.className
                )}
            >
                <div
                    className={cx(
                        css`
                        display: flex;
                        flex: 1 1 auto;
                        min-width: 0;
                        min-height: 0;
                        align-items: center;
                        padding-left: 4px;
                        padding-right: 4px;
                        cursor: pointer;
                        border-radius: 6px;
                        position: relative;
                        &:hover {
                            background-color: hsla(0,0%,0%,0.05);
                        }
                    `
                    )}
                    onClick={() => this.setState({open: !this.state.open})}
                >
                    <div
                        className={css`
                            display: flex;
                            flex: 1 1 auto;
                            min-width: 0;
                            min-height: 0;
                        `}
                    >
                        <div
                            className={cx(css`
                                display: flex;
                                flex-grow: 1;
                                overflow: hidden;
                                white-space: nowrap;
                            `, this.props.alignRight ? css`justify-content: flex-end` : null
                            )}
                        >
                            {option ? (
                                <span
                                    className={css`
                             max-width: 100%;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                `}
                                >
                            {option.name}

                            </span>
                            ) : null}
                        </div>
                        <div>
                            {icons.arrowDown({size: 12})}
                        </div>
                    </div>
                    {this.state.open ? (
                        <ClickOutside
                            className={css`
                                background-color: #282D33;
                                padding: 8px;
                                position: absolute;
                                top: 100%;
                                right: 0;
                                z-index: 1;
                                border-radius: 6px;
                                color: #fff;
                                min-width: 220px;
                            `}
                            onClickOutside={this.close}
                        >
                            {this.props.options.map((option) => (
                                <Option
                                    key={option.id}
                                    id={option.id}
                                    icon={option.icon}
                                    name={optionNameGetter(option)}
                                    active={option.id === this.props.value}
                                    onClick={this.handleChange}
                                />
                            ))}
                        </ClickOutside>
                    ) : null}
                </div>
            </div>
        )
    }

    handleChange = ({id}) => {

        this.props.onChange({
            value: id
        })
    }

    close = () => {
        this.setState({
            open: false
        })
    }
}