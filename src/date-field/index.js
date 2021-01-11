import React from 'react'
import PropTypes from 'prop-types'
import RecordDetailEditor from './contexts/recordDetail/editor'
import RecordDetailReadOnly from './contexts/recordDetail/readOnly'
import RecordGalleryCard from './contexts/recordGalleryCard'
import RecordListItem from './contexts/recordListItem'

export default class DateField extends React.Component {

    static propTypes = {
        id: PropTypes.string,
        title: PropTypes.string,
        contextId: PropTypes.oneOf(['recordDetail', 'recordGridRow', 'recordGalleryCard', 'recordListItem']),
        roleId: PropTypes.oneOf(['editor', 'readOnly']),
        date: PropTypes.string,
        disabled: PropTypes.bool,
        includeTime: PropTypes.bool,
        sameTimeZone: PropTypes.bool,
        dateFormat: PropTypes.string,
        datePlaceholder: PropTypes.string,
        timeFormat: PropTypes.string,
        timePlaceholder: PropTypes.string,
        onChange: PropTypes.func,
        locale: PropTypes.string,
        mobile: PropTypes.bool
    }

    static defaultProps = {
        title: 'Unnamed Date Field',
        mobile: window.outerWidth > 768 === false
    }

    render() {

        const { contextId, roleId } = this.props

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

        if (contextId === 'recordGalleryCard' && roleId === 'readOnly') {
            return (
                <RecordGalleryCard
                    {...this.props}
                />
            )
        }

        if (contextId === 'recordListItem' && roleId === 'readOnly') {
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