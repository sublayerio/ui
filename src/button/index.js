import React, { useState } from 'react'
import { css, cx } from 'emotion'
import spinner from '../spinner'
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
                    background-color: rgb(var(--primaryColor));
                    box-shadow: rgb(18, 36, 152) 0px 1px 0px 0px, rgb(var(--primaryColor)) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.22) 0px 2px 4px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
                    color: rgb(255, 255, 255);
                    `,
                focus: `
                    background-color: rgb(var(--primaryColor));
                    box-shadow: rgb(18, 36, 152) 0px 1px 0px 0px, rgb(var(--primaryColor)) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.22) 0px 2px 4px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.22) 0px 3px 7px 0px, rgba(58, 151, 212, 0.28) 0px 0px 0px 4px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
                `,
                hover: `
                    background-color: rgb(var(--primaryColor));
                    box-shadow: rgb(18, 36, 152) 0px 1px 0px 0px, rgb(var(--primaryColor)) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.22) 0px 2px 4px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.22) 0px 3px 7px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
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
                    box-shadow: rgb(18, 36, 152) 0px 1px 0px 0px, rgb(var(--primaryColor)) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.22) 0px 2px 4px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
                    color: rgb(var(--primaryColor));
                    `,
                focus: `
                background-color: rgb(255, 255, 255);
                box-shadow: rgb(18, 36, 152) 0px 1px 0px 0px, rgb(var(--primaryColor)) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.22) 0px 2px 4px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.22) 0px 3px 7px 0px, rgba(58, 151, 212, 0.28) 0px 0px 0px 4px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
                `,
                hover: `
                    background-color: rgb(255, 255, 255);
                    box-shadow: rgb(18, 36, 152) 0px 1px 0px 0px, rgb(var(--primaryColor)) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.22) 0px 2px 4px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.22) 0px 3px 7px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
                    color: rgb(var(--primaryColor));
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
                    background-color: rgba(var(--primaryColor), 0.08);
                    box-shadow: rgba(var(--primaryColor), 0.28) 0px 0px 0px 4px;
                `,
                    disabled: `
                        opacity: 0.7;
                    `
                },
                primary: {
                    default: `
                    background-color: rgb(255, 255, 255);
                    transition: background-color 120ms ease-in 0s;
                    color: rgb(var(--primaryColor));
                        `,
                    hover: `
                    background-color: rgba(var(--primaryColor), 0.08);
                    color: rgb(var(--primaryColor));
                        `,
                    focus: `
                        background-color: rgba(var(--primaryColor), 0.08);
                        color: rgb(var(--primaryColor));
                        box-shadow: rgba(var(--primaryColor), 0.28) 0px 0px 0px 4px;
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
                    background-color: rgba(var(--primaryColor), 0.08);
                    transition: background-color 120ms ease-in 0s;
                    color: rgb(var(--primaryColor));
                        `,
                    hover: `
                        background-color: rgba(var(--primaryColor), 0.08);
                        color: rgb(var(--primaryColor));
                            `,
                    focus: `
                            background-color: rgba(var(--primaryColor), 0.08);
                            color: rgb(var(--primaryColor));
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
                fontWeight: 600
            },
            md: {
                height: 38,
                fontSize: 16,
                padding: '0 12px',
                iconOffset: 4,
                fontWeight: 500
            },
            lg: {
                height: 42,
                fontSize: 18,
                padding: '0 16px',
                iconOffset: 6,
                fontWeight: 500
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
                    font-weight: ${sizeStyle.fontWeight};
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
                {icon ? (
                    <div
                        className={cx(
                            css`
                                display: flex;
                                align-items: center;
                            `,
                            children ? css`
                        margin-right: ${sizeStyle.iconOffset}px;
                    ` : null
                        )}
                    >
                        {icon({
                            height: sizeStyle.fontSize
                        })}
                    </div>
                ) : null}
                {children}
            </button>
        )
    }
}

export default Button

const Component = props => {

    const { field, hooks, modelId, fieldId } = props

    const { settings = {} } = field

    const { label: defaultLabel = 'Click here', variant = 'default' } = settings

    const variantProps = {}

    variantProps[variant] = true

    const [loading, setLoading] = useState(false)
    const [label, setLabel] = useState(defaultLabel)

    const handleClick = async e => {

        e.stopPropagation()

        const hookId = `button.onClick/${modelId}.${fieldId}`

        const hook = hooks[hookId]

        if (!hook) {
            return
        }

        await hook(e, {
            ...props,
            loading,
            setLoading,
            label,
            setLabel
        })
    }

    return (
        <div>
            <Button
                size="sm"
                type="button"
                icon={loading ? spinner : null}
                onClick={handleClick}
                {...variantProps}
            >
                {label}
            </Button>
        </div>
    )
}

export const renderer = props => <Component {...props} />