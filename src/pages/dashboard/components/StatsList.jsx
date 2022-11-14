import React from 'react'
import {CgDollar as Dollar} from 'react-icons/cg'
import {HiCurrencyDollar as Currency} from 'react-icons/hi'
import CardStatistic from './CardStatistic'
import {BsArrowRightCircle as ArrowR} from 'react-icons/bs'
const StatsList = () => {
    const Statistics=[
        {
            Icon:Dollar,
            title:'Doanh thu',
            data:15000000,
            Suffix:Currency,
            color:'bg-Primary'
        },
        {
            Icon:Dollar,
            title:'Doanh thu',
            data:15000000,
            Suffix:Currency,
            // you can define color in here or using default bg color
        },
        {
            Icon:Dollar,
            title:'Doanh thu',
            data:15000000,
            Suffix:Currency,
            
        },
    ]
  return (
    <div className="flex gap-16 items-center">
        {Statistics.map((item,index)=>(
            <CardStatistic key={index} item={item}/>
        ))}
        <ArrowR className="cursor-pointer hover:opacity-75 hover:translate-x-[6px] transition" size={45}/>
    </div>
  )
}

export default StatsList