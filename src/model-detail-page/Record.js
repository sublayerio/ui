import React from "react";
import { css } from "emotion";
import Box from "../box";
import fieldRenderer from "../table/fieldRenderer";
import FieldTooltip from "../field-tooltip";
import Button from '../button'
export default class DetailTable extends React.Component {

  state = {
    editing: false,
    record: null,
    changes: []
  }

  handleEdit = () => {

    this.setState({
      editing: true
    })
  }

  handleFieldChange = ({ id, value }) => {

    let changes = this.state.changes

    let change = changes.find(change =>
      change.id === id
    )

    if (!change) {
      change = {
        id,
        value
      }
      changes = [
        ...changes,
        change
      ]
    } else {

      changes = changes.map(change => {
        if (change.id === id) {
          return {
            ...change,
            value
          }
        }
        return change
      })
    }

    const { value: record } = this.getData({ changes })

    this.setState({
      record,
      changes
    })
  }

  handleDiscard = () => {

    this.setState({
      record: null,
      changes: [],
      editing: false
    })
  }

  getData = ({ changes }) => {

    const changed = changes.reduce((result, change) => {
      result[change.id] = change.value
      return result
    }, {})

    const prev = { ...this.props.record }

    const next = {
      ...prev,
      ...changed
    }

    return {
      changed,
      changes,
      prev,
      value: next
    }
  }

  handleSave = () => {

    const { hooks, recordId, modelId } = this.props

    const { changes, changed, prev, value } = this.getData({
      changes: this.state.changes
    })

    this.setState({
      record: value,
      editing: false,
      changes: []
    })

    if (!changes.length) {
      return
    }

    const hookFn = hooks["Record.onChange"]

    if (!hookFn) {
      console.warn('hook "Record.onChange" not registered')
      return
    }

    hookFn({
      modelId,
      recordId,
      changes,
      changed,
      prev,
      value
    }, this.props)
  }

  render() {

    console.log('propsss', this.props)

    const { modelId } = this.props
    const model = this.props.schema['ModelDatas'][modelId]

    let fields = model.fields

    if (this.props.fields) {
      fields = this.props.fields.map(fieldId =>
        fields.find(field => field.id === fieldId)
      )
    }

    const containsEditableFields = fields.reduce((result, field) => {

      if (result) return result

      return field.readOnly === false

    }, false)

    return (
      <div>
        {this.props.showTitle !== false || containsEditableFields ? (
          <div
            className={css`
            display: flex;
            align-items: center;
            margin-bottom: 16px;
          `}
          >
            {this.props.showTitle !== false ? (
              <div>
                <h3>{this.props.title}</h3>
              </div>
            ) : null}
            {containsEditableFields ? (
              <div
                className={css`
                margin-left: auto;
              `}
              >
                {!this.state.editing ? (
                  <Button size="sm" onClick={this.handleEdit}>
                    edit
                  </Button>
                ) : null}
                {this.state.editing ? (
                  <React.Fragment>
                    <Button size="sm" primary onClick={this.handleSave}>
                      save
              </Button>
                    {' '}
                    <Button size="sm" onClick={this.handleDiscard}>
                      discard
              </Button>
                  </React.Fragment>
                ) : null}
              </div>
            ) : null}
          </div>
        ) : null}
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

                let record = this.props.record

                if (this.state.record) {
                  record = this.state.record
                }

                let value = record[field.id]

                const editing = this.state.editing && !field.readOnly

                const content = fieldRenderer({
                  value,
                  record,
                  field,
                  modelId,
                  editing,
                  fieldId: field.id,
                  context: 'detail',
                  hooks: this.props.hooks,
                  schema: this.props.schema,
                  data: this.props.data,
                  onPageRefresh: this.props.onPageRefresh,
                  onChange: this.handleFieldChange
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
      </div>
    );
  }
}
