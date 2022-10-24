import config from '../config'
import { getHeaders } from '../utils'

/**
* Call api getAll color
*/
async function getAll() {
  try {
    const response = await fetch(`${config.BASE_API}/colors`, {
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

const ColorService = {
  getAll
}

export default ColorService
