import React, { lazy, Suspense, useState } from 'react'
import { Row, Col } from 'antd'
import math from 'mathjs'

import { moduleLayout, useTitle, formulaLayout } from 'utils'
import { Paper, Expand, Loading } from 'components'

import { FormulaLinearRegression } from './containers'
const Charts = [lazy(() => import('./containers/ChartSeries')), lazy(() => import('./containers/ChartLoss'))]

const length = 50
const theta = [math.random(5), math.random(5)]
const x = math.multiply(math.random([length]), 10)
const y = math.add(math.multiply(2, x), -5, math.random([length]))
const x_fit =  math.range(0, 10, 10/1000)
const value = x.map((element,index)=>({x: element, y: y[index]}))

class LinearRegression {
  constructor(x,y, theta, iterations, learning_rate) {
    this._x = math.matrix([math.ones(x.length), x])
    this._y = y
    this._theta = theta
    this._iterations = iterations;
    this._learning_rate = learning_rate;
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

  loss(theta) {
    const error = math.add(math.multiply(math.transpose(this._x), theta), math.multiply(-1, this._y))
    return 0.5* math.multiply(math.transpose(error), error)
  }

  fit() {
    const losses = []
    const thetas = []
    thetas.push(this._theta)
    for (let i=0; i <this._iterations; i++){
      losses.push({name: i, data: this.loss(thetas[i])})
      const error = math.add(math.multiply(math.transpose(this._x), thetas[i]), math.multiply(-1, this._y))
      const theta_delta = math.multiply(this._x, error, this._learning_rate/this._y.length, -1)
      thetas.push(math.add(thetas[i], theta_delta).toArray())
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

  const y_fit = math.add(new_theta[0], math.multiply(new_theta[1], x_fit)).toArray()
  const fits = x_fit.toArray().map((element, index)=> ({x: element, y: y_fit[index]}))

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