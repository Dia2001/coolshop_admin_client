import { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../../Providers/ProductContext'
import OrderService from '../../services/OrderService'
import { enPriceVnd } from '../../utils'
import { Link } from 'react-router-dom'
import config from '../../config'
import OrderDetail from './OrderDetail'

const orderHeaderConfig = [
  {
    key: 'orderId',
    value: 'Mã đơn hàng',
    visible: true,
    scale: 3
  },
  {
    key: 'nameShip',
    value: 'Tên khách hàng',
    visible: true,
    scale: 3,
  },
  {
    key: 'phoneShip',
    value: 'Số điện thoại',
    visible: true,
    scale: 3,
  },
  {
    key: 'addressShip',
    value: 'Địa chỉ giao hàng',
    visible: true,
    scale: 3,
  },
  {
    key: 'price',
    value: 'Tổng giá trị đơn hàng',
    visible: true,
    scale: 3,
  },
  {
    key: 'orderStatusId',
    value: 'Trạng thái',
    visible: true,
    scale: 3,
  },
  {
    key: 'detail',
    value: 'Chi tiết',
    visible: true,
    scale: 3
  }
]

const orderStatus = {
  created: "Chờ xác nhận",
  confirm: "Đã xác nhận đơn hàng",
  waitForPay: "Chờ thanh toán",
  deliveredToTransporter: 'Đã giao hàng cho đơn vị vận chuyển',
  shipping: "Đang vận chuyển",
  delivered: "Đã giao hàng",
  cancelled: "Đã hủy"
}

const colorStatus = {
  created: "#ffff00",
  confirm: "#40ff2b",
  waitForPay: "#55007f",
  deliveredToTransporter: '#555500',
  shipping: "#0000ff",
  delivered: "#005500",
  cancelled: "#d00101"
}

function Orders() {
  const { ischange, brands, categories, colors, sizes } = useContext(ProductContext)
  const [orders, setOrders] = useState([])
  const [typeShow, setTypeShow] = useState()
  const optionDefault = { "value": "default", "label": "Tất cả các đơn" }
  const [ordersShow, setOrdersShow] = useState(orders)
  const [isShowDetail, setIsShowDetail] = useState(false)
  const [orderShow, setOrderShow] = useState({})
  const [optionsFilter, setOptionsFileter] = useState([
    optionDefault
  ])

  useEffect(() => {
    let ordersTmp = []

    if (typeShow === 'default') {
      ordersTmp = orders
    } else {
      ordersTmp = orders.filter(order => order.orderStatusId === typeShow)
    }
    setOrdersShow(ordersTmp)
  }, [typeShow, orders])


  useEffect(() => {
    let options = []
    options.push(optionDefault)
    for (let key in orderStatus) {
      options.push({
        value: key,
        label: orderStatus[key]
      })
    }
    setOptionsFileter(options)
  }, [])

  useEffect(() => {
    fetchApiOrder()
  }, [ischange, brands])

  useEffect(() => {
    setOrdersShow(orders)
  }, [orders])

  const fetchApiOrder = async () => {
    const result = await OrderService.getAll()

    if (result.success) {
      setOrders(result.data)
    }
  }

  const showDetail = (status, order) => {
    setIsShowDetail(status)
    setOrderShow(order)
  }

  const closeDetail = () => {
    setIsShowDetail(false)
    setOrdersShow({})
  }

  return (
    <div className='p-2'>
      <div className='flex flex-wrap justify-between items-center'>
        <h5>Đơn hàng {`: ${isShowDetail ? orderShow.orderId : ''}`}</h5>

        {isShowDetail ? '' :
          <div className='flex flex-wrap items-center'>
            <h6 className="font-bold mr-2">Sắp xếp theo: </h6>
            <select
              value={typeShow}
              className="px-2 py-1 border border-Black25"
              onChange={(e) => setTypeShow(e.target.value)}
              name="sortby">
              {optionsFilter.map((item, index) => (
                <option key={index} value={item.value}>{item.label}</option>
              ))}
            </select>
          </div>
        }
      </div>
      {isShowDetail ?
        <OrderDetail orders={ordersShow} back={closeDetail} />
        :
        <div>
          <table className="w-full border">
            <thead className="table-header-group">
              <tr className="bg-blue-200">
                {orderHeaderConfig.map((item, index) => {
                  return (
                    <th key={index}>{item.value}</th>
                  )
                })}
              </tr>
            </thead>
            <tbody>
              {ordersShow.map((order, index) => {
                return (
                  <tr key={index}>
                    {orderHeaderConfig.map((item, indexConfig) => {
                      if (item.key === 'orderStatusId') {
                        const orderKey = order[item.key]
                        return (
                          <td key={indexConfig}>
                            <span style={{ backgroundColor: colorStatus[orderKey] }}
                              className={`px-1 rounded-lg text-[${colorStatus[orderKey]}]`}>
                              {orderStatus[orderKey]}
                            </span>
                          </td>
                        )
                      }

                      if (item.key === 'price') {
                        const price = order.orderDetail.reduce((curr, item) =>
                          curr + item.price * item.quantity
                          , 0)
                        return (
                          <td key={indexConfig}>{enPriceVnd(price) + ' đ'}</td>
                        )
                      }

                      if (item.key === 'detail') {
                        return (
                          <td key={indexConfig}>
                            <div className='cursor-pointer bg-Primary py-1 px-2 rounded-full hover:opacity-70'
                              onClick={() => showDetail(true, order)}>
                              Xem
                            </div>
                          </td>
                        )
                      }

                      return (
                        <td key={indexConfig}>
                          {order[item.key]}
                        </td>
                      )
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      }
    </div>
  )
}

export default Orders
