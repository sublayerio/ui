import React from 'react'
import { css } from 'emotion'
import Toggle from '../toggle'

const dragHandle = props => (
    <svg {...props} viewBox="0 0 10 10"><path d="M3,2 C2.44771525,2 2,1.55228475 2,1 C2,0.44771525 2.44771525,0 3,0 C3.55228475,0 4,0.44771525 4,1 C4,1.55228475 3.55228475,2 3,2 Z M3,6 C2.44771525,6 2,5.55228475 2,5 C2,4.44771525 2.44771525,4 3,4 C3.55228475,4 4,4.44771525 4,5 C4,5.55228475 3.55228475,6 3,6 Z M3,10 C2.44771525,10 2,9.55228475 2,9 C2,8.44771525 2.44771525,8 3,8 C3.55228475,8 4,8.44771525 4,9 C4,9.55228475 3.55228475,10 3,10 Z M7,2 C6.44771525,2 6,1.55228475 6,1 C6,0.44771525 6.44771525,0 7,0 C7.55228475,0 8,0.44771525 8,1 C8,1.55228475 7.55228475,2 7,2 Z M7,6 C6.44771525,6 6,5.55228475 6,5 C6,4.44771525 6.44771525,4 7,4 C7.55228475,4 8,4.44771525 8,5 C8,5.55228475 7.55228475,6 7,6 Z M7,10 C6.44771525,10 6,9.55228475 6,9 C6,8.44771525 6.44771525,8 7,8 C7.55228475,8 8,8.44771525 8,9 C8,9.55228475 7.55228475,10 7,10 Z"></path></svg>
)

class Field extends React.Component {

    render() {

        return (
            <div data-field-id={this.props.id} onClick={this.handleShowOrHide}>
                <div
                    className={css`
                        display: flex;
                        cursor: pointer;
                        align-items: center;
                        padding: 10px 16px;
                        background-color: #fff;
                        user-select: none;
                        transition: 200ms ease background-color;
                        &:hover {
                            background-color: rgba(var(--primaryColor), 0.1);
                        }
                        &:active {
                            background-color: #e6f1ff;
                        }
                    `}
                >
                    <div
                        className={css`
            display: flex;
            align-items: center;
            justify-content: center;
            width: 18px;
            height: 24px;
            flex-shrink: 0;
            cursor: -webkit-grab;
            margin-left: -6px;
            margin-right: 4px;
            visibility: visible;
            `}
                    >
                        {dragHandle({
                            width: 12,
                            className: css`
                width: 12px;
                height: 12px;
                display: block;
                fill: rgba(55, 53, 47, 0.4);
                flex-shrink: 0;
                backface-visibility: hidden;
                `
                        })}
                    </div>
                    <div
                        className={css`
                            display: inline-block;
                            max-width: 100%;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            margin-right: 16px;
                            flex-grow: 1;
                        `}
                    >
                        {this.props.field.get('name') ? this.props.field.get('name') : this.props.field.get('id')}
                    </div>
                    <div
                        className={css`
                            display: flex;
                        `}
                    >
                        <Toggle
                            width={30}
                            value={this.props.field.get('visible')}
                            onChange={() => { }}
                        />
                    </div>
                </div>
            </div>
        )
    }

    handleShowOrHide = (e) => {

        e.stopPropagation()

        this.props.onShowOrHide({
            id: this.props.field.get('id'),
            visible: !this.props.field.get('visible')
        })
    }
}

export default Field