import React from 'react';
import Chart from 'react-apexcharts'
const ChartRevenue = () => {
  const RevenueAndAmount={
          
    series: [{
      name: 'Lợi nhuận',
      type: 'line',
      data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
    }, {
      name: 'Số lượng sản phẩm bán ra',
      type: 'line',
      data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
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
        text: 'Lợi nhuận & Số lượng đã bán'
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: []
      },
      labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
      xaxis: {
        type: 'datetime'
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
  
  };

  return (
    <div className="basis-2/3 h-[60vh] p-6 bg-MainBlue/50">
        <Chart options={RevenueAndAmount.options} series={RevenueAndAmount.series} type="line" height={350} />
        <div>
        <input type="radio" name="drone" value="chooseDisplay" checked/>
        <label for="chooseDisplay">Theo năm:</label>
        
        <br/>
        <input type="radio" name="drone" value="chooseDisplay" checked/>
        <label for="chooseDisplay">Theo Tháng:</label>
        </div>
    </div>
  )
}

export default ChartRevenue