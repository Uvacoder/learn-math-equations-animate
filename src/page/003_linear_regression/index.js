import React, { lazy, Suspense, useState } from 'react'
import { Row, Col } from 'antd'
import math from 'mathjs'

import { moduleLayout, useTitle, formulaLayout } from 'utils'
import { Paper, Expand, Loading } from 'components'

import { FormulaLinearRegression } from './containers'
const Charts = [lazy(() => import('./containers/ChartSeries')), lazy(() => import('./containers/ChartLoss'))]

const length = 50
const theta = math.random([2], 5)

const x = math.multiply(math.random([length]), 10)
const y = math.add(math.multiply(2, x), -5, math.random([length]))
const x_fit = [0, 10]
const value = x.map((element,index)=>({x: element, y: y[index]}))

class LinearRegression {
  constructor(x,y, theta, iterations, learning_rate) {
    this._x = math.matrix([math.ones(x.length), x])
    this._y = y
    this._theta = theta
    this._iterations = iterations;
    this._learning_rate = learning_rate;
    this.output = math.zeros(math.size(y))
  }

  set thetas(thetas){
    this._thetas = thetas
  }

  get thetas(){
    return this._thetas
  }

  set losses(losses){
    this._losses = losses
  }

  get losses(){
    return this._losses
  }

  get new_theta(){
    return this.thetas.pop()
  }

  loss() {
    const diff = math.subtract(this.output, this._y)
    return math.multiply(0.5/this._y.length, math.multiply(math.transpose(diff), diff))
  }

  feedforward() {
    this.output = math.multiply(math.transpose(this._theta), this._x)
  }

  backprop(){
    const delta_weights = math.multiply(1/this._y.length, math.multiply(this._x, math.subtract(this.output, this._y)))
    this._theta = math.subtract(this._theta, math.multiply(this._learning_rate, delta_weights))
  }

  fit() {
    const losses = []
    const thetas = []
    thetas.push(this._theta)
    for (let i=0; i <this._iterations; i++){
      losses.push({name: i, data: this.loss()})
      this.feedforward()
      this.backprop()
      thetas.push(this._theta.toArray())
    }
    this.thetas = thetas;
    this.losses = losses;
  }
}

function Linear () {
  useTitle('Linear Regression | Valley');
  const [sliderLinear, setSliderLinear] = useState(1)
  const onSliderLinearChange = value => setSliderLinear(value)

  const linear_regression = new LinearRegression(x, y, theta, sliderLinear, 0.01)
  linear_regression.fit()
  const {losses, new_theta} = linear_regression

  const y_fit = math.add(new_theta[0], math.multiply(new_theta[1], x_fit))
  const fits = x_fit.map((element, index)=> ({x: element, y: y_fit[index]}))

  const series = [
    {
      name: "Series 1",
      data: value
    },
    {
      name: "Series 2",
      data: fits
    },
  ]

  const seriesProps={
    series,
    losses,
    activeIndex: 0,
    setActiveIndex: {},
  }

  return (
    <>
      <Expand defaultValue={1} max = {1000} onChange={onSliderLinearChange}/>
      <Row gutter={24}>
        {Charts.map((Chart, index) =>
          <Col key={index} span={8} {...moduleLayout}>
            <Paper>
              <Suspense fallback={<Loading/>}>
                <Chart {...seriesProps}/>
              </Suspense>
            </Paper>
          </Col>
        )}

        <Col span={8} {...formulaLayout}>
          <Paper style={{overflow: 'auto', padding: '4px'}}>
            <FormulaLinearRegression/>
          </Paper>
        </Col>
      </Row>
    </>
  )
}

export default Linear