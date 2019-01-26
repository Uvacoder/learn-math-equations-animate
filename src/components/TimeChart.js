import React from 'react'
import PropTypes from 'prop-types'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts'

/**
 * TimeChart
 * @type {{data: Array, domain: Array}}
 */
TimeChart.propTypes = {
  data: PropTypes.array.isRequired,
  domain: PropTypes.array
}

function TimeChart ({data, domain}) {
  return (
    <ResponsiveContainer>
      <LineChart data={data} style={{margin: '10px 30px 5px -30px'}}>
        <CartesianGrid strokeDasharray="5 5" stroke="rgba(105,105,105, 0.5)"/>
        <XAxis dataKey="name" type="number" stroke="rgba(105,105,105, 0.8)"/>
        {domain
          ? <YAxis stroke="rgba(105,105,105, 0.8)" type="number" allowDataOverflow={true} domain={domain}/>
          : <YAxis stroke="rgba(105,105,105, 0.8)"/>}
        <Line type="monotone" dot={false} dataKey="data" stroke="rgba(128,128,128, 0.85)"/>
        <Line type="monotone" strokeDasharray="5 5" dot={false} dataKey="element" stroke="rgba(200,200,200,0.75)"/>
      </LineChart>
    </ResponsiveContainer>
  )
}

export default TimeChart