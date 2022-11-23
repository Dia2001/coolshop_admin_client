import React, { useContext, useEffect, useRef, useState } from 'react';
import Chart from 'react-apexcharts'
import ToggleButtonBar from '../../../components/Inputs/ToggleButtonBar';
import { DashboardContext } from '../../../Providers/DashboardContext';
import { getCurrentDate } from '../../../utils';

const ChartRevenue = () => {
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  const [type, setType] = useState('month')
  const [configChart, setConfigChart] = useState()
  const [startDate, setStartDate] = useState(getCurrentDate())
  const [endDate, setEndDate] = useState(getCurrentDate())
  const ref = useRef()

  const {
    statisticType,
    setStatisticType,
    listYearChoise,
    statisticChoise,
    setStatisticChoise,
    statistics,
    fetchStatistics } = useContext(DashboardContext)
  const optionChoise = [
    { name: 'Theo tháng', key: 'month' },
    { name: 'Chọn ngày', key: 'date' }
  ]

  useEffect(() => {
    setConfigChart(getConfigChart())
  }, [statistics, type, statisticType])

  const changeType = (type) => {
    if (type === 'month') {
      setStatisticChoise({
        month: (new Date()).getMonth() + 1,
        year: (new Date()).getFullYear()
      })

    } else {
      setStatisticChoise({
        startDate: getCurrentDate(),
        endDate: getCurrentDate()
      })
    }
    setStatisticType(type)
    setTimeout(() => {
      ref.current.click()
    })
  }

  const handleChangeMonth = (month) => {
    setStatisticChoise(prev => ({
      ...prev,
      month
    }))
  }

  const handleChangeYear = (year) => {
    setStatisticChoise(prev => ({
      ...prev,
      year
    }))
  }

  const handleChoseStartDate = (startDate) => {
    if (getTime(endDate) < getTime(startDate)) {
      alert('Ngày bắt đầu phải bé hơn ngày kết thúc')
      return
    }
    setStartDate(startDate)
    setStatisticChoise(prev => ({
      ...prev,
      startDate
    }))
  }

  const handleChoseEndDate = (endDate) => {
    if (getTime(endDate) < getTime(startDate)) {
      alert('Ngày kết thúc phải lớn hơn ngày bắt đầu')
      return
    }
    setEndDate(endDate)
    setStatisticChoise(prev => ({
      ...prev,
      endDate
    }))
  }

  const handleView = async () => {
    if (await fetchStatistics(statisticType)) {
      setType(statisticType)
    }
  }

  const getTime = (date) => {
    return (new Date(date)).getTime()
  }

  const getConfigChart = () => {
    let label = statistics.label
    if (statisticType === 'month') {
      label = statistics.label.map(item => (new Date(item)).getDate())
    }
    return {
      series: [{
        name: 'Doanh thu',
        type: 'line',
        data: statistics.turnover
      }, {
        name: 'Đơn hàng',
        type: 'line',
        data: statistics.order
      }],
      options: {
        chart: {
          height: 350,
          type: 'line',
        },
        stroke: {
          width: [4, 4],
        },
        title: {
          text: 'Doanh thu & Đơn đặt hàng'
        },
        dataLabels: {
          enabled: true,
          enabledOnSeries: []
        },
        labels: label,
        xaxis: {
          type: 'string'
        },
        yaxis: [{
          title: {
            text: 'Lợi nhuận',
          },

        }, {
          opposite: true,
          title: {
            text: 'đã bán'
          }
        }]
      },
    }
  }

  return (
    <div className="basis-2/3 min-h-[60vh] p-6 bg-MainBlue/50">

      {configChart ?
        <Chart options={configChart.options} series={configChart.series} type="line" height={350} />
        : ''}
      <ToggleButtonBar options={optionChoise} dispath={changeType} />
      <div className='mt-4 flex gap-6 items-center'>
        {type === 'month' ?
          <>
            <div className='flex gap-2'>
              <h6>Chọn tháng</h6>
              <select
                onChange={(e) => handleChangeMonth(e.target.value)}
                value={statisticChoise.month}>
                {months.map((item, index) =>
                  <option key={index} value={item}>{item}</option>
                )}
              </select>
            </div>
            <div className='flex gap-2'>
              <h6>Chọn năm</h6>
              <select
                className='px-2'
                onChange={(e) => handleChangeYear(e.target.value)}
                value={statisticChoise.year}>
                {listYearChoise.map((item, index) =>
                  <option key={index} value={item}>{item}</option>
                )}
              </select>
            </div>
          </>
          :
          <>
            <div className='flex gap-2'>
              <h6>Ngày bắt đầu</h6>
              <input type="date" min='2021-01-01'
                onChange={(e) => handleChoseStartDate(e.target.value)}
                value={startDate}
                max={getCurrentDate()} />
            </div>
            <div className='flex gap-2'>
              <h6>Ngày kết thúc</h6>
              <input type="date" min='2021-01-01'
                onChange={(e) => handleChoseEndDate(e.target.value)}
                value={endDate}
                max={getCurrentDate()} />
            </div>
          </>
        }
        <button onClick={handleView} ref={ref}
          className='bg-Primary px-4 py-1 rounded-lg hover:opacity-60'>Xem</button>
      </div>
    </div>
  )
}

export default ChartRevenue
