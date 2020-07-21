import TableDemo from './demos/TableDemo'
import ModelDetailPageDemo from './demos/ModelDetailPageDemo'
import ButtonDemo from './demos/ButtonDemo'
import CheckboxDemo from './demos/CheckboxDemo'
import ToggleDemo from './demos/ToggleDemo'
import SidebarDemo from './demos/SidebarDemo'
import TabsDemo from './demos/TabsDemo'

export default [
    {
        id: 'table',
        title: 'Table',
        labels: ['hoc'],
        component: TableDemo
    },
    {
        id: 'model-detail-page',
        title: 'Model Detail Page',
        labels: ['hoc'],
        component: ModelDetailPageDemo
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
    },
    {
        id: 'tabs',
        title: 'Tabs',
        labels: ['loc'],
        component: TabsDemo
    },
    {
        id: 'sidebar',
        title: 'Sidebar',
        labels: ['loc'],
        component: SidebarDemo
    }
]