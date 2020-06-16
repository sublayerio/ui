import React from 'react'
import { css, cx } from 'emotion'
import EmptyOption from './EmptyOption'
import defaultOptionRenderer from './defaultOptionRenderer'
import optionItemRenderer from './optionItemRenderer'
import defaultNoOptionsRenderer from './defaultNoOptionsRenderer'
import PropTypes from 'prop-types'

const createOptionClassName = ({ selected }) => cx(
    css`
        padding: 8px 15px;
        cursor: pointer;
        align-items: center;
        display: flex;
        min-height: 44px;
        box-shadow: rgba(55, 53, 47, 0.09) 0px 1px 0px;
        &:last-of-type {
            box-shadow: none;
        }
        &:active {
            opacity: 0.75;
        }
        &:hover {
            background-color: rgba(0, 34, 253, 0.06);
        }
    `, selected ? css`
        background-color: #0022fd;
        color: #fff;
        &:hover {
            background-color: #0022fd;
            color: #fff;
        }
    ` : null
)

export default class OptionList extends React.Component {

    static propTypes = {
        className: PropTypes.string,
        inline: PropTypes.bool,
        clearable: PropTypes.bool,
        alignLeft: PropTypes.bool,
        value: PropTypes.string,
        iconGetter: PropTypes.func,
        optionRenderer: PropTypes.func,
        noOptionsRenderer: PropTypes.func,
        options: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                name: PropTypes.string
            })
        ),
        onOptionClick: PropTypes.func,
        onClickOutside: PropTypes.func
    }

    render() {

        const { iconGetter } = this.props
        const optionRenderer = this.props.optionRenderer || defaultOptionRenderer
        const noOptionsRenderer = this.props.noOptionsRenderer || defaultNoOptionsRenderer

        return (
            <div
                className={cx(
                    css`
                        padding-top: 4px;
                        padding-bottom: 4px;
                        width: 100%;
                        box-sizing: border-box;
                            `,
                    this.props.className
                )}
            >
                {this.props.clearable ? (
                    <EmptyOption
                        selected={this.props.value === null}
                        onClick={(e) => this.props.onOptionClick({
                            e,
                            id: null
                        })}
                    />
                ) : null}
                {this.props.options && this.props.options.length ? this.props.options.map((option) => {

                    const selected = option.id === this.props.value

                    return optionItemRenderer({
                        className: createOptionClassName({
                            selected
                        }),
                        key: option.id,
                        id: option.id,
                        option,
                        selected,
                        optionRenderer,
                        iconGetter,
                        onClick: (e) => this.props.onOptionClick({
                            e,
                            id: option.id
                        })
                    })
                }) : noOptionsRenderer()}
            </div>
        )
    }

    handleClickOutside = e => {

        if (this.props.onClickOutside) {
            this.props.onClickOutside(e)
        }
    }
}