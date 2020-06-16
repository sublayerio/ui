import React from 'react'
import NumberInput from '@pndr/number-input'

export default class NumberEditor extends React.Component {

    render() {

        const field = this.props.field
        const numberPrecisionId = field.getIn(['options', 'numberPrecisionId'])
        const numberFormatId = field.getIn(['options', 'numberFormatId'])

        return (
            <NumberInput
                size={'sm'}
                value={this.props.value}
                precision={parseInt(numberPrecisionId, 10)}
                format={numberFormatId}
                allowNegative={true}
                onChange={({value}) => {

                    this.props.onChange({
                        value
                    })
                }}
            />
        )
    }
}