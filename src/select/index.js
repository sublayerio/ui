import React from 'react'
import PropTypes from 'prop-types'
import { css, cx } from 'emotion'
import OptionList from './OptionList'

import defaultNoOptionsRenderer from './defaultNoOptionsRenderer'
import defaultOptionRenderer from './defaultOptionRenderer'
import defaultEmptyRenderer from './defaultEmptyRenderer';
import AdaptiveDialog from '../adaptive-dialog/AdaptiveDialog'

const arrowUpDown = (props) => (
    <svg {...props} viewBox="0 0 16 16">
        <path d="M11.891 9.992a1 1 0 1 1 1.416 1.415l-4.3 4.3a1 1 0 0 1-1.414 0l-4.3-4.3A1 1 0 0 1 4.71 9.992l3.59 3.591 3.591-3.591zm0-3.984L8.3 2.417 4.709 6.008a1 1 0 0 1-1.416-1.415l4.3-4.3a1 1 0 0 1 1.414 0l4.3 4.3a1 1 0 1 1-1.416 1.415z" />
    </svg>
)

export default class Select extends React.Component {

    static defaultProps = {
        clearable: false,
        alignRight: false,
        size: 'md',
        title: 'Unnamed Select'
    }

    static propTypes = {
        clearable: PropTypes.bool,
        disabled: PropTypes.bool,
        size: PropTypes.oneOf([
            'sm',
            'md'
        ]),
        value: PropTypes.string,
        noOptionsRenderer: PropTypes.func,
        iconGetter: PropTypes.func,
        optionRenderer: PropTypes.func,
        options: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                name: PropTypes.string
            })
        ),
        onChange: PropTypes.func,
        title: PropTypes.string
    }

    state = {
        open: false
    }

    render() {

        const { iconGetter, size } = this.props
        const optionRenderer = this.props.optionRenderer || defaultOptionRenderer
        const noOptionsRenderer = this.props.noOptionsRenderer || defaultNoOptionsRenderer

        const option = this.props.options.find(option => {
            return option.id === this.props.value
        })

        return (
            <div
                className={css`
                    position: relative;
                    width: 100%;
                `}
            >
                <div
                    ref={'button'}
                    className={cx(
                        css`
                        position: relative;
                        appearance: none;
                        background-color: #fff;
                        box-shadow: 0 0 0 1px rgba(0,0,0,.09), 0 1px 0 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.1);
                        border-radius: 6px;
                        color: #191919;
                        display: flex;
                        align-items: center;
                        font-size: 16px;
                        height: ${size === 'sm' ? '30px' : '38px'};
                        line-height: 1.42857;
                        padding: 5px 15px;
                        transition: border-color .15s ease-in-out;
                        width: 100%;
                        cursor: pointer;
                    `,
                        !this.props.disabled ? css`
                    &:active {
                        -webkit-transition-duration: 0s;
                        border-color: #0022fd;
                        outline: 0;
                        transition-duration: 0s;
                    }
                    ` : css`
                        background-color: #f9f9f9;
                    `,
                        this.state.open ? css`
                            -webkit-transition-duration: 0s;
                            box-shadow: inset 0 0 0 2px #0022fd, 0 2px 4px rgba(0,0,0,.1), 0 0 1px rgba(0,0,0,.1);
                            outline: 0;
                            transition-duration: 0s;
                    ` : null
                    )}
                    onClick={this.handleToggle}
                >
                    <div
                        className={css`
                            display: flex;
                            flex: 1 1 auto;
                            min-width: 0;
                            min-height: 0;
                            align-items: center;
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
                            {option ? optionRenderer({
                                option,
                                iconGetter
                            }) : defaultEmptyRenderer()}
                        </div>
                        <div>

                            {arrowUpDown({ width: 12 })}
                        </div>
                    </div>
                </div>
                {this.state.open ? (
                    <AdaptiveDialog
                        title={this.props.title}
                        referenceElement={this.refs.button}
                        popoverPlacement={'bottom-start'}
                        popoverWidth={300}
                        onClose={this.close}
                    >
                        {() => (
                            <OptionList
                                inline={this.props.inline}
                                alignLeft={this.props.alignLeft}
                                value={this.props.value}
                                options={this.props.options}
                                clearable={this.props.clearable}
                                iconGetter={this.props.iconGetter}
                                onOptionClick={this.handleChange}
                                noOptionsRenderer={noOptionsRenderer}
                                optionRenderer={optionRenderer}
                            />
                        )}
                    </AdaptiveDialog>
                ) : null}
            </div>

        )
    }

    handleToggle = () => {

        if (this.props.disabled) {
            return
        }

        this.setState({
            open: !this.state.open
        })
    }

    handleChange = ({ e, id }) => {

        e.stopPropagation()

        this.setState({
            open: false
        })

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