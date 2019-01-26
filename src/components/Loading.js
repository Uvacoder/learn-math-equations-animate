import React from 'react'
import PropTypes from 'prop-types'
import { Spin, Icon } from 'antd';
import withStyles from 'react-jss'

const styles = theme => ({
  container: {
    paddingTop: 100,
    textAlign: 'center'
  },
  progress: {
    margin: theme.spacing.unit * 2,
    color: '#fbfbfb',
  },
})

/**
 * Loading
 * @type {{classes: Object}}
 */
Loading.propTypes = {
  classes: PropTypes.object.isRequired
}

function Loading({classes}){
  const antIcon = <Icon type="loading" style={{fontSize: 64}} className={classes.progress} spin />;

  return (
    <div className={classes.container}>
      <Spin size="large" indicator={antIcon}/>
    </div>
  )
}

export default withStyles(styles)(Loading)

