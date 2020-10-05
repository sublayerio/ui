import React from "react";
import { css } from "emotion";
import fieldRenderer from "../table/fieldRenderer";

export default class RecordHoverCard extends React.Component {

    render() {

        const { name, modelId } = this.props
        const model = this.props.schema['ModelDatas'][modelId]
        const recordHoverCard = this.props.schema.RecordHoverCardDatas ? this.props.schema['RecordHoverCardDatas'][modelId] : null

        console.log(recordHoverCard, modelId)

        const filterFields = recordHoverCard ? recordHoverCard.fields : null

        const { primaryField } = model

        let fields = model.fields

        if (filterFields) {
            fields = filterFields.map(fieldId =>
                fields.find(field => field.id === fieldId)
            )
        }

        fields = fields.filter(field =>
            field.id !== primaryField
        )

        if (!filterFields) {
            fields = fields.slice(0, 5) // by default, only show first 5 fields max.
        }

        return (
            <div
                className={css`
                    max-width: 350px;
                `}
            >
                <div
                    className={css`
                        position: relative;
                        padding: 8px 16px;
                        border-bottom: 1px solid #e1e4e8;
                        line-height: 1.5;
                    `}
                >
                    <span className={css`font-weight: bold;`}>{name}</span>
                </div>
                <div
                    className={css`
                        font-size: 12px;
                        padding: 16px 0;
                    `}
                >
                    {fields.map((field, index) => {

                        const { record } = this.props;

                        const value = record[field.id]

                        const content = fieldRenderer({
                            value,
                            record,
                            field,
                            modelId,
                            fieldId: field.id,
                            recordId: record.id,
                            context: 'cell',
                            hooks: this.props.hooks,
                            schema: this.props.schema,
                            data: this.props.data,
                            onPageRefresh: this.props.onPageRefresh
                        })

                        return (
                            <div
                                key={field.id}
                                className={css`
                                    position: relative;
                                    padding: 0 16px;
                                    margin-bottom: 8px;
                                    &:last-child {
                                        margin-bottom: 0;
                                    }
                                `}
                            >
                                <div
                                    className={css`
                                        font-weight: bold;
                                        margin-bottom: 4px; 
                                        color: #737373;  
                                    `}
                                >
                                    {field.name ? field.name : field.id}
                                </div>
                                <div className={css`min-height: 16px; position: relative;`}>
                                    {content}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        )
    }
}
