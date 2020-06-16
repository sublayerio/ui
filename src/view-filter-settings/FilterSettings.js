import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'
import Button from '../button'
import EmptyState from '../empty-state/EmptyState'
import translate from '../translate'

const plus = props => (
    <svg {...props} viewBox="0 0 18 18" fill="currentColor"><polygon points="17,8 10,8 10,1 8,1 8,8 1,8 1,10 8,10 8,17 10,17 10,10 17,10 "></polygon></svg>
)

export default class FilterSettings extends React.Component {

    static propTypes = {
        fields: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                icon: PropTypes.func,
                name: PropTypes.string.isRequired
            })
        ),
        filters: PropTypes.arrayOf(
            PropTypes.string.isRequired
        ),
        filterRenderer: PropTypes.func.isRequired,
        valueRenderer: PropTypes.func.isRequired,
        onCreate: PropTypes.func.isRequired,
        onRemove: PropTypes.func.isRequired,
        onFieldIdChange: PropTypes.func.isRequired,
        onOperatorIdChange: PropTypes.func.isRequired,
        onValueChange: PropTypes.func.isRequired
    }

    render() {

        const {
            filterRenderer,
            fields,
            fieldTypes,
            filterOperators,
            valueRenderer,
            onFieldIdChange,
            onOperatorIdChange,
            onValueChange,
            onRemove
        } = this.props

        return (
            <div
                className={css`
                    width: 700px;
                    max-width: 100%;
                    height: 100%;
                    position: relative;
                `}
            >
                <div
                    className={css`
                        width: 100%;
                        padding: 16px;
                    `}
                >
                    <div
                        className={css`
                            margin-bottom: 30px;
                        `}
                    >
                        {this.props.filters && this.props.filters.count() ? (
                            <div
                                className={css`
                                    margin-bottom: 16px;
                                `}
                            >
                                {this.props.filters.map((filter, index) => filterRenderer({
                                    key: filter.get('id'),
                                    index,
                                    filter,
                                    fields,
                                    fieldTypes,
                                    filterOperators,
                                    valueRenderer,
                                    onFieldIdChange,
                                    onOperatorIdChange,
                                    onValueChange,
                                    onRemove
                                }))}
                            </div>
                        ) : (
                                <EmptyState>
                                    {translate('There are no filters applied to this view')}
                                </EmptyState>
                            )}
                    </div>
                    <div
                        className={css`
                            display: flex;
                            justify-content: flex-end;
                        `}
                    >
                        <Button size={'sm'} icon={plus} onClick={this.props.onCreate}>
                            {translate('Add filter')}
                        </Button>
                    </div>
                </div>
            </div>
        )
    }

    handleSort = ({ oldIndex, newIndex }) => {
        this.props.onSort({ oldIndex, newIndex })
    }
}