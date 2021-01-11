import React from 'react'
import PropTypes from 'prop-types'
import parseNumber from './utils/parseNumber'
import formatNumber from './utils/formatNumber'
import { css, cx } from 'emotion'

/**
 * Outlines
 * -----------
 *
 * componentDidMount
 *  - set input value to formatted version of number prop
 *
 * input.onChange
 *  - trigger onChange with formatted version of value
 *
 * input.onBlur
 *  - set input value to formatted version of number prop
 */
export default class NumberField extends React.Component {

    static propTypes = {
        id: PropTypes.string.isRequired,
        className: PropTypes.string,
        value: PropTypes.number,
        allowNegative: PropTypes.bool,
        format: PropTypes.oneOf(['decimal', 'integer']),
        precision: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8]),
        onChange: PropTypes.func.isRequired,
        size: PropTypes.oneOf([
            'sm',
            'md'
        ])
    }

    static defaultProps = {
        allowNegative: false,
        format: 'integer',
        precision: 2,
        size: 'md'
    }

    state = {
        editing: false,
        number: null
    }

    formatNumber = (input) => {
        return formatNumber(input, {
            allowNegative: this.props.allowNegative,
            format: this.props.format,
            precision: this.props.precision
        })
    }

    parseNumber = (input) => {
        return parseNumber(input, {
            allowNegative: this.props.allowNegative,
            format: this.props.format,
            precision: this.props.precision
        })
    }

    componentDidMount() {

        this.setState({
            number: this.formatNumber(this.props.value)
        })
    }

    componentWillUpdate(nextProps) {

        if (this.state.editing) {
            return
        }

        const nextNumber = this.formatNumber(this.props.value)
        const prevNumber = this.state.number

        if (prevNumber !== nextNumber) {
            this.setState({
                number: nextNumber
            })
        }
    }

    render() {

        const { number } = this.state

        const { size } = this.props

        return (
            <input
                data-context-id={this.props.contextId}
                data-role-id={this.props.roleId}
                type="text"
                className={cx(
                    'NumberInput',
                    css`
                    -moz-appearance: none;
                    -webkit-appearance: none;
                    -webkit-transition: border-color .15s ease-in-out;
                    appearance: none;
                    background-color: #fff;
                    border: none;
                    box-shadow: rgba(0, 0, 0, 0.09) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 1px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
                    border-radius: 6px;
                    color: #191919;
                    display: block;
                    font-size: 16px;
                    height: ${size === 'sm' ? '30px' : '38px'};
                    line-height: 1.42857;
                    padding: 5px 15px;
                    transition: border-color .15s ease-in-out;
                    width: 280px;
                    max-width: 100%;
                    &:focus {
                        -webkit-transition-duration: 0s;
                        box-shadow: rgb(0, 34, 253) 0px 0px 0px 2px inset, rgba(0, 0, 0, 0.1) 0px 2px 4px, rgba(0, 0, 0, 0.1) 0px 0px 1px;
                        outline: 0;
                        transition-duration: 0s;
                    }
                    `,
                    this.props.className
                )}
                value={number || ''}
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
            />
        )
    }

    handleFocus = () => {

        this.setState({
            editing: true
        })
    }

    handleBlur = () => {

        this.setState({
            editing: false,
            number: this.formatNumber(this.parseNumber(this.state.number))
        })
    }

    handleChange = (e) => {

        this.setState({
            number: e.target.value
        })

        this.props.onChange({
            id: this.props.id,
            value: this.parseNumber(e.target.value)
        })
    }
}