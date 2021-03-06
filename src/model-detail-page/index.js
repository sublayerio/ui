import React from 'react'
import renderLayout from './renderLayout'

export default class ModelDetailPage extends React.Component {

    static defaultProps = {
        components: {},
        hooks: {}
    }

    render() {

        const { layout } = this.props.modelDetailPage

        const { modelId, recordId } = this.props

        const record = this.props.data[modelId + 'Datas'][recordId]

        return (
            <div>
                <div>
                    {renderLayout({
                        record,
                        components: this.props.components,
                        hooks: this.props.hooks,
                        schema: this.props.schema,
                        data: this.props.data,
                        modelId: this.props.modelId,
                        recordId: this.props.recordId,
                        onRequest: this.props.onRequest, // deprecated since 1.5.0
                        onPageRefresh: this.props.onPageRefresh,
                        onRecordClick: this.props.onRecordClick
                    })(layout)}
                </div>
            </div>
        )
    }
}