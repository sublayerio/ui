import React, { Component } from 'react'
import { render } from 'react-dom'
import { injectGlobal, css } from 'emotion'
import icons from './icons'

injectGlobal`
    *, :before, :after {
        box-sizing: border-box;
    }
    
    body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }
`

import { Container, Sidebar, MenuBrand, MenuContainer, Menu, MenuSeparator, MenuItem, MenuUser } from '../../../src/sidebar'

export default class SidebarDemo extends Component {

    state = {
        dark: true
    }

    render() {

        const theme = this.state.dark ? 'dark' : 'light'

        return (
            <div
                className={css`
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: ${theme === 'dark' ? '#fff' : '#f9f9f9'}
                `}
            >
                <Container>
                    <Sidebar theme={theme}>
                        <MenuBrand
                            theme={theme}
                            imageFitTypeId={'cover'}
                            imageUrl={'https://avatars2.githubusercontent.com/u/66509471?s=200&v=4'}
                            title={'Sublayer App'}
                            description={'Version v1.0.0'}
                        />
                        <MenuContainer theme={theme}>
                            <Menu>
                                <MenuItem
                                    theme={theme}
                                    icon={icons.payments}
                                    title={'Payments'}
                                    onClick={() => alert('Menu item clicked')}
                                />
                                <MenuItem
                                    theme={theme}
                                    icon={icons.orders}
                                    title={'Orders'}
                                    active={true}
                                    onClick={() => alert('Menu item clicked')}
                                />
                                <MenuItem
                                    theme={theme}
                                    icon={icons.statistics}
                                    title={'Statistics'}
                                    onClick={() => alert('Menu item clicked')}
                                />
                                <MenuItem
                                    theme={theme}
                                    icon={icons.administration}
                                    title={'Administration'}
                                    onClick={() => alert('Menu item clicked')}
                                />
                                <MenuSeparator theme={theme} />
                                <MenuItem
                                    theme={theme}
                                    icon={icons.developer}
                                    title={'Developers'}
                                    onClick={() => alert('Menu item clicked')}
                                />
                                <MenuItem
                                    theme={theme}
                                    icon={icons.notification}
                                    title={'Notifications'}
                                    onClick={() => alert('Menu item clicked')}
                                />
                                <MenuItem
                                    theme={theme}
                                    icon={icons.account}
                                    title={'Account'}
                                    onClick={() => alert('Menu item clicked')}
                                />
                                <MenuItem
                                    theme={theme}
                                    icon={icons.settings}
                                    title={'Settings'}
                                    onClick={() => alert('Menu item clicked')}
                                />
                                <MenuItem
                                    theme={theme}
                                    icon={icons.payments}
                                    title={'Very long title that gets truncated'}
                                    onClick={() => alert('Menu item clicked')}
                                />
                                <MenuSeparator theme={theme} large={true} />
                                <MenuItem
                                    theme={theme}
                                    icon={icons.help}
                                    small={true}
                                    title={'Switch dark mode'}
                                    onClick={() => this.setState({ dark: !this.state.dark })}
                                />
                                <MenuItem
                                    theme={theme}
                                    icon={icons.help}
                                    small={true}
                                    active={true}
                                    title={'Help'}
                                    onClick={() => alert('Menu item clicked')}
                                />
                                <MenuItem
                                    theme={theme}
                                    icon={icons.chat}
                                    small={true}
                                    title={'Chat'}
                                    onClick={() => alert('Menu item clicked')}
                                />
                                <MenuItem
                                    theme={theme}
                                    icon={icons.signout}
                                    small={true}
                                    title={'Sign out'}
                                    onClick={() => alert('Menu item clicked')}
                                />
                            </Menu>
                        </MenuContainer>
                        <MenuUser
                            theme={theme}
                            imageUrl={'http://i.pravatar.cc/300'}
                            title={'John Doe'}
                            description={'johndoe@acme.com'}
                            onClick={() => {
                                alert('Clicked user')
                            }}
                        />
                    </Sidebar>
                    <div
                        className={css`
                        padding: 0 70px;
                        margin: 70px auto;
                    `}
                    >
                        <h1>Sidebar Demo</h1>
                    </div>
                </Container>
            </div>
        )
    }
}
