import React from 'react'
import { cx, css } from 'emotion'
import Draggable from 'react-draggable'

class HeaderCell extends React.Component {

    state = {
        open: false,
        resizing: false
    }

    constructor(props) {

        super(props)
        this._width = props.width
        this.width = props.width
    }

    componentWillReceiveProps = (nextProps) => {

        if (nextProps.width !== this._width) {
            this._width = nextProps.width
            this.width = nextProps.width
        }
    }

    handleResize = ({ deltaX }) => {

        if (deltaX === 0) {
            return
        }

        const width = this._width + deltaX

        if (width < 60) {
            return
        }

        this._width = width

        this.props.onResize({ columnIndex: this.props.columnIndex, viewFieldId: this.props.viewFieldId, deltaX, width })
    }

    handleResizeStart = () => {

        this.setState({
            resizing: true
        })
    }

    handleResizeStop = () => {
        this.width = this._width
        this.setState({
            resizing: false
        })
    }

    render() {

        return (
            <div
                className={css`
                    position: relative;
                `}
                style={{
                    ...this.props.style,
                    width: this._width
                }}
            >
                <div
                    className={'headerCell'}
                >
                    {this.props.children}
                </div>
                <div
                    className={css`
                            position: absolute;
                            top: 0px;
                            right: 0px;
                            width: 0px;
                            flex-grow: 0;
                            z-index: 1;
                        `}
                >
                    <div
                        className={cx(
                            css`
                            width: 5px;
                            margin-left: -3px;
                            height: 44px;
                            transition: background 200ms ease-out 0s;
                            background: transparent;
                            cursor: col-resize;
                            border-radius: 6px;
                        `,
                            this.state.resizing ? css`
                                background: rgba(0, 34, 253, 0.8);
                                ` : null
                        )}
                    />
                </div>
                <div
                    className={css`
                            position: absolute;
                            top: 0px;
                            width: 0px;
                            flex-grow: 0;
                            z-index: 1;
                        `}
                    style={{
                        left: this.width
                    }}
                >
                    <Draggable
                        axis="x"
                        onClick={this.handleClick}
                        onStart={this.handleResizeStart}
                        onDrag={(event, { deltaX }) => this.handleResize({ deltaX })}
                        onStop={this.handleResizeStop}
                        position={{ x: 0 }}
                        zIndex={999}
                        defaultClassName={cx(css`
                            width: 5px;
                            margin-left: -3px;
                            height: 44px;
                            transition: background 200ms ease-out 0s;
                            background: transparent;
                            cursor: col-resize;
                            border-radius: 6px;   
                        `,
                            !this.state.resizing ? css`
                    &:hover {
                        background: rgba(0, 34, 253, 0.8);
                    }
                    ` : null
                        )}
                        defaultClassNameDragging="DragHandleActive"

                    >
                        <div></div>
                    </Draggable>
                </div>
            </div>
        )
    }
}

export default HeaderCell