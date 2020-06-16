import TableDemo from './demos/TableDemo'
import ButtonDemo from './demos/ButtonDemo'
import CheckboxDemo from './demos/CheckboxDemo'
import ToggleDemo from './demos/ToggleDemo'

export default [
    {
        id: 'table',
        title: 'Table',
        labels: ['hoc'],
        component: TableDemo
    },
    {
        id: 'button',
        title: 'Button',
        labels: ['loc'],
        component: ButtonDemo
    },
    {
        id: 'toggle',
        title: 'Toggle',
        labels: ['loc'],
        component: ToggleDemo
    },
    {
        id: 'checkbox',
        title: 'Checkbox',
        labels: ['loc'],
        component: CheckboxDemo
    }
]