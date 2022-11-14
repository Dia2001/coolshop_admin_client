import React from 'react'
import ChartRevenue from './ChartRevenue'
import Notification from './Notification'

const ChartAndNotification = () => {
  return (
    <div className="flex gap-16 my-8">
        <ChartRevenue/>
        <Notification/>
    </div>
  )
}

export default ChartAndNotification