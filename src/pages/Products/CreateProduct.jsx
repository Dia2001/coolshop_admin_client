import { useContext, useEffect, useRef, useState } from 'react'
import ProductService from '../../services/ProductService'
import config from '../../config'
import { Link, useNavigate } from 'react-router-dom'
import { ProductContext } from '../../Providers/ProductContext'
import Modals from '../../components/Modals'

function CreateProduct() {

  const { brands, categories, sizes, colors } = useContext(ProductContext)
  const navigate = useNavigate()
  const fileImage = useRef()
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

    const result = await ProductService.create(fileImage.current.files[0], product)

    if (result.success) {
      navigate(`${config.routes.editProduct}?productId=${result.data.data}`)
    } else {
      setMessage(result.data.message || result.data.title)
      setIsShowAlert(true)
    }
  }

  const handleCheckCategory = (categoryId) => {
    if (categoryIds.includes(categoryId)) {
      setCategoryIds(prev => prev.reduce((curr, item) => {
        if (item !== categoryId) {
          curr.push(item)
        }
        return curr
      }, []))
    } else {
      setCategoryIds(prev => [...prev, categoryId])
    }
  }

  const handleCheckColor = (colorId) => {
    if (colorIds.includes(colorId)) {
      setColorIds(prev => prev.reduce((curr, item) => {
        if (item !== colorId) {
          curr.push(item)
        }
        return curr
      }, []))
    } else {
      setColorIds(prev => [...prev, colorId])
    }
  }

  const handleCheckSize = (sizeId) => {
    if (sizeIds.includes(sizeId)) {
      setSizeIds(prev => prev.reduce((curr, item) => {
        if (item !== sizeId) {
          curr.push(item)
        }
        return curr
      }, []))
    } else {
      setSizeIds(prev => [...prev, sizeId])
    }
  }

  useEffect(() => {
    document.title = "Tạo mới sản phẩm"
  })

  return (
    <div className="p-2">
      <div className="flex items-center mb-2">
        <Link className='mr-1 text-xl'>Products</Link>
        <h6 className='font-bold'>
          &gt; Tạo mới
        </h6>
      </div>
      <div className="w-full flex flex-wrap">

        <div className="w-[48%] min-w-[300px] mr-[2%]">

          <div className="flex item-center justify-start my-5">
            <p className="mr-5 w-[25%]">Tên</p>
            <div className=" w-80 ">
              <input
                className="w-full border-gray-600 border-2 rounded-lg px-2"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div className="flex item-center justify-start my-5">
            <p className="mr-5 w-[25%]">Giá</p>
            <div className=" w-80 ">
              <input
                className="w-full border-gray-600 border-2 rounded-lg px-2"
                type="number" min={1000} max={100000000}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>

          <div className="flex item-center justify-start my-5">
            <p className="mr-5 w-[25%]">Slug</p>
            <div className=" w-80 ">
              <input
                placeholder='Để trống sẽ được tạo ra tự động'
                className="w-full border-gray-600 border-2 rounded-lg px-2"
                type="text"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
              />
            </div>
          </div>
          <div className="flex item-center justify-start my-5">
            <p className="mr-5 w-[25%]">Hãng</p>
            <select
              className=" w-80 border-gray-600 border-2 rounded-lg px-2"
              onChange={(e) => {
                setBrandId(e.target.value)
              }}
              value={brandId}>
              <option value=""></option>
              {brands.map((brand, index) => {
                return <option key={index} value={brand.brandId}>{brand.name}</option>
              })}
            </select>
          </div>

          <div className="flex item-center justify-start my-5">
            <p className="mr-5 w-[25%]">Mô tả</p>
            <div className=" w-80 ">
              <textarea
                className="w-full border-gray-600 border-2 rounded-lg px-2"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              >{description}</textarea>
            </div>
          </div>

          <div className="flex item-center justify-start my-5">
            <p className="mr-5 w-[25%]">Hình ảnh</p>
            <div className=" w-80 ">
              <input type="file" ref={fileImage}
              />
            </div>
          </div>
        </div>
        <div className="w-[48%]">

          <div className="flex item-center mt-5">
            <p className="mr-5 w-14">Danh muc</p>
            <div className="max-h-52 overflow-y-auto w-96 flex flex-wrap">
              {categories.map((category, index) => {
                return (
                  <div className="flex h-6 mr-5" key={index}>
                    <input onChange={() => handleCheckCategory(category.categoryId)}
                      checked={categoryIds.includes(category.categoryId)}
                      type="checkbox"
                    />
                    <p className='ml-2'>{category.name}</p>
                  </div>)
              })}
            </div>
          </div>

          <div className="flex flex-wrap">

            <div className="flex item-center justify-between my-5">
              <p className="mr-5 w-14">Màu sắc</p>
              <div className="max-h-52 overflow-y-auto w-40 ">
                {colors.map((color, index) => {
                  return (
                    <div className="flex" key={index}>
                      <input
                        type="checkbox"
                        onChange={() => handleCheckColor(color.colorId)}
                        checked={colorIds.includes(color.colorId)}
                      />
                      <p className='ml-2'>{color.name}</p>
                    </div>)
                })}
              </div>
            </div>
            <div className="flex item-center justify-between my-5">
              <p className="mr-5 w-14">Size</p>
              <div className="max-h-52 overflow-y-auto w-40 ">
                {sizes.map((size, index) => {
                  return (
                    <div className="flex" key={index}>
                      <input
                        type="checkbox"
                        onChange={() => handleCheckSize(size.sizeId)}
                        checked={sizeIds.includes(size.sizeId)}
                      />
                      <p className='ml-2'>{size.name}</p>
                    </div>)
                })}
              </div>
            </div>

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
