export const orderHeaderConfig = [
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
    key: 'option',
    value: 'Tùy chọn',
    visible: true,
    scale: 3
  }
]

export const orderStatus = {
  created: "Chờ xác nhận",
  waitForPay: "Chờ thanh toán",
  confirm: "Đã xác nhận đơn hàng",
  deliveredToTransporter: 'Đã giao hàng cho đơn vị vận chuyển',
  shipping: "Đang vận chuyển",
  delivered: "Đã giao hàng",
  cancelled: "Đã hủy"
}

export const colorStatus = {
  created: "#ffff00",
  confirm: "#aaffff",
  waitForPay: "#e943ef",
  deliveredToTransporter: '#999900',
  shipping: "#0000ff",
  delivered: "#40ff2b",
  cancelled: "#ff0000"
}


