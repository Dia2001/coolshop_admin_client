import config from '../config'
import { getHeaders } from '../utils'

/**
* Call api getAll cart
*/
async function getAll() {
  try {
    const response = await fetch(`${config.BASE_API}/orders`, {
      method: 'GET',
      headers: getHeaders()
    })

    const result = await response.json()

    if (response.status === 200) {
      return {
        success: true,
        data: result
      }
    } else {
      return {
        success: false,
        data: []
      }
    }

  } catch (e) {
    console.log(e)
    return {
      success: false,
      data: []
    }
  }
}

async function order(order) {
  try {
    const response = await fetch(`${config.BASE_API}/orders`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(order)
    })

    if (response.status === 201) {
      const result = await response.json()
      return {
        success: true,
        data: result
      }
    } else {
      return {
        success: false,
        data: []
      }
    }

  } catch (e) {
    console.log(e)
    return {
      success: false,
      data: []
    }
  }
}

async function updateOrder(order) {
  try {
    const response = await fetch(`${config.BASE_API}/orders/${order.orderId}`, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify(order)
    })

    if (response.status === 200) {
      const result = await response.json()
      return {
        success: true,
        data: result
      }
    } else {
      return {
        success: false,
        data: []
      }
    }

  } catch (e) {
    console.log(e)
    return {
      success: false,
      data: []
    }
  }
}

const OrderService = {
  getAll,
  order,
  updateOrder
}

export default OrderService
