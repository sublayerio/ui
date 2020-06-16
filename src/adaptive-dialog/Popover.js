import React from 'react'
import ReactDOM from 'react-dom'
import { css, cx } from 'emotion'
import debounce from 'lodash/debounce'
class Popover extends React.Component {
    
    mounted = true
    
    state = {
        maxHeight: 'calc(100vh - 30px)'
    }

    componentDidMount() {

        setTimeout(this.calculateMaxHeight, 100)

        window.addEventListener('resize', this.calculateMaxHeight)
    }

    componentWillUnmount() {
        this.mounted = false
        window.removeEventListener('resize', this.calculateMaxHeight)

    }

    calculateMaxHeight = debounce(() => {

        if (!this.mounted) {
            return
        }

        const el = ReactDOM.findDOMNode(this)

        const bounding_client_rect = el.getBoundingClientRect()

        const viewport_height = window.innerHeight
        const { top } = bounding_client_rect
        const buffer = 30

        this.setState({
            maxHeight: viewport_height - top - buffer
        })
    }, 100)

    render() {

        const { placement, maxWidth, width, className, children } = this.props

        const placementStyles = {
            'top-start': css`
                margin-bottom: 8px;
            `,
            'top-end': css`
                margin-bottom: 8px;
            `,
            'bottom-start': css`
                margin-top: 8px;
            `,
            'bottom-end': css`
                margin-top: 8px;
            `,
        }

        const placementStyle = placementStyles[placement] || null

        return (
            <div
                className={cx(
                    css`
                        -webkit-transform-origin: 50% 0;
                        -webkit-transition: all .3s cubic-bezier(.02,.71,.23,.99);
                        background-color: #fff;
                        box-shadow: rgba(15, 15, 15, 0.05) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 3px 6px, rgba(15, 15, 15, 0.2) 0px 9px 24px;
                        border-radius: 6px;
                        color: #000;
                        display: block;
                        fill: #000;
                        font-size: 14px;
                        line-height: 1.4;
                        transform-origin: 50% 0;
                        transition: all .3s cubic-bezier(.02,.71,.23,.99);
                        -webkit-filter: drop-shadow(0 1px 7px rgba(0,0,0,.13));
                        filter: drop-shadow(0 1px 7px rgba(0,0,0,.13));
                        animation-duration: .15s;
            overflow: hidden auto;
                    `,
                    placementStyle,
                    className
                )}
                style={{
                    width,
                    maxWidth,
                    maxHeight: this.state.maxHeight
                }}
            >
                {children}
            </div>
        )
    }
}

export default Popover