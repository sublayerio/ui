import React from 'react'
import ReactDOM from 'react-dom'
import { fromJS } from 'immutable'
import { css } from 'emotion'
import Select from '../select'
import AdaptiveDialog from '../adaptive-dialog/AdaptiveDialog'
import Button from '../button'
import EmptyState from '../empty-state/EmptyState'
import SegmentedControl from '../segmented-control'
import translate from '../translate'
import alert from '../alert'

const sortAlt = props => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <g>
            <path fill="currentColor" d="M379.29 132.69l-80-96a16 16 0 0 0-22.62 0l-80 96C186.65 142.74 193.78 160 208 160h48v304a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V160h48c14.19 0 21.36-17.24 11.29-27.31z" fillOpacity="0.6"></path>
            <path fill="currentColor" d="M176 352h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.36 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352z"></path>
        </g>
    </svg>
)

const trash = props => (
    <svg {...props} viewBox="0 0 30 30" fill="currentColor"><path d="M21,5c0-2.2-1.8-4-4-4h-4c-2.2,0-4,1.8-4,4H2v2h2v22h22V7h2V5H21z M13,3h4c1.104,0,2,0.897,2,2h-8C11,3.897,11.897,3,13,3zM24,27H6V7h18V27z M16,11h-2v12h2V11z M20,11h-2v12h2V11z M12,11h-2v12h2V11z"></path></svg>
)

const plus = props => (
    <svg {...props} viewBox="0 0 18 18" fill="currentColor"><polygon points="17,8 10,8 10,1 8,1 8,8 1,8 1,10 8,10 8,17 10,17 10,10 17,10 "></polygon></svg>
)

class SorterItem extends React.Component {

    render() {

        return (
            <div
                className={css`
                    @media (max-width: 786px) {
                        padding-bottom: 16px;
                        margin-bottom: 16px;
                        border-bottom: 1px solid rgba(55,53,47,0.09);
                    }
                    @media (min-width: 768px) {
                        display: flex;
                        align-items: center;
                    }
                `}
            >
                <div
                    className={css`
                        @media(max-width: 768px) {
                            margin-bottom: 8px;
                        }
                        @media (min-width: 768px) {
                            flex-grow: 1;
                            margin-right: 16px;
                        }
                    `}
                >
                    <Select
                        title={'Select field'}
                        value={this.props.sorter.get('fieldId')}
                        size={'sm'}
                        options={this.props.fields.map(field => ({
                            id: field.get('id'),
                            name: field.get('name') ? field.get('name') : field.get('id')
                        })).toArray()}
                        onChange={({ value }) => {
                            this.props.onFieldIdChange({
                                index: this.props.index,
                                fieldId: value
                            })
                        }}
                    />
                </div>
                <div
                    className={css`
                        @media(max-width: 768px) {
                            margin-bottom: 8px;
                        }
                        @media(min-width: 768px) {
                            margin-right: 16px;
                        }
                    `}
                >
                    <SegmentedControl
                        value={this.props.sorter.get('ascending') ? 'ascending' : 'descending'}
                        options={[{
                            id: 'ascending',
                            name: 'A → Z'
                        }, {
                            id: 'descending',
                            name: 'Z → A'
                        }]}
                        onChange={({ value }) => {

                            this.props.onAscendingChange({
                                index: this.props.index,
                                ascending: value === 'ascending'
                            })
                        }}
                    />
                </div>
                <div
                    className={css`
                        @media(max-width: 768px) {
                            display: flex;
                            justify-content: flex-end;
                        }
                    `}
                >
                    <Button size={'sm'} icon={trash} onClick={() => this.props.onRemove({ index: this.props.index })} />
                </div>
            </div>
        )
    }
}

class SorterSettings extends React.Component {

    render() {

        return (
            <div
                className={css`
                width: 700px;
                max-width: 100%;
                padding: 16px;
            `}
            >
                <div
                    className={css`
                    margin-bottom: 30px;
                `}
                >
                    {this.props.view.get('sorters') && this.props.view.get('sorters').count() ? (
                        <div>
                            {this.props.view.get('sorters').map((sorter, index) => (
                                <div
                                    key={index}
                                    className={css`
                                    margin-bottom: 16px;
                                `}
                                >
                                    <SorterItem
                                        index={index}
                                        sorter={sorter}
                                        fields={this.props.fields}
                                        onFieldIdChange={this.handleSorterFieldIdChange}
                                        onAscendingChange={this.handleSorterAscendingChange}
                                        onRemove={this.handleRemoveSorter}
                                    />
                                </div>
                            ))}
                        </div>
                    ) : (
                            <EmptyState>
                                {translate('There are no sorters applied to this view')}
                            </EmptyState>
                        )}
                </div>
                <div
                    className={css`
                        display: flex;
                        justify-content: flex-end;
                    `}
                >
                    <Button size={'sm'} icon={plus} onClick={this.handleCreateSorter}>
                        {translate('Add sorter')}
                    </Button>
                </div>
            </div>
        )
    }

    handleRemoveSorter = async ({ index }) => {

        const nextView = this.props.view.update('sorters', sorters =>
            sorters.remove(index)
        )

        this.props.onChange({
            view: nextView
        })
    }

    handleSorterFieldIdChange = async ({ index, fieldId }) => {

        const nextView = this.props.view.setIn(['sorters', index, 'fieldId'], fieldId)

        this.props.onChange({
            view: nextView
        })
    }

    handleSorterAscendingChange = async ({ index, ascending }) => {

        const nextView = this.props.view.setIn(['sorters', index, 'ascending'], ascending)

        this.props.onChange({
            view: nextView
        })
    }

    handleCreateSorter = async () => {

        if (this.props.fieldsAvailableForSorting.length === 0) {
            alert.notice(`You've sorted all fields available, adjust the sorters to get the desired view.`)
            return
        }

        const nextView = this.props.view.update('sorters', sorters => {

            const field = this.props.fields.first()

            const sorter = fromJS({
                fieldId: field.get('id'),
                ascending: true
            })

            return sorters.push(sorter)
        })

        this.props.onChange({
            view: nextView
        })
    }
}

const getFieldsAvailableForSortingForView = ({ view, fields }) => {

    const sorters = view.get('sorters')
    const sortedFieldIds = sorters.map(sorter =>
        sorter.get('fieldId')
    )

    return fields
        .filter(field =>
            !sortedFieldIds.includes(
                field.get('id')
            )
        )
}

class ViewSorterSettings extends React.Component {

    state = {
        open: false
    }

    componentDidMount() {
        this.button = ReactDOM.findDOMNode(this.refs.button)
    }

    render() {

        const fieldsAvailableForSorting = getFieldsAvailableForSortingForView({
            view: this.props.view,
            fields: this.props.fields
        })

        const sorterCount = this.props.view.get('sorters').count()

        return (
            <React.Fragment>
                <Button
                    ref={'button'}
                    size={'sm'}
                    onClick={() => this.setState({ open: true })}
                    minimal
                    icon={sortAlt}
                    highlighted={sorterCount}
                >
                    {sorterCount ? translate('${sorterCount} sorter<% if (sorterCount > 1) { %>s<% } %>', { bindings: { sorterCount } }) : translate('Sort') /* eslint-disable-line no-template-curly-in-string */}
                </Button>
                {this.state.open ? (
                    <AdaptiveDialog
                        title={'Sorters'}
                        referenceElement={this.button}
                        popoverWidth={700}
                        onClose={this.handleClose}
                    >
                        {() => (
                            <SorterSettings
                                {...this.props}
                                fieldsAvailableForSorting={fieldsAvailableForSorting}
                            />
                        )}
                    </AdaptiveDialog>
                ) : null}
            </React.Fragment>
        )
    }

    handleClose = () => this.setState({ open: false })
}

export default ViewSorterSettings