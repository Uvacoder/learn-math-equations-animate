import React from 'react'
import PropTypes from 'prop-types'
import { Layout, Icon } from 'antd'
import withStyles from 'react-jss'

const {Header} = Layout

const styles = theme => ({
  appBar: {
    paddingTop: '0',
    backgroundColor: (theme.palette.type === 'dark') ? '#1e1e1e' : '#ffffff',
    width: '100%',
    height: '48px',
    position: 'absolute',
    opacity: 0.85,
    zIndex: 1024,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.4)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
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
  grow: {
    flexGrow: 1,
  },
})

/**
 * AppBar
 * @type {{classes: Object, setToggle: Function, toggle: Boolean}}
 */
AppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  setToggle: PropTypes.func.isRequired,
  toggle: PropTypes.bool.isRequired
}

function AppBar ({classes, toggle, setToggle}) {
  return (
    <Header className={classes.appBar}>
      {toggle || <Icon className={classes.trigger} onClick={setToggle} type={'menu-unfold'}/>}
      <div className={classes.grow}/>
      <a target="_blank" aria-label="Blog" rel="noopener noreferrer" href={'https://valleyease.me'}>
        <Icon className={classes.trigger} type={'link'}/>
      </a>
      <a target="_blank" aria-label="Github" rel="noopener noreferrer" href={'https://github.com/ValleyZw'}>
        <Icon className={classes.trigger} type={'github'}/>
      </a>
    </Header>
  )
}

export default withStyles(styles)(AppBar)