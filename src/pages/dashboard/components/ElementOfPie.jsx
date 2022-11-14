import React from 'react'
import Chart from 'react-apexcharts'
const ElementOfPie = ({item}) => {

  return (
    <div className=" p-4 rounded-md shadow-sm bg-MainBlue min-h-[220px] min-w-[260px]">
        <h6 className="font-semibold">{item.title}</h6>
        <Chart options={item.options} series={item.series} type="pie" className="min-w-[340px]"/>
    </div>
  )
}

export default ElementOfPie