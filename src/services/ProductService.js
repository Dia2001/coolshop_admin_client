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

async function getFilter({ ...filter }) {

  let queryParams = '?'

  for (let param in filter) {
    queryParams += `${param}=${filter[param]}&`
  }

  try {
    const response = await fetch(`${config.BASE_API}/products/filter${queryParams}`, {
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

async function listofcategoriesandfeaturedproducts() {
  try {
    const response = await fetch(`${config.BASE_API}/products/listofcategoriesandfeaturedproducts`, {
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

async function getProductofcategory() {
  try {
    const response = await fetch(`${config.BASE_API}/products/productofcategory`, {
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
  console.log(product)
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

async function deleteCategoryById(productId, categoryId) {
  try {
    const response = await fetch(`${config.BASE_API}/products/categories/delete`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({
        productId,
        categoryId
      })
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

async function deleteSizeById(productId, sizeId) {
  try {
    const response = await fetch(`${config.BASE_API}/products/size/delete`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({
        productId,
        sizeId: sizeId
      })
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

async function deleteColorById(productId, colorId) {
  try {
    const response = await fetch(`${config.BASE_API}/products/color/delete`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({
        productId,
        colorId: colorId
      })
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

async function addCategoryById(productId, categoryId) {
  try {
    const response = await fetch(`${config.BASE_API}/products/categories`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({
        productId,
        categoryId
      })
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

async function addSizeById(productId, sizeId) {
  try {
    const response = await fetch(`${config.BASE_API}/products/size`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({
        productId,
        sizeId: sizeId
      })
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

async function addColorById(productId, colorId) {
  try {
    const response = await fetch(`${config.BASE_API}/products/color`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({
        productId,
        colorId: colorId
      })
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

async function getQuantityProductById(productId) {
  try {
    const response = await fetch(`${config.BASE_API}/products/quantity/${productId}`, {
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

async function addQuantityInSizeAndColor(productId, sizeId, colorId, quantity) {
  try {
    const response = await fetch(`${config.BASE_API}/products/quantity`, {
      method: 'POSt',
      headers: getHeaders(),
      body: JSON.stringify({
        productId,
        sizeId,
        colorId,
        quantity
      })
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

async function revenuemonthly(object) {
  try {
    const response = await fetch(`${config.BASE_API}/products/statistics/revenuemonthly`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(object)
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

async function revenuemonth(object) {
  try {
    const response = await fetch(`${config.BASE_API}/products/statistics/revenuemonth`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(object)
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
  getFilter,
  getById,
  listofcategoriesandfeaturedproducts,
  getProductofcategory,
  create,
  updateById,
  deleteById,
  deleteCategoryById,
  deleteSizeById,
  deleteColorById,
  addCategoryById,
  addSizeById,
  addColorById,
  getQuantityProductById,
  addQuantityInSizeAndColor,
  revenuemonthly,
  revenuemonth
}

export {
  getAll,
  getFilter,
  getById,
  addQuantityInSizeAndColor,
  listofcategoriesandfeaturedproducts,
  getProductofcategory,
  create,
  updateById,
  deleteById,
  deleteCategoryById,
  deleteSizeById,
  deleteColorById,
  addCategoryById,
  addSizeById,
  addColorById,
  getQuantityProductById,
  revenuemonthly,
  revenuemonth
}

export default ProductService
