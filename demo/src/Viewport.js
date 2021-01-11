import React from 'react'

const isBrowser = typeof process === 'undefined' || process.type === 'renderer' || process.browser === true || process.__nwjs

const SSR_WIDTH = 400
const SSR_HEIGHT = 400

export default class Viewport extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            width: isBrowser ? window.innerWidth : SSR_WIDTH,
            height: isBrowser ? window.innerHeight : SSR_HEIGHT
        }

        this.interval = setInterval(this.handleDimensionsUpdate, 200)
    }

    componentWillUnmount() {

        if (this.interval) {
            clearInterval(this.interval)
        }
    }

    handleDimensionsUpdate = () => {

        const width = isBrowser ? window.innerWidth : SSR_WIDTH
        const height = isBrowser ? window.innerHeight : SSR_HEIGHT

        if (this.state.width !== width || this.state.height !== height) {

            this.setState({
                width,
                height
            })
        }
    }

    render() {

        return this.props.children({
            width: this.state.width,
            height: this.state.height
        })
    }
}