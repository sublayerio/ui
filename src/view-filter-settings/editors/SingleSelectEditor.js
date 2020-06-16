import React from 'react'
import Select from '../../select'

export default class SingleSelectEditor extends React.Component {

    render() {
        return (
            <Select
                title={'Value'}
                size={'sm'}
                clearable={true}
                value={this.props.value}
                options={this.props.field.getIn(['settings', 'options']).toJS()}
                onChange={this.props.onChange}
            />
        )
    }
}