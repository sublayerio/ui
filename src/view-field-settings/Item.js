import {SortableElement} from 'react-sortable-hoc'

export default SortableElement(({field, visibility, onRender}) => onRender({field, visibility}))