import React, { useState, lazy, Suspense } from 'react'
import { Row, Col } from 'antd'
import math from 'mathjs'

import { Paper, Expand, Loading } from 'components'
import { moduleLayout, formulaLayout, useTitle } from 'utils'
import { Formula } from './containers'

const Charts = [lazy(() => import('./containers/ChartSin')), lazy(() => import('./containers/ChartCos'))]

const length = 1000
const range = math.range(-8 * Math.PI, 8 * Math.PI, 16 * Math.PI / length)

function Taylor () {
  const [slider, setSlider] = useState(0)
  const onSliderChange = value => setSlider(value)
  useTitle('Taylor Series | Valley');

  return (
    <>
      <Expand defaultValue={0} max={40} onChange={onSliderChange}/>

      <Row gutter={24}>
        {Charts.map((Chart, index) =>
          <Col key={index} span={8} {...moduleLayout}>
            <Paper>
              <Suspense fallback={<Loading/>}>
                <Chart {...{length, range, slider}}/>
              </Suspense>
            </Paper>
          </Col>
        )}

        <Col span={8} {...formulaLayout}>
          <Paper style={{overflow: 'auto', padding: '4px'}}>
            <Formula/>
          </Paper>
        </Col>
      </Row>
    </>
  )
}

export default Taylor