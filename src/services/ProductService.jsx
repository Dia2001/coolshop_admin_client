import config from '../config'
import { getHeaders } from '../utils'

/**
* Call api getAll products
*/
async function getAll() {
  try {
    const response = await fetch(`${config.BASE_API}/products`, {
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
        data: result
      }
    }

  } catch (e) {
    console.log(e)
    return {
      success: false,
      data: ''
    }
  }
}

async function getById(id) {
  try {
    const response = await fetch(`${config.BASE_API}/products/${id}`, {
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
        data: result
      }
    }

  } catch (e) {
    console.log(e)
    return {
      success: false,
      data: ''
    }
  }
}

async function create(product) {
  try {
    const response = await fetch(`${config.BASE_API}/products/`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(product)
    })

    const result = await response.json()

    if (response.status === 201) {
      return {
        success: true,
        data: result
      }
    } else {
      return {
        success: false,
        data: result
      }
    }

  } catch (e) {
    console.log(e)
    return {
      success: false,
      data: ''
    }
  }
}

async function updateById(id, product) {
  try {
    const response = await fetch(`${config.BASE_API}/products/${id}`, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify(product)
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
        data: result
      }
    }

  } catch (e) {
    console.log(e)
    return {
      success: false,
      data: ''
    }
  }
}

async function deleteById(id) {
  try {
    const response = await fetch(`${config.BASE_API}/products/${id}`, {
      method: 'DELETE',
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
        data: result
      }
    }

  } catch (e) {
    console.log(e)
    return {
      success: false,
      data: ''
    }
  }
}

const ProductService = {
  getAll,
  getById,
  create,
  updateById,
  deleteById
}

export {
  getAll,
  getById,
  create,
  updateById,
  deleteById
}

export default ProductService
