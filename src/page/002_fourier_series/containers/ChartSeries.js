import React from 'react'
import PropTypes from 'prop-types'
import math from 'mathjs'

import { TimeChart } from 'components'
import {fourier_series, fourier_array, fourier_element} from 'utils'

/**
 * ChartSeries
 * @type {{a0: Any, activeIndex: Number, an: Any, bn: Any, length: Number, range: Object, slider: Number}}
 */
ChartSeries.propTypes = {
  a0: PropTypes.any.isRequired,
  activeIndex: PropTypes.number.isRequired,
  an: PropTypes.any.isRequired,
  bn: PropTypes.any.isRequired,
  length: PropTypes.number.isRequired,
  range: PropTypes.object.isRequired,
  slider: PropTypes.number.isRequired
}

function ChartSeries ({slider, activeIndex, a0, an, bn, length, range}) {
  const series = fourier_series(a0, an, bn, length, slider, range)
  const element = math.flatten(fourier_element(a0, an, bn, length, activeIndex, range)).toArray()
  const data = fourier_array(series, element)
  return <TimeChart data={data}/>
}

export default ChartSeries