import React from 'react'
import {SortableContainer, SortableElement} from 'react-sortable-hoc'

const Filter = SortableElement(({filter, i, onRender}) => onRender({filter, index: i}))
const FilterContainer = SortableContainer(({filters, onRender, disabled}) => (
    <div>
        {filters.map((filter, index) => (
            <Filter
                key={index}
                index={index}
                i={index}
                filter={filter}
                disabled={disabled}
                onRender={onRender}
            />
        ))}
    </div>
))

export default FilterContainer