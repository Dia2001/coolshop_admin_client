import { useState, useContext, useEffect } from 'react'
import { useLocation, HistoryRouterProps } from 'react-router-dom'
import ProductService from '../../services/ProductService'
import { ProductContext } from '../../Providers/ProductContext'

function EditProduct() {
  const { brands, categorys, sizes, colors } = useContext(ProductContext)
  const location = useLocation()
  const query = new URLSearchParams(location.search)
  const [product, setProduct] = useState()

  const productId = query.get("productId")

  useEffect(() => {
    document.title = "Sửa sản phẩm"
    if (productId) {
      fetchApiGetProduct(productId)
    }
  }, [])

  const fetchApiGetProduct = async (productId) => {
    const result = await ProductService.getById(productId)

    if (result.success) {
      setProduct(result.data)
      document.title = result.data.name
    }
  }

  return (
    <div>
      {product ? product.name : ''}
    </div>
  )
}
export default EditProduct
