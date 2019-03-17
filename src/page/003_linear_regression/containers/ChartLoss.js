import React from 'react'
import { FreqChart } from 'components'


function ChartLost ({losses, activeIndex , setActiveIndex}) {
  const props = {data: losses, activeIndex , setActiveIndex}
  return <FreqChart {...props}/>
}

export default ChartLost