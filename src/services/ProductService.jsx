import config from '../config'
import { getToken, getHeaders } from '../utils'
import { convertObjectToFormData } from '../utils'

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

async function create(fileImage, product) {

  const formData = convertObjectToFormData(product)
  formData.append("file", fileImage)

  try {
    const response = await fetch(`${config.BASE_API}/products/`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${getToken() || ''}`
      },
      body: formData
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

async function updateById(id, product, fileImage) {
  const formData = convertObjectToFormData(product)

  console.log(formData)

  formData.append("file", fileImage)

  try {
    const response = await fetch(`${config.BASE_API}/products/${id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${getToken() || ''}`
      },
      body: formData
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
