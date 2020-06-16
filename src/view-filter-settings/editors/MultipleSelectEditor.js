import React from 'react'
import MultipleSelect from '../MultipleSelect'

export default class MultipleSelectEditor extends React.Component {

    render() {
        return (
            <MultipleSelect
                value={this.props.value}
                field={this.props.field}
                onChange={this.props.onChange}
            />
        )
    }
}