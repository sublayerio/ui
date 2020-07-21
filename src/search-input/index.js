import React from 'react'
import { css, cx } from 'emotion'

const search = props => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <g>
            <path fill="currentColor" d="M208 80a128 128 0 1 1-90.51 37.49A127.15 127.15 0 0 1 208 80m0-80C93.12 0 0 93.12 0 208s93.12 208 208 208 208-93.12 208-208S322.88 0 208 0z" fillOpacity="0.6"></path>
            <path fill="currentColor" d="M504.9 476.7L476.6 505a23.9 23.9 0 0 1-33.9 0L343 405.3a24 24 0 0 1-7-17V372l36-36h16.3a24 24 0 0 1 17 7l99.7 99.7a24.11 24.11 0 0 1-.1 34z"></path>
        </g>
    </svg>
)

export default class SearchInput extends React.Component {

    state = {
        focus: false
    }

    render() {

        const filled = this.props.value && this.props.value.length > 0
        const expanded = this.state.focus || filled

        return (
            <div
                className={cx(css`
                    position: relative;
                `,
                    expanded ? css`
                transition: 200ms width ease;
                ` : null
                )}
                style={{
                    width: expanded ? 220 : 30
                }}
            >
                <div
                    className={cx(css`
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 30px;
                        height: 30px;
                        border-radius: 6px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    `,
                        !expanded ? css`   
                        cursor: pointer;
                        &:hover {
                            background-color: rgba(55,53,47,0.08);
                        }
                        &:active {
                            background-color: rgba(55,53,47,0.08);
                            box-shadow: rgba(var(--primaryColor),0.28) 0px 0px 0px 4px;
                            outline: 0;
                        }
                        ` : null
                    )}
                    onClick={() => this.input.focus()}
                >
                    {search({
                        height: 14,
                        className: css`
                    pointer-events: none;
                    position: absolute;
                    `
                    })}
                </div>

                <input
                    {...this.props}
                    type="text"
                    ref={ref => this.input = ref}
                    onFocus={() => this.setState({ focus: true })}
                    onBlur={() => this.setState({ focus: false })}
                    className={cx(
                        css`
                    display: block;
                    width: 100%;
                    height: 30px;
                    padding: 5px 10px 5px 27px;
                    border: 0;
                    border-radius: 6px;
                    background-color: #fff;
                    color: #191919;
                    font-size: 15px;
                    line-height: 1.42857;
                    -webkit-transition: box-shadow .1s ease-in-out;
                    transition: box-shadow .1s ease-in-out;
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    appearance: none;
                    &:focus {
                        outline: 0;
                        box-shadow: inset 0 0 0 2px rgb(var(--primaryColor)), 0 2px 4px rgba(0,0,0,.1), 0 0 1px rgba(0,0,0,.1);
                        -webkit-transition-duration: 0s;
                        transition-duration: 0s;
                    }
                `,
                        filled ? css`
                outline: 0;
                box-shadow: 0 0 0 1px rgba(0,0,0,.09), 0 1px 0 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.1);
                ` : null
                    )}
                />
            </div>
        )
    }
}