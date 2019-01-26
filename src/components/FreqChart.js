import React from 'react'
import PropTypes from 'prop-types'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Cell } from 'recharts'

/**
 * FreqChart
 * @type {{activeIndex: Number, data: Array, setActiveIndex: Object}}
 */
FreqChart.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired,
  setActiveIndex: PropTypes.object.isRequired
}

function FreqChart ({data, activeIndex, setActiveIndex}) {
  return (
    <ResponsiveContainer>
      <BarChart data={data} style={{margin: '10px 30px 5px -30px'}}>
        <CartesianGrid strokeDasharray="5 5" stroke="rgba(105,105,105, 0.5)"/>
        <XAxis dataKey="name" stroke="rgba(105,105,105, 0.8)"/>
        <YAxis stroke="rgba(105,105,105, 0.8)"/>
        <Bar dataKey="data" {...setActiveIndex}>
          {data.map((entry, index) =>
            <Cell cursor="pointer"
                  fill={index === activeIndex ? 'rgba(200,200,200,0.75)' : 'rgba(128,128,128, 0.85)'}
                  key={`cell-${index}`}/>
          )}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}

export default FreqChart

