import React from "react";
import ReactDOM from "react-dom";
import { css } from 'emotion'

export default class InlineTitleInput extends React.Component {

    componentDidMount() {

        const el = ReactDOM.findDOMNode(this.refs.input)
        el.select()
    }

    handleKeyDown = e => {

        if (e.nativeEvent.code === "Enter") {
            this.props.onBlur()
        }
    }

    render() {

        return (
            <div
                className={css`
                    position: relative;
                `}
            >
                <input
                    ref={'input'}
                    type="text"
                    disabled={this.props.loading}
                    onKeyDown={this.handleKeyDown}
                    className={css`
                    -moz-appearance: none;
                    -webkit-appearance: none;
                    -webkit-transition: border-color .15s ease-in-out;
                    appearance: none;
                    background-color: #fff;
                    border: none;
                    border-radius: 6px;
                    color: #191919;
                    display: block;
                    font-size: 16px;
                    height: 30px;
                    line-height: 1.42857;
                    padding: 5px 12px;
                    transition: border-color .15s ease-in-out;
                    width: auto;
                    max-width: 200px;
                    &:focus {
                        -webkit-transition-duration: 0s;
                        box-shadow: rgb(0, 34, 253) 0px 0px 0px 2px inset, rgba(0, 0, 0, 0.1) 0px 2px 4px, rgba(0, 0, 0, 0.1) 0px 0px 1px;
                        outline: 0;
                        transition-duration: 0s;
                    }
                `}
                    value={this.props.value}
                    onChange={this.props.onChange}
                    onBlur={this.props.onBlur}
                />
            </div>
        )
    }
}
