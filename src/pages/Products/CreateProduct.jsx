import { useRef, useState } from 'react'
import ProductService from '../../services/ProductService'

function CreateProduct() {

  const fileImage = useRef()

  const fetchApi = async () => {

    const product = {
      "productId": "b04cb195-6e01-4070-839e-9aedc39f8df6",
      "name": "Áo mỏng manh dễ rách",
      "price": 100000,
      "description": "Mô tả",
      "slug": "test-thu-slug",
      "brandId": "142cb08f-7c31-21fa-8e90-67245e8b283e",
      "categories": ["692d207a-12fe-54e6-6351-12b245ff3d02", "77b3727c-71c0-3b4d-0cca-194e61bec35f"],
      "detail": {
        "sizes": ["3f7bb059-6c87-1b53-7f6a-e0860b0602ba", "6fd9cee5-30b5-5670-79ff-f8ad76748b41"],
        "colors": ["57cdf8c4-47e3-5560-7e41-c1ec321fe728", "3304dddb-1b72-607f-25c2-579daad24557"]
      }
    }

    // const result = await ProductService.create(fileImage.current.files[0], product)
    //
    const result = await ProductService.updateById(product.productId, product, fileImage.current.files[0] || null)

    console.log(result)
  }

  const handleUpload = () => {
    fetchApi()
  }

  return (
    <div>
      <input className="bg-red-50" type="file" ref={fileImage} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  )
}
export default CreateProduct
