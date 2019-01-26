import React, { lazy, Suspense, useState } from 'react'
import { Row, Col } from 'antd'
import math from 'mathjs'

import { FormulaSaw, FormulaSquare } from './containers'
import { useIndex, moduleLayout, formulaLayout, useTitle } from 'utils'
import { Paper, Expand, MultiExpand, Loading } from 'components'

const Charts = [lazy(() => import('./containers/ChartSeries')), lazy(() => import('./containers/ChartCoeff'))]

const amplitude = 2
const length = 1000
const period = 2 * Math.PI
const range = math.range(0, 5 * Math.PI, 5 * Math.PI / length)
const range_RELU = math.range(-Math.PI, Math.PI, 2 * Math.PI / length)

// saw
const a0_saw = 0
const an_saw = 0
const bn_saw = n => {
  const w_n = 2 * Math.PI * n / period
  return -(4 * amplitude) / (w_n * period ** 2) * (period * Math.cos(w_n * period * 0.5) - 2 / w_n * Math.sin(w_n * period * 0.5))
}

// delta
const a0_delta = Tp => math.multiply(Tp / period * amplitude, math.ones(length))
const an_delta = Tp => n => {
  const w_n = 2 * Math.PI * n / period
  return (4 * amplitude) / (w_n * period) * Math.sin(w_n * Tp * 0.5)
}
const bn_delta = 0

// RELU
const a0_RELU = math.multiply(0.25 * Math.PI, math.ones(length))
const an_RELU = n => n % 2 === 0 ? 0 : (-2) / (n ** 2 * Math.PI)
const bn_RELU = n => (-1) ** (n + 1) / n

function Home () {
  useTitle('Fourier Series | Valley');
  // Saw
  const [sliderSaw, setSliderSaw] = useState(0)
  const [activeIndexSaw, setActiveIndexSaw] = useIndex(0)
  const onSilderSawChange = value => setSliderSaw(value)
  const sawProps = {
    slider: sliderSaw,
    activeIndex: activeIndexSaw,
    setActiveIndex: setActiveIndexSaw,
    a0: a0_saw,
    an: an_saw,
    bn: bn_saw,
    length,
    range
  }

  // Delta
  const [sliderDelta, setSliderDelta] = useState(0)
  const [sliderTp, setSliderTp] = useState(1)
  const [activeIndexDelta, setActiveIndexDelta] = useIndex()
  const Tp = Math.PI / sliderTp
  const onSliderTpChange = value => setSliderTp(value)
  const onSliderDeltaChange = value => setSliderDelta(value)
  const deltaProps = {
    slider: sliderDelta,
    activeIndex: activeIndexDelta,
    setActiveIndex: setActiveIndexDelta,
    a0: a0_delta(Tp),
    an: an_delta(Tp),
    bn: bn_delta,
    length,
    range
  }

  // RELU
  const [sliderRELU, setSliderRELU] = useState(0)
  const [activeIndexRELU, setActiveIndexRELU] = useIndex(0)
  const onSliderRELUChange = value => setSliderRELU(value)
  const reluProps = {
    slider: sliderRELU,
    activeIndex: activeIndexRELU,
    setActiveIndex: setActiveIndexRELU,
    a0: a0_RELU,
    an: an_RELU,
    bn: bn_RELU,
    length,
    range: range_RELU
  }

  return (
    <>
      <Expand defaultValue={0} onChange={onSilderSawChange}/>
      <Row gutter={24}>
        {Charts.map((Chart, index) =>
          <Col key={index} span={8} {...moduleLayout}>
            <Paper>
              <Suspense fallback={<Loading/>}>
                <Chart {...sawProps}/>
              </Suspense>
            </Paper>
          </Col>
        )}
        <Col span={8} {...formulaLayout}>
          <Paper style={{overflow: 'auto', padding: '4px'}}>
            <FormulaSaw/>
          </Paper>
        </Col>
      </Row>

      <MultiExpand onChange1={onSliderDeltaChange} onChange2={onSliderTpChange} defaultValue2={1}/>
      <Row gutter={24}>
        {Charts.map((Chart, index) =>
          <Col key={index} span={8} {...moduleLayout}>
            <Paper>
              <Suspense fallback={<Loading/>}>
                <Chart {...deltaProps}/>
              </Suspense>
            </Paper>
          </Col>
        )}
        <Col span={8} {...formulaLayout}>
          <Paper style={{overflow: 'auto', padding: '4px'}}>
            <FormulaSquare/>
          </Paper>
        </Col>
      </Row>

      <Expand defaultValue={0} onChange={onSliderRELUChange}/>
      <Row gutter={24}>
        {Charts.map((Chart, index) =>
          <Col key={index} span={8} {...moduleLayout}>
            <Paper>
              <Suspense fallback={<Loading/>}>
                <Chart {...reluProps}/>
              </Suspense>
            </Paper>
          </Col>
        )}
        <Col span={8} {...formulaLayout}>
          <Paper style={{overflow: 'auto', padding: '4px'}}>

          </Paper>
        </Col>
      </Row>
    </>
  )
}

export default Home