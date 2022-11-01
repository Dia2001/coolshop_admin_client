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

async function uploadImages(productId, images) {
  try {
    const formData = new FormData()
    for (let index in images) {
      formData.append(`files`, images[index])
    }
    const response = await fetch(`${config.BASE_API}/galleries/${productId}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${getToken() || ''}`
      },
      body: formData
    })

    const result = await response.text()

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

async function deleteGalleryById(galleryId) {
  try {
    const response = await fetch(`${config.BASE_API}/galleries/${galleryId}`, {
      method: 'DELETE',
      headers: getHeaders()
    })

    const result = await response.text()

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
  uploadImages,
  deleteGalleryById,
}

export {
  getAllGalleryInProductById,
  uploadImages,
  deleteGalleryById,
}

export default GalleryService
