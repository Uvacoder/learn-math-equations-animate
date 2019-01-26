import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Icon, Drawer, Divider, Menu } from 'antd'
import withStyles from 'react-jss'

const styles = theme => ({
  drawer: {
    zIndex: 1025,
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '48px',
    widths: '100%',
  },
  trigger: {
    paddingRight: theme.spacing.unit * 3,
    fontSize: '18px',
    cursor: 'pointer',
    transition: 'color .3s',
    color: '#fbfbfb',
    '&:hover': {
      color: '#b7b7b7',
    },
  },
  divider: {
    opacity: 0.1,
    margin: 2,
  },
  menu: {
    backgroundColor: '#212121'
  },
})

const menus = [
  {
    title: '001-taylor-series',
    route: '/'
  },
  {
    title: '002-fourier-series',
    route: '/fourier-series'
  }
]

/**
 * DrawerChild
 * @type {{classes: Object, setToggle: Function, toggle: Boolean}}
 */
DrawerChild.propTypes = {
  classes: PropTypes.object.isRequired,
  setToggle: PropTypes.func.isRequired,
  toggle: PropTypes.bool.isRequired
}

function DrawerChild ({classes, toggle, setToggle}) {
  return (
    <Drawer
      className={classes.drawer}
      bodyStyle={{padding: '0'}}
      placement="left"
      closable={false}
      visible={toggle}
      onClose={setToggle}
    >
      <div className={classes.toolbar}>
        <Icon className={classes.trigger} onClick={setToggle} type={'menu-fold'}/>
      </div>

      <Divider className={classes.divider}/>

      <Menu className={classes.menu} onClick={setToggle} theme="dark">
        {menus.map(({title, route}, key) =>
          <Menu.Item key={key}>
            <Link to={route} style={{textDecoration: 'none'}}>
              <Icon type="link"/>
              {title}
            </Link>
          </Menu.Item>
        )}
      </Menu>
    </Drawer>
  )
}

export default withStyles(styles)(DrawerChild)