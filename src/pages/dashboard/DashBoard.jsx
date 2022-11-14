import React from 'react'
import Orders from '../orders'
import ChartAndNotification from './components/ChartAndNotification'
import PieChart from './components/PieChart'
import StatsList from './components/StatsList'

const DashBoard = () => {
  document.title = 'Dashboard'
  return (
    <div className="w-[1240px] mx-auto my-8">
      <StatsList />
      <ChartAndNotification />
      <PieChart />
    </div>
  )
}

export default DashBoard
