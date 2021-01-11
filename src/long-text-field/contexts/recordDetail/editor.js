import React from 'react'
import { css } from 'emotion'
import TextArea from '../../TextArea'
import Preview from '../../Preview'

export default class RecordDetail extends React.Component {

    state = {
        editing: true
    }

    render() {

        return (
            <div>
                <div>
                    {this.state.editing ? (
                        <TextArea
                            value={this.props.value}
                            onChange={this.handleChange}
                        />
                    ) : null}
                    {!this.state.editing ? (
                        <Preview
                            value={this.props.value}
                        />
                    ) : null}
                </div>
                <div
                    className={css`
                        display: flex;
                        align-items: center;
                        justify-content: flex-end;
                        margin-top: 4px;
                    `}
                >
                    <div
                    className={css`
                        font-size: 13px;
                        cursor: pointer;
                        padding: 3px 6px;
                        border-radius: 6px;
                        &:hover {
                            background-color: rgba(55,53,47,0.08);
                        }
                    `}
                    onClick={() => this.setState({ editing: !this.state.editing })}>
                        {this.state.editing ? 'Preview as Markdown' : 'Edit'}
                    </div>
                </div>
            </div>
        )
    }

    handleChange = ({ value }) => {

        if (!this.props.onChange) {
            return
        }

        this.props.onChange({
            id: this.props.id,
            value: value
        })
    }
}