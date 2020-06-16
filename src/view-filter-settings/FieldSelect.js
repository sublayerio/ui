import React from 'react'
import Select from './Select'
import {css} from 'emotion'

export default class FieldSelect extends React.Component {

    render() {

        const options = this.props.options.map(option => ({
            value: option.id,
            label: option.name,
            icon: option.icon
        }))

        return (
            <Select
                id={this.props.id}
                value={this.props.value}
                options={options}
                onChange={this.props.onChange}
                formatOptionLabel={({label, icon}) => {
                    return (
                        <div
                            className={css`
                                display: flex;
                                align-items: center;
                                height: 24px;
                            `}
                        >
                            {icon ? (
                                <div
                                    className={css`
                                        display: flex;
                                        margin-right: 8px;
                                    `}
                                >
                                    {icon({width: 19})}
                                </div>
                            ) : null}
                            <div>
                                {label}
                            </div>
                        </div>
                    )
                }}
            />
        )
    }
}
