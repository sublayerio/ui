import React from 'react'
import ReactDOM from 'react-dom'
import icons from './icons'
import { css, cx } from 'emotion'
import Toggle from '../toggle'
import AdaptiveDialog from '../adaptive-dialog/AdaptiveDialog'
import ChoiceToken from '../choice-token/ChoiceToken'

const Option = ({ checked, choice, onCheckedChange }) => (
    <div
        className={css`
        padding: 8px 15px;
        cursor: pointer;
        align-items: center;
        display: flex;
        min-height: 34px;
        &:active {
            opacity: 0.75;
        }
        &:hover {
            background-color: #e6f1ff;
        }
    `}
        onClick={() => onCheckedChange({ id: choice.id })}
    >
        <div
            className={css`
                flex-grow: 1;
            `}
        >
            <ChoiceToken
                {...choice}
            />
        </div>
        <Toggle
            id={choice.id}
            width={22}
            value={checked}
        />
    </div>
)

export default class MultipleSelect extends React.Component {

    state = {
        open: false
    }

    componentDidMount() {
        this.button = ReactDOM.findDOMNode(this.refs.button)
    }

    render() {

        const size = 'sm'

        const value = JSON.parse(this.props.value) || []

        const options = this.props.field.getIn(['settings', 'options']).toJS()

        const selectedOptions = options.filter(option => {
            return value.includes(option.id)
        })

        return (
            <div
                ref={'button'}
                className={cx(
                    css`
                    display: flex;
                    flex: 1 1 auto;
                    min-width: 0;
                    min-height: 0;
                `,
                    this.props.className
                )}
            >
                <div
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
                    onClick={() => this.setState({ open: !this.state.open })}
                >
                    <div
                        className={css`
                            display: flex;
                            flex: 1 1 auto;
                            min-width: 0;
                            min-height: 0;
                        `}
                    >
                        <div
                            className={cx(css`
                                display: flex;
                                flex-grow: 1;
                                white-space: nowrap;
                                overflow: hidden;
                            `, this.props.alignRight ? css`justify-content: flex-end` : null
                            )}
                        >
                            {selectedOptions.map(option => (
                                <span
                                    key={option.id}
                                    className={css`
                                        margin-right: 8px;
                                    `}
                                >
                                    <ChoiceToken
                                        {...option}
                                    />
                                </span>
                            ))}
                        </div>
                        <div>
                            {icons.arrowDown({ size: 12 })}
                        </div>
                    </div>
                    {this.state.open ? (
                        <AdaptiveDialog
                            referenceElement={this.button}
                            popoverWidth={300}
                        >
                            {() => (
                                <React.Fragment>
                                    {options.map((option) => (
                                        <Option
                                            key={option.id}
                                            checked={value.includes(option.id)}
                                            onCheckedChange={this.handleOptionCheckedChange}
                                            choice={option}
                                        />
                                    ))}
                                </React.Fragment>
                            )}
                        </AdaptiveDialog>
                    ) : null}
                </div>
            </div>
        )
    }

    handleOptionCheckedChange = ({ id }) => {

        const prevValue = JSON.parse(this.props.value) || []

        const remove = prevValue.includes(id)

        let value = [].concat(prevValue)

        if (remove) {
            value = value.filter(i => i !== id)
        } else {
            value.push(id)
        }

        this.props.onChange({
            value: JSON.stringify(value.length ? value : null)
        })
    }

    close = () => {
        this.setState({
            open: false
        })
    }
}