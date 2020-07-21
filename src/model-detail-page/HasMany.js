import React from "react";
import { css, cx } from "emotion";
import Box from "../box";
import Table from "../table";
import EmptyState from "./EmptyState";
import ComponentHeader from "./ComponentHeader";
import Loader from "../loader";

export default class HasMany extends React.Component {

    state = {
        data: null,
        loading: true
    };

    fetch = async () => {

        const response = await this.props.onRequest(this.props)

        this.setState({
            data: response.data.data,
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

        const foreignModelId = this.props.foreignModel

        const recordCount = this.state.data[foreignModelId].length;

        if (!recordCount) {
            return <EmptyState>Geen records gevonden</EmptyState>;
        }

        return (
            <div
                className={cx(
                    "Component_HasMany",
                    css`
                    position: relative;
                    overflow: hidden;
                    border-radius: 6px;
                    border: 1px solid #ebebeb;
                    background-color: #fff;
          `
                )}
                style={{ height: this._getTableHeight(recordCount) }}
            >
                <Table
                    ref={"table"}
                    modelId={foreignModelId}
                    schema={this.props.schema}
                    data={this.state.data}
                    onPageRefresh={this.props.onPageRefresh}
                    onRecordClick={this.props.onRecordClick}
                />
            </div>
        );
    }

    _getTableHeight = count => Math.min(500, count * 50 + 44);
}