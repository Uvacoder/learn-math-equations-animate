import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import { Collapse, Slider } from 'antd'

const {Panel} = Collapse

const styles = theme => ({
  expand: {
    backgroundColor: theme.palette.primary,
    marginBottom: theme.spacing.unit,
  },
})

/**
 *
 * @type {{classes: Object, defaultValue: Number, max: Number, onChange: Function}}
 */
Expand.propTypes = {
  classes: PropTypes.object.isRequired,
  defaultValue: PropTypes.number.isRequired,
  max: PropTypes.number,
  onChange: PropTypes.func.isRequired
}

function Expand ({classes, onChange, defaultValue, max = 100}) {
  return (
    <Collapse bordered={false}>
      <Panel style={{border: 0}} className={classes.expand}>
        <Slider defaultValue={defaultValue} max={max} onChange={onChange}/>
      </Panel>
    </Collapse>
  )
}

export default withStyles(styles)(Expand)