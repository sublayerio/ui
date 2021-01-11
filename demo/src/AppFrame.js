import React from 'react'
import { css } from 'emotion'
import Viewport from './Viewport'
import LayoutSidebar from './LayoutSidebar'

const menu = props => (
    <svg {...props} viewBox="0 0 14 14"><path d="M0,1.25 L14,1.25 L14,2.75 L0,2.75 L0,1.25 Z M0,6.25 L14,6.25 L14,7.75 L0,7.75 L0,6.25 Z M0,11.25 L14,11.25 L14,12.75 L0,12.75 L0,11.25 Z"></path></svg>
)

const Frame = ({ hide, sidebarWidth, width, height, children }) => (
    <div
        style={{
            flexGrow: 1,
            flexShrink: 1,
            display: 'flex',
            flexDirection: 'column',
            background: 'white',
            zIndex: 1,
            width,
            height,
            maxHeight: '100%',
            boxShadow: 'rgba(15, 15, 15, 0.05) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 3px 6px, rgba(15, 15, 15, 0.2) 0px 9px 24px',
            // pointerEvents: hide ? 'none' : 'auto',
            transition: 'transform 200ms ease 0s',
            transform: hide ? `translateZ(0px) translateX(${sidebarWidth}px)` : 'translateZ(0px) translateX(0px)'
        }}
    >
        {children}
    </div>
)

const TopBar = ({ children }) => (
    <div
        className={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: 100vw;
        height: 44px;
        margin-top: env(safe-area-inset-top);
        padding-left: calc(0px + env(safe-area-inset-left));
        padding-right: calc(7px + env(safe-area-inset-right));
        box-shadow: rgba(55, 53, 47, 0.16) 0px 1px 0px;
        background: white;
        transition: box-shadow 300ms ease 0s;
        user-select: none;
        cursor: pointer;
        `}
    >
        {children}
    </div>
)

const Scroller = ({ children }) => (
    <div
        className={css`
            display: flex;
            flex-direction: column;
            z-index: 1;
            flex-grow: 1;
            position: relative;
            align-items: center;
            overflow: auto;
            transform: translate3d(0px, 0px, 0px);
            will-change: scroll-position, transform;
        `}
    >
        {children}
    </div>
)

const SidebarFrame = ({ sidebarWidth, width, height, children }) => (
    <div
        className={css`
        display: block;
        position: fixed;
        top: 0px;
        left: 0px;
        `}
        style={{
            width,
            height
        }}
    >
        <div
            className={css`
            display: flex;
            flex-direction: column;
            background: rgb(247, 246, 243);
            will-change: transform;
            color: rgba(55, 53, 47, 0.6);
            cursor: pointer;
            `}
            style={{
                width: sidebarWidth,
                height
            }}
        >
            {children}
        </div>
    </div>
)

export default class AppFrame extends React.Component {

    state = {
        sidebar: false
    }

    render() {

        return (
            <Viewport>
                {({ width, height }) => {

                    const sidebarWidth = Math.min(width - 44, 300)

                    return (
                        <div style={{ position: 'fixed', width, height }}>
                            <SidebarFrame width={width} height={height} sidebarWidth={sidebarWidth}>
                                <LayoutSidebar />
                            </SidebarFrame>
                            <Frame width={width} height={height} sidebarWidth={sidebarWidth} hide={this.state.sidebar}>
                                <TopBar>
                                    <div onClick={() => this.setState({ sidebar: !this.state.sidebar })} className={css`width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; pointer-events: auto;`}>
                                        {menu({ height: 14 })}
                                    </div>
                                </TopBar>
                                <Scroller>
                                    {this.props.children}
                                </Scroller>
                            </Frame>
                        </div>
                    )
                }}
            </Viewport>
        )
    }
}