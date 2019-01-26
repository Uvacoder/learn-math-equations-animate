import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import { Collapse, Slider, Row, Col } from 'antd'

import {moduleLayout} from 'utils'

const {Panel} = Collapse

const styles = theme => ({
  expand: {
    backgroundColor: theme.palette.primary,
    marginBottom: theme.spacing.unit,
  },
})

/**
 * MultiExpand
 * @type {{classes: Object, defaultValue1: Number, defaultValue2: Number, onChange1: Function, onChange2: Function}}
 */
MultiExpand.propTypes = {
  classes: PropTypes.object.isRequired,
  defaultValue1: PropTypes.number,
  defaultValue2: PropTypes.number,
  onChange1: PropTypes.func.isRequired,
  onChange2: PropTypes.func.isRequired
}

function MultiExpand ({classes, onChange1, onChange2, defaultValue1=0, defaultValue2=0}) {
  return (
    <Collapse bordered={false}>
      <Panel style={{border: 0}} className={classes.expand}>
        <Row gutter={8}>
          <Col span={8} {...moduleLayout}>
            <Slider defaultValue={defaultValue1} onChange={onChange1}/>
          </Col>
          <Col span={8} {...moduleLayout}>
            <Slider defaultValue={defaultValue2} onChange={onChange2}/>
          </Col>
        </Row>
      </Panel>
    </Collapse>
  )
}

export default withStyles(styles)(MultiExpand)