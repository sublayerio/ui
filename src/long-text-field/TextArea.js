import React from 'react'
import ReactDOM from 'react-dom'
import {css} from 'emotion'

export default class TextArea extends React.Component {

    state = {
        height: 100
    }

    componentDidMount() {
        this.updateHeight()
    }

    componentDidUpdate() {
        this.updateHeight()
    }

    updateHeight() {

        const el = ReactDOM.findDOMNode(this)

        const scrollHeight = el.scrollHeight

        if (scrollHeight !== this.state.height) {
            
            this.setState({
                height: scrollHeight
            })
        }
    }

    render() {

        const value = this.props.value || ''

        return (
            <textarea
                className={css`
                    -moz-appearance: none;
                    -webkit-appearance: none;
                    -webkit-transition: border-color .15s ease-in-out;
                    appearance: none;
                    background-color: #fff;
                    border: none;
                    box-shadow: 0 0 0 1px rgba(0,0,0,.09), 0 1px 0 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.1);
                    border-radius: 6px;
                    color: #191919;
                    display: block;
                    font-size: 16px;
                    line-height: 1.42857;
                    padding: 8px 15px;
                    transition: border-color .15s ease-in-out;
                    width: 100%;
                    line-height: 1.5;
                    font-family: Arial;
                    &:focus {
                     -webkit-transition-duration: 0s;
                        border-color: #07f;
                        outline: 0;
                        box-shadow: inset 0 0 0 2px #0022fd, 0 2px 4px rgba(0,0,0,.1), 0 0 1px rgba(0,0,0,.1);
                        transition-duration: 0s;
                    }
                `}
                style={{
                    height: this.state.height - 10,
                    minHeight: 200,
                    maxHeight: 600
                }}
                value={value}
                onChange={e => this.props.onChange({value: e.target.value})}
            />
        )
    }
}