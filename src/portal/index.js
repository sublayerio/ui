import React from 'react'
import ReactDOM from 'react-dom'
import uniqueId from 'lodash/uniqueId'
import ClickOutside from '../click-outside/ClickOutside'

let portals = []

export default class Portal extends React.Component {
    constructor(props) {
        super(props)
        this.id = uniqueId('portal_')
        portals.push(this.id)
        this.el = document.createElement('div')
        this.el.tabIndex = 0
        this.el.className = this.id
        this.el.addEventListener('keydown', this.handleKeydown)
    }

    componentDidMount() {
        // The portal element is inserted in the DOM tree after
        // the Modal's children are mounted, meaning that children
        // will be mounted on a detached DOM node. If a child
        // component requires to be attached to the DOM tree
        // immediately when mounted, for example to measure a
        // DOM node, or uses 'autoFocus' in a descendant, add
        // state to Modal and only render the children when Modal
        // is inserted in the DOM tree.
        const modalRoot = document.getElementsByTagName('body')[0]
        modalRoot.appendChild(this.el)
    }

    componentWillUnmount() {
        const modalRoot = document.getElementsByTagName('body')[0]
        this.el.removeEventListener('keydown', this.handleKeydown)
        modalRoot.removeChild(this.el)
        portals = portals.filter(id => id !== this.id)
    }

    handleKeydown = e => {

        if (e.key === 'Escape') {

            e.stopPropagation()

            this.handleClose
        }
    }

    handleClose = () => {

        if (portals[portals.length - 1] !== this.id) {
            return
        }

        if (this.props.onClose) {
            this.props.onClose()
        }
    }

    render() {
        return ReactDOM.createPortal(
            <ClickOutside onClickOutside={this.handleClose}>
                {this.props.children}
            </ClickOutside>,
            this.el
        )
    }
}