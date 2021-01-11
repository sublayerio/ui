import React from 'react'
import PropTypes from 'prop-types'
import RecordDetailEditor from './contexts/recordDetail/editor'
import RecordDetailReadOnly from './contexts/recordDetail/readOnly'
import RecordGalleryCard from './contexts/recordGalleryCard'
import RecordListItem from './contexts/recordListItem'

export default class LongTextField extends React.Component {

    static propTypes = {
        contextId: PropTypes.oneOf(['recordDetail', 'recordGridCell', 'recordGalleryCard', 'recordListItem']),
        roleId: PropTypes.oneOf(['editor', 'readOnly']),
        value: PropTypes.string,
        onChange: PropTypes.func,
        writeButtonLabel: PropTypes.string,
        previewButtonLabel: PropTypes.string
    }

    static defaultProps = {
        writeButtonLabel: 'Write',
        previewButtonLabel: 'Preview'
    }

    render() {

        const { contextId, roleId } = this.props

        console.log({
            contextId,
            roleId
        })

        if (contextId === 'recordDetail' && roleId === 'editor') {

            return (
                <RecordDetailEditor
                    {...this.props}
                />
            )
        }

        if (contextId === 'recordDetail' && roleId === 'readOnly') {

            return (
                <RecordDetailReadOnly
                    {...this.props}
                />
            )
        }

        if (contextId === 'recordGalleryCard') {

            return (
                <RecordGalleryCard
                    {...this.props}
                />
            )
        }

        if (contextId === 'recordListItem') {

            return (
                <RecordListItem
                    {...this.props}
                />
            )
        }

        if (contextId === 'recordGridCell') {

            return (
                <RecordListItem
                    {...this.props}
                />
            )
        }

        return (
            <div>
                Not supported
            </div>
        )
    }
}