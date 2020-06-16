import React from 'react'
import { css, cx } from 'emotion'

const search = props => (
    <svg {...props} viewBox="0 0 13 12"><defs><circle id="path-1" cx="5" cy="5" r="5"></circle><mask id="mask-2" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="10" height="10" fill="white"><use xlinkHref="#path-1"></use></mask></defs><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="Group-4" stroke="currentColor"><path d="M9,9 L12,12" id="Line" strokeLinecap="square"></path><use id="Oval" mask="url(#mask-2)" strokeWidth="2" xlinkHref="#path-1"></use></g></g></svg>
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
                            box-shadow: rgba(58,151,212,0.28) 0px 0px 0px 4px;
                            outline: 0;
                        }
                        ` : null
                    )}
                    onClick={() => this.input.focus()}
                >
                    {search({
                        width: 12,
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
                        box-shadow: inset 0 0 0 2px #07f, 0 2px 4px rgba(0,0,0,.1), 0 0 1px rgba(0,0,0,.1);
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