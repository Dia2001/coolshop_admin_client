import React from 'react'
import ElementOfPie from './ElementOfPie';

const PieChart = () => {
  const data=[
    {
      title:'Đơn đặt hàng',
      options:{labels:["Đang chờ xử lý","Chờ thanh toán","Đang vận chuyển","Đã giao thành công","Giao không thành công","Đã hủy"],},
      series:[4,5,6,1,5,6]

    },
    {
      title:'Phân loại sản phẩm',
      options:{labels:["Đồ nam","Đồ nữ","Quý ông"]},
      series:[31,43,21]
    },
    {
      title:'Phản hồi của khách hàng',
      options:{labels:["Rất tốt","Hài lòng","Trung bình","Không tốt","Kém chất lượng"]},
      series:[4,6,5,3,2]
    },

  ];
  return (
    <div className="flex justify-center gap-12">
        {data.map((item,index)=>(
          <ElementOfPie key={index} item={item}/>
        ))}
    </div>
  )
}

export default PieChart