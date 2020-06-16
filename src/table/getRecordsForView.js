import orderBy from 'lodash/orderBy'
import intersection from 'lodash/intersection'
import difference from 'lodash/difference'
import isEqual from 'lodash/isEqual'
import isArray from 'lodash/isArray'
import sortBy from 'lodash/sortBy'
import fieldTypeFns from './fieldTypeFns'

const contains = (item, input) => {

    const a = `${item}`.toLowerCase()
    const b = `${input}`.toLowerCase()

    return a.indexOf(b) !== -1
}

const arrayContains = (items, input) => items.reduce((result, item) => {

    if (result === true) {
        return true
    }

    return contains(item, input)

}, false)

const isEmptyArray = input => isArray(input) && input.length === 0

const defaultFilterFns = {
    contains: ({ filter, value }) => contains(value, filter.value),
    doesNotContain: ({ filter, value }) => !contains(value, filter.value),
    isNotEqual: ({ filter, value }) => value !== filter.value,
    isEqual: ({ filter, value }) => value === filter.value,
    isEmpty: ({ filter, value }) => value === null || isEmptyArray(value),
    isNotEmpty: ({ filter, value }) => value !== null && isEmptyArray(value) === false,
}

const filterFns = {
    "checkbox/=": defaultFilterFns.isEqual,
    "text/contains": defaultFilterFns.contains,
    "text/doesNotContain": defaultFilterFns.doesNotContain,
    "text/!=": defaultFilterFns.isNotEqual,
    "text/=": defaultFilterFns.isEqual,
    "text/isEmpty": defaultFilterFns.isEmpty,
    "text/isNotEmpty": defaultFilterFns.isNotEmpty,
    "longText/contains": defaultFilterFns.contains,
    "longText/doesNotContain": defaultFilterFns.doesNotContain,
    "longText/!=": defaultFilterFns.isNotEqual,
    "longText/=": defaultFilterFns.isEqual,
    "longText/isEmpty": defaultFilterFns.isEmpty,
    "longText/isNotEmpty": defaultFilterFns.isNotEmpty,
    // "relationship/contains": ctx => ({ field, filter, value }) => {

    //     if (filter.value === null) {
    //         return true
    //     }

    //     const items = (value || []).map(recordId => {

    //         const { foreignTableId } = field.settings
    //         const foreignTable = ctx.state.tablesById[foreignTableId]
    //         const { primaryFieldId } = foreignTable

    //         return get(ctx.state, [foreignTableId + 'ById', recordId, primaryFieldId], 'err: foreign_record_not_found')
    //     })

    //     return arrayContains(items, filter.value)
    // },
    // "relationship/doesNotContain": ctx => ({ field, filter, value }) => {

    //     if (filter.value === null) {
    //         return true
    //     }

    //     const items = (value || []).map(recordId => {

    //         const { foreignTableId } = field.settings
    //         const foreignTable = ctx.state.tablesById[foreignTableId]
    //         const { primaryFieldId } = foreignTable

    //         return get(ctx.state, [foreignTableId + 'ById', recordId, primaryFieldId], 'err: foreign_record_not_found')
    //     })

    //     return !arrayContains(items, filter.value)
    // },
    "relationship/isEmpty": defaultFilterFns.isEmpty,
    "relationship/isNotEmpty": defaultFilterFns.isNotEmpty,
    "multipleSelect/isEmpty": defaultFilterFns.isEmpty,
    "multipleSelect/isNotEmpty": defaultFilterFns.isNotEmpty,
    "multipleSelect/=": ({ filter, value }) => {

        const filterValue = JSON.parse(filter.value)

        if (!filterValue) {
            return true
        }

        // Note: the order in which the choices are set are not checked
        return isEqual(sortBy(value || []), sortBy(filterValue))
    },
    "multipleSelect/hasAnyOf": ({ filter, value }) => {

        const filterValue = JSON.parse(filter.value)

        value = value || []

        const intersected = intersection(value, filterValue)

        return intersected.length > 0
    },
    "multipleSelect/hasNoneOf": ({ filter, value }) => {

        const filterValue = JSON.parse(filter.value)

        value = value || []

        const intersected = intersection(value, filterValue)

        return intersected.length === 0
    },
    "multipleSelect/hasAllOf": ({ filter, value }) => {

        const filterValue = JSON.parse(filter.value)

        value = value || []

        const differed = difference(filter.value, filterValue)

        return differed.length === 0
    },
    "singleSelect/isEmpty": defaultFilterFns.isEmpty,
    "singleSelect/isNotEmpty": defaultFilterFns.isNotEmpty,
    "singleSelect/=": defaultFilterFns.isEqual,
    "singleSelect/!=": defaultFilterFns.isNotEqual,
    "singleSelect/isAnyOf": ({ filter, value }) => {

        const filterValue = JSON.parse(filter.value)

        if (!filterValue) {
            return true
        }

        if (!value) {
            return false
        }

        const intersected = intersection([value], filterValue)

        return intersected.length > 0
    },
    "singleSelect/isNoneOf": ({ filter, value }) => {

        const filterValue = JSON.parse(filter.value)

        if (!filterValue) {
            return true
        }

        if (!value) {
            return false
        }

        const intersected = intersection([value], filterValue)

        return intersected.length === 0
    },
    "number/=": ({ filter, value }) => value == filter.value,
    "number/!=": ({ filter, value }) => value !== filter.value,
    "number/<": ({ filter, value }) => value < filter.value,
    "number/<=": ({ filter, value }) => value <= filter.value,
    "number/>=": ({ filter, value }) => value >= filter.value,
    "number/isEmpty": defaultFilterFns.isEmpty,
    "number/isNotEmpty": defaultFilterFns.isNotEmpty
}

export default (state) => ({ view, fields, records }) => {

    const filters = view.get('filters')

    const filteredRecords = records.filter(record => {

        return filters.reduce((result, filter) => {

            if (result === false) {
                return false
            }

            const fieldId = filter.get('fieldId')

            const field = fields.find(field =>
                field.get('id') === fieldId
            )

            const filterFn = filterFns[field.get('type') + '/' + filter.get('operatorId')]

            if (!filterFn) {
                return true
            }

            const value = record[fieldId]

            const res = filterFn({
                field: field.toJS(),
                filter: filter.toJS(),
                record,
                value
            })

            return res

        }, true)
    })

    const sorters = view.get('sorters')

    const sorterIteratees = sorters.map(sorter => {
        const fieldId = sorter.get('fieldId')
        const field = fields.find(field =>
            field.get('id') === fieldId
        )
        const fieldType = fieldTypeFns[field.get('type')]

        if (!fieldType) {
            return record => record[field.get('id')]
        } 

        return record => fieldType.sort({ record, field: field.toJS() })
    }).toArray()

    const sorterOrders = sorters.map(sorter =>
        sorter.get('ascending') ? 'asc' : 'desc'
    ).toArray()

    const sortedRecords = sorters.count() ? orderBy(filteredRecords, sorterIteratees, sorterOrders) : filteredRecords

    return sortedRecords
}