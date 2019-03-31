import PropTypes from 'prop-types'
import React from 'react'
import { ResponsiveContainer, ComposedChart, Scatter, Line, XAxis, YAxis, CartesianGrid } from 'recharts';

/**
 * ChartSeries
 * @type {{series: any}}
 */
ChartSeries.propTypes = {
  series: PropTypes.array.isRequired
}

function ChartSeries ({series}) {
  return <ResponsiveContainer>
    <ComposedChart
      style={{margin: '10px 30px 5px -30px'}}
    >
      <CartesianGrid strokeDasharray="5 5" stroke="rgba(105,105,105, 0.5)"/>
      <XAxis type="number" dataKey="x" name="stature" domain={[-1, 11]}/>
      <YAxis type="number" dataKey="y" name="weight" />
      <Scatter name="A school" data={series[0].data} fill="rgba(128,128,128, 0.85)" />
      <Line data={series[1].data} dot={false} dataKey="y" stroke="rgba(200,200,200,0.75)"/>
    </ComposedChart>
  </ResponsiveContainer>
}

export default ChartSeries