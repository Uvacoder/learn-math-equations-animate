import React, { lazy, Suspense } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import withStyles from 'react-jss';
import { Layout} from 'antd';

import { AppBar, Drawer, Loading } from 'components'
import { useToggle } from 'utils'

const {Content} = Layout

const styles = theme => ({
  root: {
    height: '100vh',
    position: 'relative',
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    overflowY: 'auto',
    backgroundColor: (theme.palette.type === 'dark') ? '#191919' : '#fafafa',
    padding: theme.spacing.unit * 4,
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 24,
  },
});

const routes = [
  {
    path: '/',
    component: lazy(() => import('./001_taylor_series'))
  },
  {
    path: '/fourier-series',
    component: lazy(() => import('./002_fourier_series'))
  },
  {
    path: '(.*)',
    component: lazy(() => import('./error'))
  },
]

/**
 *
 * @type {{classes: Object}}
 */
App.propTypes = {
  classes: PropTypes.object.isRequired
}

function App ({classes}) {
  const _useToggle = useToggle()

  return (
    <Router>
      <Layout className={classes.root}>
        <AppBar {..._useToggle}/>
        <Drawer{..._useToggle}/>
        <Content className={classes.content}>
          <div className={classes.toolbar}/>
          <Suspense fallback={<Loading/>}>
            <Switch>
              {routes.map((route, key) => <Route key={key} exact {...route}/>)}
            </Switch>
          </Suspense>
        </Content>
      </Layout>
    </Router>
  )
}

export default withStyles(styles)(App)