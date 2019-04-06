import React, { lazy, Suspense, useState } from 'react'
import { Row, Col } from 'antd'
import math from 'mathjs'

import { moduleLayout, useTitle, formulaLayout, generate_random_data_sample } from 'utils'
import { Paper, Expand, Loading } from 'components'

import { FormulaLogisticRegression } from './containers'
const Charts = [lazy(() => import('./containers/ChartSeries')), lazy(() => import('./containers/ChartLoss'))]

const sample_size = 64
const {x, y} = generate_random_data_sample(sample_size)

// draw decision boundary
const x_values = [0.5, 14.5]
const theta = math.random([3,1], -5, 5)

const value1 = []
const value2 = []
x.forEach((element,index)=>{
  if(Boolean(y[index][0])){
    value1.push({x: element[0], y: element[1]})
  }else{
    value2.push({x: element[0], y: element[1]})
  }
})

class LogisticRegression {
  constructor(x, y, theta, iterations, learning_rate) {
    this._x = math.subset(math.concat(math.ones(math.size(x)), x), math.index(math.range(0, math.size(x)[0]), math.range(1, math.size(x)[1]+2)))
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
    const fir = math.multiply(math.transpose(this._y), this.output)
    const sec = math.multiply(math.transpose(math.add(1, math.multiply(-1, this._y))), math.log(math.add(1.0000000001, math.multiply(-1, this.output))))
    return math.multiply(-1/this._y.length, math.add(fir, sec))[0][0]
  }

  _sigmoid(x) {
    return math.dotDivide(1, math.add(1, math.exp(math.multiply(-1, x))))
  }

  feedforward() {
    this.output = this._sigmoid(math.multiply(this._x, this._theta))
  }

  backprop(){
    const delta_weights = math.chain(math.transpose(this._x)).multiply(math.subtract(this.output, this._y)).divide(this._y.length).done()
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
      thetas.push(this._theta)
    }
    this.thetas = thetas;
    this.losses = losses;
  }
}

function Logistic () {
  useTitle('Logistic Regression | Valley');
  const [sliderLogistic, setSliderLogistic] = useState(1)
  const onSliderLogisticChange = value => setSliderLogistic(value)

  const logistic_regression = new LogisticRegression(x, y, theta, sliderLogistic, 0.05)
  logistic_regression.fit()
  const {losses, new_theta} = logistic_regression
  const fits = x_values.map((element, index)=> ({x: element, y: -(new_theta[0][0] + new_theta[1][0]*element)/new_theta[2][0]}))


  const series = [
    {
      name: "Series 1",
      data: value1
    },
    {
      name: "Series 2",
      data: value2
    },
    {
      name: "Series 3",
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
      <Expand defaultValue={1} max = {1000} onChange={onSliderLogisticChange}/>
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
            <FormulaLogisticRegression/>
          </Paper>
        </Col>
      </Row>
    </>
  )
}

export default Logistic