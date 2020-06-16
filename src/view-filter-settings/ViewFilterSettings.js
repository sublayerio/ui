import React from 'react'
import ReactDOM from 'react-dom'
import { fromJS } from 'immutable'
import Button from '../button'
import AdaptiveDialog from '../adaptive-dialog/AdaptiveDialog'
import Filter from './Filter'
import FilterSettings from './FilterSettings'
import filterValueRenderer from './filterValueRenderer'
import translate from '../translate'

const filterRenderer = props => (
    <Filter
        {...props}
    />
)

class FilterSettingsDialog extends React.Component {

    render() {

        const fields = this.props.fields.filter(field => {
            const fieldType = this.props.fieldTypes.find(fieldType => {
                return fieldType.get('id') === field.get('type')
            })
            return Boolean(fieldType)
        })

        return (
            <FilterSettings
                fields={fields}
                valueRenderer={filterValueRenderer}
                filterRenderer={filterRenderer}
                fieldTypes={this.props.fieldTypes}
                filterOperators={this.props.filterOperators}
                filters={this.props.view.get('filters')}
                onCreate={() => {

                    const nextView = this.props.view.update('filters', filters => {

                        const field = this.props.fields.find(field => {
                            const fieldType = this.props.fieldTypes.find(fieldType => {
                                return fieldType.get('id') === field.get('type')
                            })
                            return Boolean(fieldType)
                        })
                        const fieldType = this.props.fieldTypes.find(fieldType => {
                            return fieldType.get('id') === field.get('type')
                        })

                        if (!fieldType) {
                            throw new Error(`Field type not found: ${field.get('type')}`)
                        }

                        const filterOperatorId = fieldType.get('operators').first()

                        const filterOperator = this.props.filterOperators.find(filterOperator =>
                            filterOperator.get('id') === filterOperatorId
                        )

                        const filter = fromJS({
                            fieldId: field.get('id'),
                            operatorId: filterOperator.get('operatorId'),
                            value: filterOperator.get('defaultValue')
                        })

                        return filters.push(filter)
                    })

                    this.props.onChange({
                        view: nextView
                    })
                }}
                onRemove={({ index }) => {

                    const nextView = this.props.view.update('filters', filters =>
                        filters.remove(index)
                    )

                    this.props.onChange({
                        view: nextView
                    })
                }}
                onFieldIdChange={({ index, fieldId }) => {

                    const field = this.props.fields.find(field =>
                        field.get('id') === fieldId
                    )

                    const fieldType = this.props.fieldTypes.find(fieldType =>
                        fieldType.get('id') === field.get('type')
                    )

                    if (!fieldType) {
                        throw new Error(`Field type not found: ${field.get('type')}`)
                    }

                    const filterOperatorId = fieldType.get('operators').first()

                    const filterOperator = this.props.filterOperators.find(filterOperator =>
                        filterOperator.get('id') === filterOperatorId
                    )

                    const nextView = this.props.view
                        .setIn(['filters', index, 'fieldId'], fieldId)
                        .setIn(['filters', index, 'operatorId'], filterOperator.get('operatorId'))
                        .setIn(['filters', index, 'value'], filterOperator.get('defaultValue'))

                    this.props.onChange({
                        view: nextView
                    })
                }}
                onOperatorIdChange={({ index, operatorId }) => {

                    const fieldId = this.props.view.getIn(['filters', index, 'fieldId'])

                    const field = this.props.fields.find(field =>
                        field.get('id') === fieldId
                    )

                    const fieldType = this.props.fieldTypes.find(fieldType =>
                        fieldType.get('id') === field.get('type')
                    )

                    if (!fieldType) {
                        throw new Error(`Field type not found: ${field.get('type')}`)
                    }

                    const filterOperator = this.props.filterOperators.find(filterOperator =>
                        filterOperator.get('id') === field.get('type') + '/' + operatorId
                    )

                    const nextView = this.props.view
                        .setIn(['filters', index, 'operatorId'], filterOperator.get('operatorId'))
                        .setIn(['filters', index, 'value'], filterOperator.get('defaultValue'))

                    this.props.onChange({
                        view: nextView
                    })
                }}
                onValueChange={({ index, value }) => {

                    const nextView = this.props.view.setIn(['filters', index, 'value'], value)

                    this.props.onChange({
                        view: nextView
                    })
                }}
            />
        )
    }
}

class ViewFilterSettings extends React.Component {

    state = {
        open: false
    }

    componentDidMount() {
        this.button = ReactDOM.findDOMNode(this.refs.button)
    }

    render() {

        const filterCount = this.props.view.get('filters').count()

        return (
            <React.Fragment>
                <Button
                    ref={'button'}
                    size={'sm'}
                    minimal
                    onClick={() => this.setState({ open: true })}
                    highlighted={filterCount}
                >
                    {filterCount ? translate('${filterCount} filter<% if (filterCount > 1) { %>s<% } %>', { bindings: { filterCount } }) : translate('Filter') /* eslint-disable-line no-template-curly-in-string */}
                </Button>
                {this.state.open ? (
                    <AdaptiveDialog
                        title={'Filters'}
                        referenceElement={this.button}
                        popoverWidth={700}
                        onClose={this.handleClose}
                    >
                        {() => (
                            <FilterSettingsDialog
                                {...this.props}
                                onClose={this.handleClose}
                            />
                        )}
                    </AdaptiveDialog>
                ) : null}
            </React.Fragment>
        )
    }

    handleClose = () => this.setState({ open: false })
}

export default ViewFilterSettings