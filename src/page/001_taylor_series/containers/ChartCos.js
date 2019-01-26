import React  from 'react'
import PropTypes from 'prop-types'
import math from 'mathjs'

import { TimeChart } from 'components'
import {taylor_array , array_pow} from 'utils'

/**
 * ChartCos
 * @type {{length: Number, range: Object, slider: Number}}
 */
ChartCos.propTypes = {
  length: PropTypes.number.isRequired,
  range: PropTypes.object.isRequired,
  slider: PropTypes.number.isRequired
}

function ChartCos ({length, range, slider}) {
  const COS = math.cos(range)
  let COS_SERIES = math.zeros(length)

  math.range(0, slider + 1).forEach(i => {
    COS_SERIES = math.add(COS_SERIES, math.dotDivide(math.multiply((-1) ** (i), array_pow(range, 2 * i)), math.factorial(2 * i)))
  })

  const _cos = taylor_array(COS, math.flatten(COS_SERIES).toArray())

  return <TimeChart data={_cos} domain={[-4,4]}/>
}

export default ChartCos