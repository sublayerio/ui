import React from 'react'
import { css } from 'emotion'
import Select from '../select'
import Button from '../button'
import translate from '../translate'

const trash = props => (
    <svg {...props} viewBox="0 0 30 30" fill="currentColor"><path d="M21,5c0-2.2-1.8-4-4-4h-4c-2.2,0-4,1.8-4,4H2v2h2v22h22V7h2V5H21z M13,3h4c1.104,0,2,0.897,2,2h-8C11,3.897,11.897,3,13,3zM24,27H6V7h18V27z M16,11h-2v12h2V11z M20,11h-2v12h2V11z M12,11h-2v12h2V11z"></path></svg>
)


export default class Filter extends React.Component {

    render() {

        const { valueRenderer, filter } = this.props

        const field = this.props.fields.find(field =>
            field.get('id') === this.props.filter.get('fieldId')
        )

        const fieldType = this.props.fieldTypes.find(fieldType =>
            fieldType.get('id') === field.get('type')
        )

        const filterOperators = fieldType.get('operators').map(id =>
            this.props.filterOperators.find(filterOperator => filterOperator.get('id') === id)
        )

        const filterOperator = this.props.filterOperators.find(filterOperator =>
            filterOperator.get('id') === field.get('type') + '/' + filter.get('operatorId')
        )

        return (
            <div
                className={css`
                    position: relative;
                    user-select: none;
                    font-size: 14px;
                    @media (max-width: 768px) {
                        padding-bottom: 16px;
                        margin-bottom: 16px;
                        border-bottom: 1px solid rgba(55,53,47,0.09);
                    }
                    @media (min-width: 768px) {
                        margin-bottom: 8px;
                        display: flex;
                        height: 30px;
                    }
                `}
            >

                <div
                    className={css`
                        @media(min-width: 768px) {
                            width: 40%;
                            flex: none;
                            display: flex;
                        }
                    `}
                >
                    <div
                        className={css`
                            @media(min-width: 768px) {
                                display: flex;
                                flex: none;
                                margin-right: 16px;
                            }
                        `}
                    >
                        <div
                            className={css`
                            display: flex;
                            @media(max-width: 768px) {
                                margin-bottom: 8px;
                                font-weight: 500;
                            }
                                @media(min-width: 768px) {
                                    align-items: center;
                                    flex: 1 1 auto;
                                    min-width: 0;
                                    min-height: 0;
                                }
                            `}
                        >
                            {this.props.index === 0 ? translate('Where') : translate('And')}
                        </div>
                    </div>
                    <div
                        className={css`
                        display: flex;
                        @media(max-width: 768px) {
                            margin-bottom: 8px;
                        }
                            @media(min-width: 768px) {
                                flex: 1 1 auto;
                                min-width: 0;
                                min-height: 0;
                                margin-right: 16px;
                            }
                        `}
                    >
                        <Select
                            title={'Select field'}
                            size={'sm'}
                            inline={!window.outerWidth > 768}
                            value={filter.get('fieldId')}
                            options={this.props.fields.map(field => ({
                                id: field.get('id'),
                                name: field.get('name') ? field.get('name') : field.get('id')
                            })).toArray()}
                            onChange={this.handleFieldIdChange}
                        />
                    </div>
                </div>
                <div
                    className={css`
                        @media(min-width: 768px) {
                            width: 60%;
                            display: flex;
                            flex: none;
                        }
                    `}
                >
                    <div
                        className={css`
                            @media(min-width: 768px) {
                                display: flex;
                            flex: 1 1 auto;
                            min-width: 0;
                            min-height: 0;
                            margin-right: 16px;
                            }
                        `}
                    >
                        <div
                            className={css`
                            display: flex;
                            @media(max-width: 768px) {
                                margin-bottom: 8px;
                            }
                                @media(min-width: 768px) {
                                flex: 1 1 auto;
                                min-width: 150px;
                                min-height: 0;
                                margin-right: 16px;
                                }
                            `}
                        >
                            <Select
                                title={'Select operator'}
                                size={'sm'}
                                inline={!window.outerWidth > 768}
                                value={filter.get('operatorId')}
                                options={filterOperators.map(filterOperator => {
                                    return {
                                        id: filterOperator.get('operatorId'),
                                        name: translate(filterOperator.get('name')) + (filterOperator.get('editorId') ? '...' : '')
                                    }

                                }).toArray()}
                                onChange={this.handleOperatorIdChange}
                            />
                        </div>
                        <div
                            className={css`
                            display: flex;
                            @media(max-width: 768px) {
                                margin-bottom: 8px;
                            }
                            @media(min-width: 768px) {
                            flex: 1 1 auto;
                            min-width: 0;
                            min-height: 0;
                            }
                        `}
                        >
                            {valueRenderer({
                                field,
                                fieldId: filter.get('fieldId'),
                                operatorId: filter.get('operatorId'),
                                editorId: filterOperator.get('editorId'),
                                value: filter.get('value'),
                                onChange: this.handleValueChange
                            })}
                        </div>
                    </div>
                    <div
                        className={css`
                            display: flex;
                            @media(max-width: 768px) {
                                justify-content: flex-end;
                            }
                            @media(min-width: 768px) {
                                align-items: center;
                                flex: none;
                            }
                        `}
                    >
                        <Button
                            size={'sm'}
                            icon={trash}
                            onClick={e => {
                                e.stopPropagation()
                                this.props.onRemove({ index: this.props.index })
                            }}
                        />
                    </div>
                </div>

            </div>
        )
    }

    handleFieldIdChange = ({ value }) => {

        this.props.onFieldIdChange({
            index: this.props.index,
            fieldId: value
        })
    }

    handleOperatorIdChange = ({ value }) => {

        this.props.onOperatorIdChange({
            index: this.props.index,
            operatorId: value
        })
    }

    handleValueChange = ({ value }) => {

        this.props.onValueChange({
            index: this.props.index,
            value
        })
    }
}