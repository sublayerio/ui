import React from 'react'
import {SortableContainer} from 'react-sortable-hoc'

const FieldContainer = SortableContainer(({children}) => (
    <div>
        {children}
    </div>
))

export default FieldContainer