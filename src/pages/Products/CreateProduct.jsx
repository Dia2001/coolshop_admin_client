import { useContext, useEffect, useState } from 'react'
import ProductService from '../../services/ProductService'
import config from '../../config'
import { Link, useNavigate } from 'react-router-dom'
import { ProductContext } from '../../Providers/ProductContext'
import Modals from '../../components/Modals'
import { TextBox, ComboBox, TextArea, ImageDrag, CheckList } from '../../components/Inputs'

function CreateProduct() {

  const { brands, categories, sizes, colors } = useContext(ProductContext)
  const navigate = useNavigate()
  const [image, setImage] = useState()
  const [name, setName] = useState('')
  const [price, setPrice] = useState(1000)
  const [description, setDescription] = useState('')
  const [slug, setSlug] = useState('')
  const [brandId, setBrandId] = useState('')
  const [categoryIds, setCategoryIds] = useState([])
  const [sizeIds, setSizeIds] = useState([])
  const [colorIds, setColorIds] = useState([])
  const [isShowAlert, setIsShowAlert] = useState(false)
  const [message, setMessage] = useState('')

  const handleCreate = async () => {
    const product = {
      name: name,
      price: price,
      description: description,
      slug: slug,
      brandId: brandId,
      categories: categoryIds,
      detail: {
        sizes: sizeIds,
        colors: colorIds
      }
    }

    const result = await ProductService.create(image, product)

    if (result.success) {
      navigate(`${config.routes.editProduct}?productId=${result.data.data}`)
    } else {
      setMessage(result.data.message || result.data.title)
      setIsShowAlert(true)
    }
  }

  useEffect(() => {
    document.title = "Tạo mới sản phẩm"
  })

  return (
    <div className="p-4">
      <div className="flex items-center">
        <Link className='mr-1 text-xl' to={config.routes.products}>Sản phẩm</Link>
        <h6 className='font-bold'>
          &gt; Tạo mới
        </h6>
      </div>
      <div className="w-full flex flex-wrap">

        <div className="w-[48%] min-w-[300px] mr-[2%]">
          <TextBox title="Tên" value={name} placeholder="Tên sản phẩm" onChange={setName} />

          <TextBox title="Giá" value={price} onChange={setPrice} />

          <TextBox title="Slug" value={slug} placeholder='Để trống sẽ được tạo ra tự động'
            onChange={setSlug} />

          <ComboBox title="Hãng" options={brands} value={brandId} onChange={setBrandId}
            keyValueOption="brandId" keyTitleOption="name" />

          <TextArea title="Mô tả" value={description} onChange={setDescription} />

          <ImageDrag title="Hình ảnh" file={image} setFile={setImage} />

        </div>
        <div className="w-[48%]">

          <CheckList title="Danh mục" values={categoryIds} setValues={setCategoryIds}
            options={categories} keyValueOption="categoryId" keyTitleOption="name" isWrap={true} />

          <div className="flex flex-wrap">

            <CheckList title="Sizes" values={sizeIds} setValues={setSizeIds}
              options={sizes} keyValueOption="sizeId" keyTitleOption="name" />

            <CheckList title="Màu sắc" values={colorIds} setValues={setColorIds}
              options={colors} keyValueOption="colorId" keyTitleOption="name" />

          </div>
        </div>
      </div>
      <div className="flex justify-end mr-20">
        <div></div>
        <div>
          <Link to={config.routes.products} className='rounded-full px-2 py-1 font-normal h-6 bg-gray-300 mr-2 hover:opacity-70' >
            Hủy</Link>
          <button className='rounded-full px-2 h-6 bg-ActiveColor hover:opacity-70'
            onClick={handleCreate}>Tạo mới</button>
        </div>
      </div>
      <Modals.Alert message={message} isOpen={isShowAlert} handler={() => setIsShowAlert(false)} />
    </div>
  )
}
export default CreateProduct
