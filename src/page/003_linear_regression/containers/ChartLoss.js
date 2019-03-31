import PropTypes from 'prop-types'
import React from 'react'
import { FreqChart } from 'components'

/**
 * ChartLoss
 * @type {{activeIndex: number, setActiveIndex: object, losses: any}}
 */
ChartLoss.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  losses: PropTypes.array.isRequired,
  setActiveIndex: PropTypes.object.isRequired
}

function ChartLoss ({losses, activeIndex , setActiveIndex}) {
  const props = {data: losses, activeIndex , setActiveIndex}
  return <FreqChart {...props}/>
}

export default ChartLoss