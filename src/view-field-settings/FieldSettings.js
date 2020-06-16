import React from 'react'
import PropTypes from 'prop-types'
import FieldContainer from './FieldContainer'
import Field from './Field'
import Item from './Item'
import { css } from 'emotion'
import translate from '../translate'
import Button from '../button'

export default class FieldSettings extends React.Component {

    static propTypes = {
        onSort: PropTypes.func.isRequired,
        onShowOrHide: PropTypes.func.isRequired,
        onShowOrHideAll: PropTypes.func.isRequired
    }

    render() {

        return (
            <div
                className={css`
                    width: 100%;
                    position: relative;
                    border-radius: 3px;
                    overflow: hidden;
                `}
            >
                <div>
                    {this.props.fields.count() ? (
                        <FieldContainer
                            fields={this.props.fields}
                            onSortEnd={this.handleSort}
                            pressDelay={200}
                            lockAxis={'y'}
                            helperClass={css`
                                z-index: 2000;
                                transform: scale(1.1);
                            `}
                        >
                            {this.props.fields.map((field, index) => {

                                return (
                                    <Item
                                        key={field.id}
                                        index={index}
                                        field={field}
                                        disabled={this.props.fields.count() === 1}
                                        onRender={this.renderItem}
                                    />
                                )
                            })}
                        </FieldContainer>
                    ) : (
                            <div
                                className={css`
                                height: 100%;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                padding: 14px;
                                text-align: center;
                                color: #737373;
                            `}
                            >
                                {translate('ViewFieldSettings.no_fields_available_to_be_hidden')}
                            </div>
                        )}
                </div>
                <div
                    className={css`
                            display: flex;
                            align-items: center;
                            padding: 16px;
                            justify-content: space-between;
                        `}
                >
                    <Button
                        size={'sm'}
                        className={css`
                            margin-right: 8px;
                        `}
                        block
                        onClick={() => this.handleShowOrHideAll({ visible: false })}
                    >
                        {translate('ViewFieldSettings.hide_all_button_label')}
                    </Button>
                    <Button
                        size={'sm'}
                        block
                        onClick={() => this.handleShowOrHideAll({ visible: true })}
                    >
                        {translate('ViewFieldSettings.show_all_button_label')}
                    </Button>
                </div>
            </div>
        )
    }

    renderItem = ({ field }) => {

        return (
            <Field
                id={field.id}
                field={field}
                onShowOrHide={this.props.onShowOrHide}
            />
        )
    }

    handleShowOrHideAll = ({ visible }) => {

        this.props.onShowOrHideAll({
            visible
        })
    }

    handleSort = ({ oldIndex, newIndex }) => {

        this.props.onSort({ oldIndex, newIndex })
    }
}