import React from 'react'
import PropTypes from 'prop-types'
import { css, cx } from 'emotion'

export default class Toggle extends React.Component {

    static propTypes = {
        id: PropTypes.string,
        className: PropTypes.string,
        width: PropTypes.number,
        value: PropTypes.bool.isRequired,
        disabled: PropTypes.bool,
        onChange: PropTypes.func
    }

    static defaultProps = {
        width: 46,
        disabled: false
    }

    render() {

        const { width, disabled } = this.props
        const height = width * 0.56
        const padding = 2
        const size = height - (padding * 2)

        const active = this.props.value

        return (
            <div
                className={cx(
                    css`
                    background-color: ${active ? 'rgb(var(--primaryColor))' : '#808080'};
                    display: flex;
                    flex: none;
                    border-radius: 99999px;
                    justify-content: ${active ? 'flex-end' : 'flex-start'};
                    transition: 300ms ease justify-content;
                    cursor: pointer;
                    ${disabled ? 'cursor: default;' : 'cursor: pointer;'}
                    opacity: ${disabled ? '0.7' : '1'};
                `,
                    this.props.className
                )}
                style={{
                    height,
                    width,
                    padding
                }}
                onClick={(e) => {

                    if (disabled) return

                    if (this.props.onChange) {
                        this.props.onChange({
                            e,
                            id: this.props.id,
                            value: !active
                        })
                    }
                }}
            >
                <div
                    className={css`
                        background-color: #fff;
                        border-radius: 50%;
                        flex: none;
                    `}
                    style={{
                        width: size
                    }}
                />
            </div>
        )
    }
}
