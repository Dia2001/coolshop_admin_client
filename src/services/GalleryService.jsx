import config from '../config'
import { getToken, getHeaders } from '../utils'
import { convertObjectToFormData } from '../utils'

async function getAllGalleryInProductById(productId) {
  try {
    const response = await fetch(`${config.BASE_API}/galleries/${productId}`, {
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

const GalleryService = {
  getAllGalleryInProductById,
}

export {
  getAllGalleryInProductById,
}

export default GalleryService
