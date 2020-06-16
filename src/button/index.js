import React from 'react'
import { css, cx } from 'emotion'

class Button extends React.Component {

    render() {

        const { onClick, size, hover, focus, active, type, className, icon, highlighted, primary, danger, minimal, disabled, children } = this.props

        let styles = {
            default: {
                default: `
                    background-color: rgb(255, 255, 255);
                    box-shadow: rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(60, 66, 87, 0.12) 0px 2px 5px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
                `,
                focus: `
                    background-color: rgb(255, 255, 255);
                    box-shadow: rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(60, 66, 87, 0.12) 0px 2px 5px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.12) 0px 3px 9px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(58, 151, 212, 0.28) 0px 0px 0px 4px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
                `,
                hover: `
                    background-color: rgb(255, 255, 255);
                    box-shadow: rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(60, 66, 87, 0.12) 0px 2px 5px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.12) 0px 3px 9px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
                `,
                disabled: `
                    opacity: 0.7;
                `
            },
            primary: {
                default: `
                    background-color: rgb(0, 34, 253);
                    box-shadow: rgb(18, 36, 152) 0px 1px 0px 0px, rgb(0, 34, 253) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.22) 0px 2px 4px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
                    color: rgb(255, 255, 255);
                    `,
                focus: `
                    background-color: rgb(0, 34, 253);
                    box-shadow: rgb(18, 36, 152) 0px 1px 0px 0px, rgb(0, 34, 253) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.22) 0px 2px 4px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.22) 0px 3px 7px 0px, rgba(58, 151, 212, 0.28) 0px 0px 0px 4px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
                `,
                hover: `
                    background-color: rgb(0, 34, 253);
                    box-shadow: rgb(18, 36, 152) 0px 1px 0px 0px, rgb(0, 34, 253) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.22) 0px 2px 4px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.22) 0px 3px 7px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
                    color: rgb(255, 255, 255);
                    `,
                disabled: `
                        opacity: 0.7;
                    `
            },
            danger: {
                default: `
                    background-color: rgb(255, 85, 153);
                    box-shadow: rgb(202, 27, 113) 0px 1px 0px 0px, rgb(255, 85, 153) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.22) 0px 2px 4px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
                    color: #fff;
                `,
                focus: `
                background-color: rgb(255, 85, 153);
                box-shadow: rgb(202, 27, 113) 0px 1px 0px 0px, rgb(255, 85, 153) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.22) 0px 2px 4px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.22) 0px 3px 7px 0px, rgba(58, 151, 212, 0.28) 0px 0px 0px 4px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
            `,
                hover: `
                    background-color: rgb(255, 85, 153);
                    box-shadow: rgb(202, 27, 113) 0px 1px 0px 0px, rgb(255, 85, 153) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.22) 0px 2px 4px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.22) 0px 3px 7px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
                `,
                disabled: `
                    opacity: 0.7;
                `
            },
            highlighted: {
                default: `
                    background-color: rgb(255, 255, 255);
                    box-shadow: rgb(18, 36, 152) 0px 1px 0px 0px, rgb(0, 34, 253) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.22) 0px 2px 4px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
                    color: rgb(0, 34, 253);
                    `,
                focus: `
                background-color: rgb(255, 255, 255);
                box-shadow: rgb(18, 36, 152) 0px 1px 0px 0px, rgb(0, 34, 253) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.22) 0px 2px 4px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.22) 0px 3px 7px 0px, rgba(58, 151, 212, 0.28) 0px 0px 0px 4px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
                `,
                hover: `
                    background-color: rgb(255, 255, 255);
                    box-shadow: rgb(18, 36, 152) 0px 1px 0px 0px, rgb(0, 34, 253) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.22) 0px 2px 4px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.22) 0px 3px 7px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
                    color: rgb(0, 34, 253);
                    `,
                disabled: `
                        opacity: 0.7;
                    `
            },
        }

        if (minimal) {

            styles = {
                default: {
                    default: `
                        background-color: rgb(255, 255, 255);
                        transition: background-color 120ms ease-in 0s;
                    `,
                    hover: `
                        background-color: rgba(55, 53, 47, 0.08);
                    `,
                    focus: `
                    background-color: rgba(55, 53, 47, 0.08);
                    box-shadow: rgba(58, 151, 212, 0.28) 0px 0px 0px 4px;
                `,
                    disabled: `
                        opacity: 0.7;
                    `
                },
                primary: {
                    default: `
                    background-color: rgb(255, 255, 255);
                    transition: background-color 120ms ease-in 0s;
                    color: rgb(0, 34, 253);
                        `,
                    hover: `
                    background-color: rgba(0, 34, 253, 0.08);
                    color: rgb(0, 34, 253);
                        `,
                    focus: `
                        background-color: rgba(0, 34, 253, 0.08);
                        color: rgb(0, 34, 253);
                        box-shadow: rgba(58, 151, 212, 0.28) 0px 0px 0px 4px;
                        `,
                    disabled: `
                            opacity: 0.7;
                        `
                },
                danger: {
                    default: `
                        background-color: rgb(255, 255, 255);
                        color: rgb(255, 85, 153);
                        transition: background-color 120ms ease-in 0s;
                    `,

                    hover: `
                        background-color: rgb(253, 11, 130, 0.08);
                        color: rgb(255, 85, 153);
                    `,
                    focus: `
                    background-color: rgb(253, 11, 130, 0.08);
                    color: rgb(255, 85, 153);
                    box-shadow: rgba(58, 151, 212, 0.28) 0px 0px 0px 4px;
                    `,
                    disabled: `
                        opacity: 0.7;
                    `
                },
                highlighted: {
                    default: `
                    background-color: rgba(0, 34, 253, 0.08);
                    transition: background-color 120ms ease-in 0s;
                    color: rgb(0, 34, 253);
                        `,
                    hover: `
                        background-color: rgba(0, 34, 253, 0.08);
                        color: rgb(0, 34, 253);
                            `,
                    focus: `
                            background-color: rgba(0, 34, 253, 0.08);
                            color: rgb(0, 34, 253);
                            box-shadow: rgba(58, 151, 212, 0.28) 0px 0px 0px 4px;
                            `,
                    disabled: `
                            opacity: 0.7;
                        `
                },
            }
        }

        let style = styles.default

        if (primary) {
            style = styles.primary
        }

        if (danger) {
            style = styles.danger
        }

        if (highlighted) {
            style = styles.highlighted
        }

        const sizeStyles = {
            sm: {
                height: 30,
                fontSize: 14,
                padding: '0 10px',
                iconOffset: 4,
            },
            md: {
                height: 38,
                fontSize: 16,
                padding: '0 12px',
                iconOffset: 4,
            },
            lg: {
                height: 42,
                fontSize: 18,
                padding: '0 16px',
                iconOffset: 6,
            }
        }

        const sizeStyle = sizeStyles[size || 'md']

        return (
            <button
                type={type || 'button'}
                disabled={disabled}
                className={cx(
                    css`
                    display: inline-flex;
                    align-items: center;
                    background: #fff;
                    border: none;
                    border-radius: 6px;
                    cursor: pointer;
                    fill: currentColor;
                    font-size: 0;
                    position: relative;
                    text-decoration: none;
                    transition: all .05s ease-out;
                    padding: 0;
                    margin: 0;
                    white-space: nowrap;
                    font-size: ${sizeStyle.fontSize}px;
                    font-weight: 500;
                    user-select: none;
                    height: ${sizeStyle.height}px;
                    line-height: ${sizeStyle.height}px;
                    padding: ${sizeStyle.padding};
                    flex: 0 1 auto;
                    text-decoration: none;
                    vertical-align: middle;
                    word-break: keep-all;
                    &:hover {
                        ${style.hover}
                    }
                    &:focus {
                        ${style.focus}
                        outline: 0;
                    }
                    &:active {
                        ${style.focus}
                        outline: 0;
                    }
                    &[disabled] {
                        ${style.disabled}
                    }
                `,
                    css(style.default),
                    active ? css(style.hover) : null,
                    hover ? css(style.hover) : null,
                    focus ? css(style.focus) : null,
                    disabled ? css(style.disabled) : null,
                    className
                )}
                onClick={onClick}
            >
                {icon ? icon({
                    height: 16,
                    className: children ? css`
                            margin-right: ${sizeStyle.iconOffset}px;
                        ` : null
                }) : null}
                {children}
            </button>
        )
    }
}

export default Button