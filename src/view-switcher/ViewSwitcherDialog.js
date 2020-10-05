import React from "react";
import { css } from 'emotion'
import { SortableContainer, SortableElement } from 'react-sortable-hoc'
import Button from '../button'
import SwitcherItem from '../switcher/SwitcherItem'
import SwitcherMenuItem from '../switcher/SwitcherMenuItem'
import SwitcherMenuHeader from '../switcher/SwitcherMenuHeader'
import translate from '../translate'
import icons from './icons'

const trash = props => (
    <svg {...props} viewBox="0 0 30 30" fill="currentColor"><path d="M21,5c0-2.2-1.8-4-4-4h-4c-2.2,0-4,1.8-4,4H2v2h2v22h22V7h2V5H21z M13,3h4c1.104,0,2,0.897,2,2h-8C11,3.897,11.897,3,13,3zM24,27H6V7h18V27z M16,11h-2v12h2V11z M20,11h-2v12h2V11z M12,11h-2v12h2V11z"></path></svg>
)

const SortableItem = SortableElement(({ children }) => (
    <div>
        {children}
    </div>
))

const SortableList = SortableContainer(({ children }) => (
    <div>
        {children}
    </div>
))

export default class ViewSwitcherDialog extends React.Component {

    render() {

        return (
            <React.Fragment>
                <div
                    className={css`
                                                    padding: 4px 0;
                                                `}
                >
                    <SwitcherMenuHeader>
                        Views
                                            </SwitcherMenuHeader>
                    <SortableList
                        onSortEnd={this.handleSort}
                        pressDelay={200}
                        lockAxis={'y'}
                        helperClass={css`
                            z-index: 2000;
                            transform: scale(1.1);
                        `}
                    >
                        {this.props.views.map((view, index) => {
                            return (
                                <SortableItem
                                    key={view.id}
                                    index={index}
                                >
                                    <SwitcherItem
                                        active={false}
                                        draggable={true}
                                        icon={() => icons[view.get('type') + 'View']({ width: 16 })}
                                        name={view.get('name') ? view.get('name') : 'Untitled'}
                                        onClick={() => {
                                            window.alert('choose view')
                                            this.props.onClose()
                                        }}
                                    />
                                </SortableItem>
                            )
                        })}
                    </SortableList>
                </div>
                <div
                    className={css`
                                                padding: 4px 0;
                                                border-top: 1px solid rgba(55, 53, 47, 0.09);
                                            `}
                >
                    <SwitcherMenuHeader>
                        Actions
                    </SwitcherMenuHeader>
                    <SwitcherMenuItem onClick={this.props.onExportToJSON}>
                        Export to JSON
                    </SwitcherMenuItem>
                    <SwitcherMenuItem onClick={this.props.onExportToCSV}>
                        Export to CSV
                    </SwitcherMenuItem>
                    <SwitcherMenuItem onClick={this.props.onExportViewConfiguration}>
                        Export view configuration
                    </SwitcherMenuItem>
                </div>
                {false ? (
                    <div
                        className={css`
                                                padding: 4px 0 16px 0;
                                                border-top: 1px solid rgba(55, 53, 47, 0.09);
                                            `}
                    >
                        <SwitcherMenuHeader>
                            {translate('ViewSwitcher.add_view_label')}
                        </SwitcherMenuHeader>
                        <div
                            className={css`
                                                    padding: 0 12px;
                                                    display: flex;
                                                `}
                        >
                            <div
                                className={css`
                                                        margin-right: 8px;
                                                    `}
                            >
                                <Button size={'sm'} icon={icons.gridView} onClick={() => this.addView('grid')}>
                                    Grid
                                </Button>
                            </div>
                            <div
                                className={css`
                                                        margin-right: 8px;
                                                    `}
                            >
                                <Button size={'sm'} icon={icons.listView} onClick={() => this.addView('list')}>
                                    List
                                </Button>
                            </div>
                            <div
                                className={css`
                                                    margin-right: 8px;
                                                `}
                            >
                                <Button size={'sm'} icon={icons.galleryView}
                                    onClick={() => this.addView('gallery')}>
                                    Gallery
                                                        </Button>
                            </div>
                            <Button
                                size={'sm'}
                                danger
                                icon={trash}
                                onClick={this.handleDeleteView}
                            />
                        </div>
                    </div>
                ) : null}
            </React.Fragment>
        )
    }

    handleSort = ({ oldIndex, newIndex }) => {

    }

    addView = (type) => {

    }

    handleDuplicateView = () => {

        window.alert.notice('Coming Soon. Part of future release.')
    }

    handleDeleteView = () => {

    }
}