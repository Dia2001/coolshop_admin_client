import React, { useState, useContext, useEffect } from 'react'
import { CgDollar as Dollar, CgShoppingCart } from 'react-icons/cg'
import { HiCurrencyDollar as Currency } from 'react-icons/hi'
import CardStatistic from './CardStatistic'
import { BsArrowRightCircle as ArrowR } from 'react-icons/bs'
import { DashboardContext } from '../../../Providers/DashboardContext'
import { enPriceVnd } from '../../../utils'

const StatsList = () => {

  const [totalStatistics, setTotalStatistics] = useState([])
  const { statistics } = useContext(DashboardContext)

  useEffect(() => {
    setTotalStatistics(getTotalStatistics())
  }, [statistics])

  const getTotalStatistics = () => {
    return [
      {
        Icon: Dollar,
        title: 'Doanh thu',
        data: enPriceVnd(getTotalTurnover()) + ' Đ',
        Suffix: Currency,
        color: 'bg-Primary'
      },
      {
        Icon: CgShoppingCart,
        title: 'Đơn hàng',
        data: getTotalOrder() + ' đơn',
        Suffix: Currency,
      },
    ]
  }

  const getTotalTurnover = () => statistics.turnover.reduce((curr, item) =>
    curr + Number.parseInt(item)
    , 0)

  const getTotalOrder = () => statistics.order.reduce((curr, item) => curr + item, 0)

  return (
    <div className="flex gap-16 items-center">
      {totalStatistics.map((item, index) => (
        <CardStatistic key={index} item={item} />
      ))}
      <ArrowR className="cursor-pointer hover:opacity-75 hover:translate-x-[6px] transition" size={45} />
    </div>
  )
}

export default StatsList
