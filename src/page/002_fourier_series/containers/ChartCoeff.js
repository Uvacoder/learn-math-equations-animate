import React from 'react'
import PropTypes from 'prop-types'

import { FreqChart } from 'components'
import {fourier_coefficient} from 'utils'

/**
 * ChartCoeff
 * @type {{a0: Any, activeIndex: Number, an: Any, bn: Any, setActiveIndex: Object, slider: Number}}
 */
ChartCoeff.propTypes = {
  a0: PropTypes.any.isRequired,
  activeIndex: PropTypes.number.isRequired,
  an: PropTypes.any.isRequired,
  bn: PropTypes.any.isRequired,
  setActiveIndex: PropTypes.object.isRequired,
  slider: PropTypes.number.isRequired
}

function ChartCoeff ({slider, activeIndex, setActiveIndex, a0, an, bn}) {
  const data = fourier_coefficient(a0, an, bn, slider)
  const props = {data, activeIndex, setActiveIndex}
  return <FreqChart {...props}/>
}

export default ChartCoeff