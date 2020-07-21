import React from "react";
import { css } from "emotion";
import Box from "../box";
import fieldRenderer from "../table/fieldRenderer";
import FieldTooltip from "../field-tooltip";

export default class DetailTable extends React.Component {

  render() {

    const { modelId } = this.props
    const model = this.props.schema['ModelDatas'][modelId]

    let fields = model.fields

    if (this.props.fields) {
      fields = this.props.fields.map(fieldId =>
        fields.find(field => field.id === fieldId)
      )
    }

    return (
      <Box>
        <table
          className={css`
            width: 100%;
            table-layout: fixed;
            border-collapse: collapse;
          `}
        >
          <tbody>
            {fields.map((field, index) => {
              const { record, data } = this.props;

              const value = record[field.id]

              const content = fieldRenderer({
                value,
                record,
                field,
                schema: this.props.schema,
                data: this.props.data,
                onPageRefresh: this.props.onPageRefresh
              })

              return (
                <tr key={field.id}>
                  <th
                    className={css`
                      text-align: left;
                      ${index !== 0 ? "border-top: 1px solid #f2f2f2;" : ""}
                      ${index !== fields.length - 1
                        ? "border-bottom: 1px solid #f2f2f2;"
                        : ""}
                                    padding: 11px 16px;
                      vertical-align: top;
                      color: #737373;
                      font-weight: bold;
                      width: 30%;
                      font-size: 14px;
                    `}
                    height={40}
                  >
                    <FieldTooltip field={field}>{field.name ? field.name : field.id}</FieldTooltip>
                  </th>
                  <td
                    className={css`
                      ${index !== 0 ? "border-top: 1px solid #f2f2f2;" : ""}
                      ${index !== fields.length - 1
                        ? "border-bottom: 1px solid #f2f2f2;"
                        : ""}
                                    padding: 8px 16px;
                      color: #737373;
                    `}
                    height={40}
                  >
                    <div
                      className={css`
                        position: relative;
                        display: flex;
                        align-items: center;
                        width: 100%;
                        height: 100%;
                        font-size: 14px;
                      `}
                    >
                      {content}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Box>
    );
  }
}
