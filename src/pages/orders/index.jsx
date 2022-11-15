import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../../Providers/ProductContext'
import OrderService from '../../services/OrderService'
import { enPriceVnd } from '../../utils'
import OrderDetail from './OrderDetail'
import Paginate from '../../components/Paginate'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import config from '../../config'
import { colorStatus, orderStatus, orderHeaderConfig } from './common'

const pageSize = 15

function Orders() {
  const { ischange, brands, categories, colors, sizes, findColorById, findSizeById } = useContext(ProductContext)
  const [orders, setOrders] = useState([])
  const [typeShow, setTypeShow] = useState()
  const optionDefault = { "value": "default", "label": "Tất cả các đơn" }
  const [ordersShow, setOrdersShow] = useState(orders)
  const [isShowDetail, setIsShowDetail] = useState(false)
  const [orderShow, setOrderShow] = useState({})
  const [totalPage, setTotalPage] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)
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
    handlePaging(1, ordersTmp)
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
    let i = orders.length - (orders.length % pageSize)
    let totalPageTmp = orders.length % pageSize === 0 ? (i / pageSize) : (i / pageSize + 1);
    setTotalPage(totalPageTmp)
    handlePaging(1, orders)
  }, [orders])

  const fetchApiOrder = async () => {
    const result = await OrderService.getAll()

    if (result.success) {
      setOrders(result.data)
    }
  }

  const showDetail = (status, order) => {
    setIsShowDetail(status)
    let totalPrice = 0

    const orderTmp = {
      ...order,
      status: orderStatus[order.orderStatusId],
      date: order.createDate,
      orderDetail: order.orderDetail.map((item) => {
        let size = findSizeById(item.sizeId)
        let color = findColorById(item.colorId)
        let description = `Màu: ${color ? color.name : ''} , Size: ${size ? size.name : ''}`
        totalPrice += item.price * item.quantity

        return {
          ...item,
          name: item.productName,
          description: description,
          amount: item.quantity,
          img: config.urlImageProduct + item.productImage,
        }
      })
    }
    orderTmp.totalPrice = totalPrice

    setOrderShow(orderTmp)
  }

  const closeDetail = () => {
    setIsShowDetail(false)
    setOrderShow({})
  }

  const handleClickCopy = () => {
    navigator.clipboard.writeText(orderShow.orderId)
  }

  const handlePaging = (page, array) => {
    let p = (page - 1) * pageSize
    let count = 0
    let ordersTmp = []
    for (p; p < array.length; p++) {
      if (count < pageSize) {
        ordersTmp.push(array[p])
        count++
      }
    }
    setCurrentPage(page)
    setOrdersShow(ordersTmp)
  }

  const handleChangeOrder = () => {
    fetchApiOrder()
  }

  return (
    <div className='p-2'>
      <div className='flex mb-4 flex-wrap justify-between items-center'>
        {isShowDetail ?
          <div className='flex'>
            <h5>Mã đơn hàng : {orderShow.orderId}</h5>
            <button onClick={handleClickCopy}
              className="rounded-full border px-2 py-1 ml-4 hover:bg-gray-100">
              Copy
            </button>
          </div>
          :
          <h5>Đơn hàng</h5>
        }

        {isShowDetail ?
          <button onClick={closeDetail}
            className="bg-DarkBlue text-center rounded-full">
            <h6 className="px-2 py-1  text-white font-bold">Quay lại</h6>
          </button> :
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
        <OrderDetail order={orderShow} back={closeDetail} handleChangeOrder={handleChangeOrder} />
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
                      if (item.key === 'orderId') {
                        return (
                          <td key={indexConfig}>
                            <Tippy content="Nhấn để copy">
                              <span onClick={() => navigator.clipboard.writeText(order[item.key])}
                                className='cursor-pointer'>
                                {order[item.key]}
                              </span>
                            </Tippy>
                          </td>
                        )
                      }

                      if (item.key === 'orderStatusId') {
                        const orderKey = order[item.key]
                        return (
                          <td key={indexConfig}>
                            <span style={{ backgroundColor: colorStatus[orderKey] }}
                              className={`px-2 py-1 rounded-lg text-xl text-[${colorStatus[orderKey]}]`}>
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

                      if (item.key === 'option') {
                        return (
                          <td key={indexConfig}>
                            <div className='cursor-pointer bg-Primary my-1 inline-block px-2 rounded-full hover:opacity-70'
                              onClick={() => showDetail(true, order)}>
                              Chi tiết
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
          <Paginate totalPage={totalPage} currentPage={currentPage} callback={handlePaging} />
        </div>
      }
    </div>
  )
}

export default Orders
