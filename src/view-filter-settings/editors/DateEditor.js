import React from 'react'
import { css, cx } from 'emotion'
import DateInput from '@pndr/date-input'

export default class DateEditor extends React.Component {

    render() {

        const inputStyle = css`
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
        height: 30px;
        line-height: 1.42857;
        padding: 5px 30px 5px 8px;
        transition: border-color .15s ease-in-out;
        width: 100%;
        &:focus {
            -webkit-transition-duration: 0s;
            box-shadow: inset 0 0 0 2px #0022fd, 0 2px 4px rgba(0,0,0,.1), 0 0 1px rgba(0,0,0,.1);
            outline: 0;
            transition-duration: 0s;
        }
        `

        const dateInputStyles = {
            container: css`
            display: flex;
            align-items: center;
            width: 100%;
        `,
            dateInputContainer: css`
            display: flex;
            flex-grow: 1;
        `,
            dateInput: cx(
                inputStyle
            ),
            timeInputContainer: css`
            display: flex;
            width: 120px;
        `,
            timeInput: cx(
                inputStyle
            )
        }

        return (
            <DateInput
                styles={dateInputStyles}
                value={JSON.parse(this.props.value).exactDate}
                disabled={false}
                includeTime={false}
                sameTimeZone={false}
                dateFormat={'D/M/YYYY'}
                datePlaceholder={'dd/mm/yyyy'}
                timeFormat={'HH:mm'}
                timePlaceholder={'hh:mm'}
                onChange={({ value: exactDate }) => {

                    this.props.onChange({
                        value: JSON.stringify({
                            ...JSON.parse(this.props.value),
                            exactDate
                        })
                    })
                }}
            />
        )
    }
}