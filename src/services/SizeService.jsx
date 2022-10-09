import config from '../config'
import { getHeaders } from '../utils'

/**
* Call api getAll size
*/
async function getAll() {
  try {
    const response = await fetch(`${config.BASE_API}/sizes`, {
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

const SizeService = {
  getAll
}

export default SizeService
