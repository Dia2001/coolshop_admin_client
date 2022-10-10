import { useState, useContext, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import ProductService from '../../services/ProductService'
import { ProductContext } from '../../Providers/ProductContext'
import { TextBox, ComboBox, TextArea, ImageDrag, CheckList } from '../../components/Inputs'
import config from '../../config'

function EditProduct() {
  const { brands, categorys, sizes, colors } = useContext(ProductContext)
  const location = useLocation()
  const query = new URLSearchParams(location.search)
  const [product, setProduct] = useState()

  const navigate = useNavigate()
  const [image, setImage] = useState()
  const [name, setName] = useState('')
  const [price, setPrice] = useState(1000)
  const [description, setDescription] = useState('')
  const [slug, setSlug] = useState('')
  const [brandId, setBrandId] = useState('')
  const [isShowAlert, setIsShowAlert] = useState(false)
  const [message, setMessage] = useState('')
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

  useEffect(() => {
    if (product) {
      setName(product.name)
      setSlug(product.slug)
      setDescription(product.description)
      setBrandId(product.brandId)
      setPrice(product.price)
    }
  }, [product])

  return (
    <div className="p-4">
      <div className="flex items-center mb-2">
        <Link className='mr-1 text-xl' to={config.routes.products}>Sản phẩm</Link>
        <h6 className='font-bold'>
          &gt; Chình sửa
        </h6>
        <h6 className='font-bold'>
          &gt; {product ? product.name : ''}
        </h6>
      </div>
      <div className="w-full flex flex-wrap border px-2">
        <div className="w-[48%] min-w-[300px] mr-[2%]">
          <TextBox title="Tên" value={name} placeholder="Tên sản phẩm" onChange={setName} />

          <TextBox title="Giá" value={price} onChange={setPrice} />

          <TextBox title="Slug" value={slug} placeholder='Để trống sẽ được tạo ra tự động'
            onChange={setSlug} />

          <ComboBox title="Hãng" options={brands} value={brandId} onChange={setBrandId}
            keyValueOption="brandId" keyTitleOption="name" />

          <TextArea title="Mô tả" value={description} onChange={setDescription} />
        </div>

        <div className="w-[48%] min-w-[300px] mr-[2%]">
          <ImageDrag title="Hình ảnh" sourceLink={product ? config.urlImageProduct + product.image : ''}
            file={image} setFile={setImage} options={{ height: '52' }} />

          <div className="flex justify-end">
            <button className="bg-ActiveColor px-2 rounded-full hover:opacity-70">Cập nhật</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default EditProduct
