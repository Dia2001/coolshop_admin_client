import React, { useEffect, useState } from "react";
import config from "../../config";
import { enPriceVnd } from "../../utils";
import FooterInfo from './components/FooterInfo'

const OrderDetail = ({ order, handleChangeOrder }) => {
  const [orderStatus, setOrderStatus] = useState(order.orderStatusId)

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2x inline-block min-w-full sm:px-6 lg:px-8 shadow-md">
          <div className="overflow-hidden rounded-[6px] ">
            <table className="min-w-full">
              <thead className="bg-white border-b border-Black25">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-bold text-gray-900 px-6 py-4 text-left"
                  >
                    <h6>Sản phẩm</h6>
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-bold text-gray-900 px-6 py-4 text-left"
                  >
                    <h6>Loại</h6>
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-bold text-gray-900 px-6 py-4 text-left"
                  >
                    <h6> Số lượng</h6>
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-bold text-gray-900 px-6 py-4 text-left"
                  >
                    <h6>Tạm tính</h6>
                  </th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(order.orderDetail) ?
                  order.orderDetail.map((item, index) => (
                    <tr key={index} className="bg-white h-[110px] border-b transition duration-300 ease-in-out hover:bg-gray-100">
                      <td className="flex gap-4  text-sm font-medium text-gray-900">
                        <img
                          src={config.urlImageProduct + item.productImage}
                          alt="ảnh sản phẩm"
                          className="object-cover w-[110px] h-[110px]"
                        />
                        <div className="flex flex-col justify-between max-w-[295px]">
                          <h6 className="break-down min-w-0">{item.productName}</h6>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <h6>{item.description}</h6>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <h5 className="font-semibold">{item.quantity}</h5>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <h6>{enPriceVnd(item.price * item.quantity)}đ</h6>
                      </td>
                    </tr>
                  )) : ''}
              </tbody>
            </table>
          </div>
          <FooterInfo order={order} orderStatusId={orderStatus} setOrderStatusId={setOrderStatus} handleChangeOrder={handleChangeOrder} />
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
