import React  from 'react'
import PropTypes from 'prop-types'
import math from 'mathjs'

import { TimeChart } from 'components'
import {taylor_array , array_pow} from 'utils'

/**
 * ChartSin
 * @type {{length: Number, range: Object, slider: Number}}
 */
ChartSin.propTypes = {
  length: PropTypes.number.isRequired,
  range: PropTypes.object.isRequired,
  slider: PropTypes.number.isRequired
}

function ChartSin ({length, range, slider}) {
  const SIN = math.sin(range)
  let SIN_SERIES = math.zeros(length)

  math.range(0, slider + 1).forEach(i => {
    SIN_SERIES = math.add(SIN_SERIES, math.dotDivide(math.multiply((-1) ** (i), array_pow(range, 2 * i + 1)), math.factorial(2 * i + 1)))
  })

  const _sin = taylor_array(SIN, math.flatten(SIN_SERIES).toArray())

  return <TimeChart data={_sin} domain={[-4,4]}/>
}

export default ChartSin