import React from "react";
import { css, cx } from "emotion";
import Record from "./Record";
import Box from "../box";
import ComponentHeader from "./ComponentHeader";
import Loader from "../loader";

export default class HasOne extends React.Component {

    state = {
        data: null,
        recordId: null,
        loading: true
    };

    fetch = async () => {

        const hookId = `HasOne.onRequest`

        const onRequest = this.props.hooks[hookId]

        if (!onRequest) {
            throw new Error(`hooks["HasMany.onRequest"] is not defined`)
        }

        const response = await onRequest(this.props)

        console.log({
            data: response.data
        })

        this.setState({
            data: response.data.data,
            recordId: response.data.recordId,
            loading: false
        });
    };

    async componentDidMount() {
        await this.fetch();
    }

    render() {
        return (
            <div>
                <ComponentHeader {...this.props} />
                {this.renderContent()}
            </div>
        );
    }

    renderContent() {

        if (this.state.loading) {
            return <Box p={32}>
                <div
                    className={css`
                        width: 100%;
                        height: 400px;
                    `}
                >
                    <Loader />
                </div>
            </Box>;
        }

        return (
            <div
                className={cx(
                    "Component_HasOne",
                    css`
                        position: relative;
                    `
                )}
            >
                <Record
                    ref={"table"}
                    modelId={this.props.foreignModel}
                    recordId={this.state.recordId}
                    record={this.state.data[this.props.foreignModel + "Datas"][this.state.recordId]}
                    hooks={this.props.hooks}
                    schema={this.props.schema}
                    data={this.state.data}
                    onPageRefresh={this.props.onPageRefresh}
                />
            </div>
        );
    }
}