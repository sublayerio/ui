import get from 'lodash/get'

const fieldTypes = {
    attachment: {
        id: 'attachment',
        sort: ({ record, field }) => {
            const value = record[field.id]

            if (!value) {
                return null
            }

            return value.length
        }
    },
    text: {
        id: 'text',
        sort: ({ record, field }) => {
            return record[field.id]
        },
    },
    longText: {
        id: 'longText',
        sort: ({ record, field }) => {
            return record[field.id]
        },
    },
    checkbox: {
        id: 'checkbox',
        sort: ({ record, field }) => {
            return record[field.id]
        },
    },
    date: {
        id: 'date',
        sort: ({ record, field }) => {
            return record[field.id]
        },
    },
    number: {
        id: 'number',
        sort: ({ record, field }) => {
            return record[field.id] ? parseFloat(record[field.id]) : record[field.id]
        },
    },
    multipleSelect: {
        id: 'multipleSelect',
        sort: ({ record, field }) => {

            const value = record[field.id]

            if (!value) {
                return null
            }

            return value.map(optionId => {
                const option = field.settings.options.find(option =>
                    option.id === optionId
                )
                return option ? option.name : null
            }).join(', ')
        },
    },
    singleSelect: {
        id: 'singleSelect',
        sort: ({ record, field }) => {

            const value = record[field.id]

            if (!value) {
                return null
            }

            return field.settings.options.findIndex(option => option.id === value)
        },
    },
    relationship: {
        id: 'relationship',
        sort: ({ record, field }) => {

            return record[field.id]

            // const value = record[field.id]

            // if (!value) {
            //     return null
            // }

            // return value.map(recordId => {

            //     const { foreignTableId } = field.settings
            //     const foreignTable = state.tablesById[foreignTableId]
            //     const { primaryFieldId } = foreignTable

            //     return get(state, [foreignTableId + 'ById', recordId, primaryFieldId], 'err: foreign_record_not_found')

            // }).join(', ')
        },
    }
}

export default fieldTypes