import React from 'react'
import { css, cx } from 'emotion'
import AdaptiveDialog from '../adaptive-dialog'
import ViewSwitcherDialog from './ViewSwitcherDialog'
import TitleInput from '../inline-title-input/InlineTitleInput'
import icons from './icons'

export default class ViewButton extends React.Component {

    openTimeout = null

    ctrls = {
        portal: null
    }

    state = {
        open: false,
        updatingViewName: false
    }

    render() {

        console.log('this.props', this.props)

        return (
            <React.Fragment>
                <div
                    ref={'button'}
                    className={css`
                                    display: flex;
                                    align-items: center;
                                `}
                >
                    <div>
                        {this.state.renaming ? (
                            <div
                                className={css`
                                                padding: 4px 8px;
                                            `}
                            >
                                <div onKeyDown={this.handleKeydown}>
                                    <TitleInput
                                        value={this.state.title}
                                        onChange={this.handleTitleChange}
                                        onBlur={this.handleTitleSave}
                                        loading={this.props.updatingViewName}
                                    />
                                </div>
                            </div>
                        ) : (
                                <div
                                    className={cx(
                                        css`
                                padding: 4px 8px;
                                border-radius: 6px;
                                cursor: pointer;
                                user-select: none;
                                display: inline-flex;
                                align-items: center;
                                background: transparent;
                                transition: background 120ms ease-in 0s;
                                height: 30px;
                                &:hover {
                                    background: rgba(55, 53, 47, 0.08);
                                }
                            `,
                                        this.state.open ? css`
                                                    background: rgba(55, 53, 47, 0.08);
                                                    ` : null
                                    )}
                                    onClick={this.handleClick}
                                    onDoubleClick={this.handleDoubleClick}
                                >
                                    {icons[this.props.view.get('type') + 'View']({ width: 14, className: css`margin-right: 6px;` })}
                                    <div
                                        className={css`
                                                    user-select: none;
                                                    max-width: 100%;
                                                    text-overflow: ellipsis;
                                                    white-space: nowrap;
                                                    font-weight: bold;
                                                    flex-shrink: 0;
                                                    `}
                                    >
                                        {this.props.view.get('name') ? this.props.view.get('name') : 'Untitled'}
                                    </div>
                                </div>
                            )}
                    </div>
                </div>
                {this.state.open ? (
                    <AdaptiveDialog
                        title={'Views'}
                        referenceElement={this.refs.button}
                        popoverWidth={300}
                        popoverPlacement="bottom-start"
                        onClose={this.handleClose}
                    >
                        {() => (
                            <ViewSwitcherDialog
                                {...this.props}
                                onClose={this.handleClose}
                            />
                        )}
                    </AdaptiveDialog>
                ) : null}
            </React.Fragment>
        )
    }

    handleKeydown = e => {

        if (e.key === 'Escape') {
            this.handleTitleSave()
        }
    }

    handleClick = () => {

        this.clearClickTimeout()
        this.openTimeout = setTimeout(() => {
            if (!this.state.renaming) {
                this.handleOpen()
            }
        }, 150)
    }

    clearClickTimeout = () => {

        if (this.openTimeout) {
            clearTimeout(this.openTimeout)
            this.openTimeout = null
        }
    }

    handleDoubleClick = () => {

        this.clearClickTimeout()

        if (!['creator', 'editor'].includes(this.props.roleId)) {
            return
        }

        // if (!this.props.toggles.get('update_view_name_inline')) {
        //     return
        // }

        this.renameView()
    }

    handleOpen = () => {

        this.setState({
            open: true
        }, () => {

            // ReactDOM.findDOMNode(this.ctrls.portal).parentElement.focus()
        })
    }

    handleClose = () => {

        this.setState({
            open: false
        })
    }

    getTitle = () => this.props.view.get('name')

    renameView = () => {

        this.setState({
            renaming: true,
            originalTitle: this.getTitle(),
            title: this.getTitle()
        })
    }

    handleTitleChange = e => {

        this.setState({
            title: e.target.value
        })
    }

    handleTitleSave = async () => {

        if (this.state.originalTitle !== this.state.title) {

            // execute({
            //     type: 'set_name_for_view',
            //     payload: {
            //         applicationId: this.props.applicationId,
            //         id: this.props.viewId,
            //         name: this.state.title
            //     }
            // })
        }

        this.setState({
            renaming: false,
            title: ''
        })
    }
}