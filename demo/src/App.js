import React from 'react'
import { Router, Switch, Route, Redirect, Link as RouterLink, withRouter } from 'react-router-dom'
import { css, cx, injectGlobal } from 'emotion'
import Brand from './Brand'
import Typeface from './Typeface'
import Demo from './Demo'
import DemoPage from './DemoPage'
import demos from './demos'
import brand from './icons/brand'
import { createBrowserHistory } from 'history'
const history = createBrowserHistory()

const components = demos.sort((a, b) => {
  return a.title.localeCompare(b.title)
})

const components_hoc = components.filter(demo => demo.labels.includes('hoc'))
const components_loc = components.filter(demo => demo.labels.includes('loc'))

injectGlobal`
  * {
    box-sizing: border-box;
  }
`

const Category = ({ children }) => (
  <div
    className={css`
    margin: 0 0 50px 0;
    `}
  >
    {children}
  </div>
)

const Label = ({ children }) => (
  <div
    className={css`
      margin: 0 0 15px 0;
      font-size: 13px;
      text-transform: uppercase;
      -webkit-letter-spacing: 1.3px;
      -moz-letter-spacing: 1.3px;
      -ms-letter-spacing: 1.3px;
      letter-spacing: 1.3px;
      font-weight: 400;
      color: #888;
      cursor: default;
      padding-left: 30px;
    `}
  >
    {children}
  </div>
)

const Link = ({ quiet, selected, to, children }) => (
  <div
    className={css`
      margin: 10px 0;
    `}
  >
    <div
      className={cx(
        css`
        padding: 4px 10px 4px 30px;
      `,
        selected ? css`
        border-left: 4px solid black;
        box-sizing: border-box;
        padding-left: 26px;
        ` : null
      )}
    >
      <RouterLink
        to={to}
        className={css`
          -webkit-text-decoration: none;
          text-decoration: none;
          font-size: 14px;
          color: #000;
          box-sizing: border-box;
          ${selected ? 'font-weight: 600;' : ''}
          ${quiet ? 'color: rgba(0, 0, 0, 0.5);' : ''}
        `}
      >
        {children}
      </RouterLink>
    </div>
  </div>
)

const Container = ({ children }) => (
  <div
    className={css`
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      margin: 0 0 0px 270px;
      -webkit-box-pack: left;
      -webkit-justify-content: left;
      -ms-flex-pack: left;
      justify-content: left;
      -webkit-font-smoothing: antialiased;
      background: #fafafa;
      padding: 0;
      min-height: 100vh;
      box-sizing: border-box;
      position: relative;
    `}
  >
    {children}
  </div>
)

const ComponentList = ({ title, components, history }) => {

  return (
    <Category>
      <Label>
        {title}
      </Label>
      {components.map(demo => (
        <Link
          selected={history.location.pathname.indexOf('/' + demo.id) !== -1}
          quiet={demo.draft}
          to={'/' + demo.id}
          key={demo.id}
        >
          {demo.title}
        </Link>
      ))}
    </Category>
  )
}

class Sidebar extends React.Component {

  render() {

    return (
      <div
        id="sidebar"
        className={css`
            position: fixed;
            width: 270px;
            margin-top: 0;
            bottom: 0;
            left: 0;
            top: 100px;
            overflow: auto;
            -webkit-overflow-scrolling: touch;
            -webkit-font-smoothing: antialiased;
          `}
      >
        <Category>
          <Label>
            Assets
          </Label>
          <Link
            to="/brand"
            selected={this.props.history.location.pathname.indexOf('/brand') !== -1}
          >
            Brand
          </Link>
        </Category>
        <Category>
          <Label>
            Typography
          </Label>
          <Link
            to="/typeface"
            selected={this.props.history.location.pathname.indexOf('/typeface') !== -1}
          >
            Typeface
          </Link>
        </Category>
        <ComponentList title={'Higher-order components'} components={components_hoc} history={history} />
        <ComponentList title={'Components'} components={components_loc} history={history} />
      </div>
    )
  }
}

Sidebar = withRouter(Sidebar)

const Layout = ({ children }) => (
  <div>
    <div
      id="header"
      className={css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    width: 270px;
  `}
    >
      <div
        className={css`
      padding: 30px;
    `}
      >
        <div
          className={css`
          display: flex;
          align-items: center;
        `}
        >
          {brand({ width: 34 })}
          <div
            className={css`
        font-size: 24px;
        font-weight: 900;
        margin-left: 8px;
      `}
          >
            Sublayer UI
    </div>
        </div>
      </div>
    </div>
    <Sidebar />
    <Container>
      {children}
    </Container>
  </div>
)

const DemoRoutes = () => (
  <Layout>
    <Switch>
      <Route
        path={'/brand'}
        exact={true}
        component={Brand}
      />
      <Route
        path={'/typeface'}
        exact={true}
        component={Typeface}
      />
      <Route
        path={'/:id'}
        component={Demo}
      />
      <Redirect
        to="/brand"
      />
    </Switch>
  </Layout>
)

export default class App extends React.Component {

  render() {

    return (
      <Router history={history}>
        <Switch>
          <Route
            path={'/preview/:id'}
            component={DemoPage}
          />
          <Route
            component={DemoRoutes}
          />
        </Switch>
      </Router>
    )
  }
}