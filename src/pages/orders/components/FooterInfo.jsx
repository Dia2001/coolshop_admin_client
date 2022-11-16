import { useEffect, useState } from "react";
import OrderService from "../../../services/OrderService";
import { enPriceVnd } from "../../../utils";
import { orderStatus } from '../common'

const statusCancelOrder = [
  'created',
]

const FooterInfo = ({ order, orderStatusId, setOrderStatusId, handleChangeOrder }) => {
  const [optionsFilter, setOptionsFileter] = useState([])

  useEffect(() => {
    let options = []
    let flag = false
    for (let key in orderStatus) {
      if (key === orderStatusId) {
        flag = true
      }
      if (flag) {
        options.push({
          value: key,
          label: orderStatus[key]
        })
      }
    }
    setOptionsFileter(options)
  }, [])

  const handleUpdateOrder = async () => {
    let orderUpdate = order
    orderUpdate.orderStatusId = orderStatusId
    const result = await OrderService.updateOrder(orderUpdate)
    if (result.success) {
      alert('Cập nhật trạng thái thành công')
      handleChangeOrder()
    }
  }

  const handleConfirmOrder = async () => {
    let orderUpdate = order
    orderUpdate.orderStatusId = 'confirm'
    const result = await OrderService.updateOrder(orderUpdate)
    if (result.success) {
      alert('Cập nhật trạng thái thành công')
      handleChangeOrder()
    }
  }

  return (
    <div className="min-h-[120px] flex justify-between bg-white">
      <div className="flex justify-between p-2x w-[600px] min-h-[160px] m-2x border border-Black50 rounded-[3px] shadow-md">
        <div>
          <h6 className="font-semibold mb-1x">Ngày đặt hàng: {order.createDate}</h6>
          <h6 className="font-semibold mb-1x">Mã đơn hàng: {order.orderId}</h6>
          <h6 className="font-semibold mb-1x">Hình thức thanh toán: </h6>
        </div>
        <div className="basis-1/3 pl-4x rounded-[50px] shadow-sm bg-white">
          <h5 className="font-semibold">{order.nameShip}</h5>
          <h6 className="pt-1x">Địa chỉ: {order.addressShip}</h6>
          <h6 className="pt-2x">Điện thoại: {order.phoneShip}</h6>
        </div>
      </div>
      <div className=" m-2x ">
        <div className="flex justify-between text-right">
          {/* 
          <h6 className="my-1x">Tạm tính</h6>
          <h6 className="my-1x">Phí vận chuyển</h6>*/}
          <h6 className="my-1x mr-2 font-bold">Tổng tiền</h6>
          <h6 className="my-1x font-bold">{enPriceVnd(order.totalPrice)}đ</h6>
        </div>
        <div className="text-right flex">
          <div className="">
            Trạng thái
          </div>
          {/*
          <h6 className="my-1x">800.000đ</h6>
          <h6 className="my-1x">22.000đ</h6>*/}
          <div>
            <select
              value={orderStatusId}
              className="px-2 py-1 border border-Black25"
              onChange={(e) => setOrderStatusId(e.target.value)}
              name="sortby">
              {optionsFilter.map((item, index) => (
                <option key={index} value={item.value}>{item.label}</option>
              ))}
            </select>

            <button disabled={order.orderStatusId === orderStatusId}
              onClick={handleUpdateOrder}
              className={`w-fit py-1x px-2x bg-Primary mt-4 rounded-[3px] ${order.orderStatusId === orderStatusId ? ' opacity-70' : 'hover:opacity-70 '} shadow-md text-white`}>
              Cập nhật trạng thái
            </button>
            <br />
            {statusCancelOrder.includes(order.orderStatusId) ?
              <button onClick={handleConfirmOrder}
                className="w-fit py-1x px-2x bg-ActiveColor mt-4 rounded-[3px] hover:opacity-70 shadow-md text-white">
                Xác nhận đơn
              </button> : ''}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterInfo
