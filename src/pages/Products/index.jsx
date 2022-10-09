import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import config from '../../config'
import SearchBox from './components/SearchBox'
import ProductService from '../../services/ProductService'
import { ProductContext } from '../../Providers/ProductContext'
import Paginate from '../../components/Paginate'

function Products() {
  const headersTable = config.headerProductDefaults.filter((item) => item.visible)
  const { brands, categories, colors, sizes } = useContext(ProductContext)
  const totalScaleHeader = config.headerProductDefaults.reduce((curr, item) => curr + item.scale, 0)
  const [products, setProducts] = useState([])
  const [listChecked, setListChecked] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPage, setTotalPage] = useState(1)

  useEffect(() => {
    document.title = "Sản phẩm"
    fetchApiGetAllProduct()
  }, [])

  const fetchApiGetAllProduct = async () => {
    const result = await ProductService.getFilter({})
    console.log(result)
    if (result.success) {
      setProducts(result.data.products)
    }
  }
  const handleCheckAll = () => {
    if (listChecked.length === products.length) {
      setListChecked([])
    } else {
      setListChecked(products.map(item => item.productId))
    }
  }

  const handleCheck = (id) => {
    const productId = listChecked.find(productId => productId === id)
    if (productId) {
      setListChecked(prev => prev.reduce((curr, item) => {
        if (item !== id) {
          curr.push(item)
        }
        return curr
      }, []))
    } else {
      let tmp = [...listChecked]
      tmp.push(id)
      setListChecked(tmp)
    }
  }

  const handleDelete = (id) => {

  }

  return (
    <ProductContext.Provider value={{
      brands: brands,
      categories: [1, 2],
      sizes,
      colors,
    }} >

      <div className="p-1 justify-between items-center">
        <SearchBox />
        <table className="w-full border-blue-50">
          <thead className="table-header-group">
            <tr className="bg-blue-200">
              {headersTable.map((item, index) => {
                if (item.key === 'checkbox') {
                  return <th key={index}
                    className="text-start cursor-pointer"
                    style={{ width: `${item.scale / totalScaleHeader * 100}%` }}>
                    <input type="checkbox" checked={listChecked.length === products.length}
                      onChange={handleCheckAll} />
                  </th>
                } else {
                  return <th key={index}
                    className="text-start"
                    style={{ width: `${item.scale / totalScaleHeader * 100}%` }}>
                    <h6>{item.value}</h6>
                  </th>
                }
              })}
            </tr>
          </thead>
          <tbody>
            {products.map((product, indexProduct) => {
              return <tr key={indexProduct} className="even:bg-blue-50">
                {headersTable.map((header, index) => {
                  const key = header.key
                  if (key === 'checkbox') {
                    return <td key={index} >
                      <input className="cursor-pointer" type="checkbox" checked={listChecked.includes(product.productId)}
                        onChange={() => handleCheck(product.productId)} />
                    </td>
                  }
                  if (key === 'image') {
                    console.log(product.image)
                    return <td key={index}>
                      <img alt='' className="w-10 h-10 object-contain" src={`${config.urlImageProduct}${product[key]}`} ></img>
                    </td>
                  }
                  if (key === 'brandId') {
                    const brand = brands.find(brand => brand.brandId === product[key])
                    return <td key={index}>
                      <h6>{brand ? brand.name : ''}</h6>
                    </td>
                  }
                  if (key === 'categories') {
                    return <td key={index}>
                      <>{product[key].map(categoryId => {
                        const category = categories.find(category => category.categoryId === categoryId)
                        return <h6 key={categoryId} >
                          {category ? '-' + category.name : ''}
                        </h6>
                      })}</>
                    </td>
                  }
                  if (key === 'colors') {
                    return <td key={index}>
                      <div className="flex items-center flex-wrap">
                        {product.detail[key].map((colorId, index) => {
                          const color = colors.find(color => color.colorId === colorId)
                          if (color) {
                            return <h6 key={index} className="bg-green-400 h-6 overflow-hidden rounded-md px-1 mb-1 ml-1">
                              {color.name}
                            </h6>
                          }
                          return ''
                        })}
                      </div>
                    </td>
                  }
                  if (key === 'sizes') {
                    return <td key={index}>
                      <div className="flex items-center flex-wrap">
                        {product.detail[key].map(sizeId => {
                          const size = sizes.find(size => size.sizeId === sizeId)
                          if (size) {
                            return <h6 key={sizeId} className="bg-green-400 rounded-md px-1 mb-1 ml-1">
                              {size.name}
                            </h6>
                          }
                          return ''
                        })}
                      </div>
                    </td>
                  }
                  if (key === 'action') {
                    return <td key={index}>
                      <div className="flex items-center">
                        <Link to={`${config.routes.editProduct}?productId=${product.productId}`}
                          className="bg-ActiveColor px-1 mx-1 rounded-md hover:opacity-70"
                        >Sửa</Link>
                        <button
                          onClick={() => handleDelete(product.productId)}
                          className="bg-ErrorColor text-white px-1 rounded-md hover:opacity-70"
                        >Xóa</button>
                      </div>
                    </td>
                  }
                  return <td key={index}>
                    <h6>{product[key]}</h6>
                  </td>
                })}
              </tr>
            })}
          </tbody>
        </table>
        <Paginate />
      </div >
    </ProductContext.Provider>
  )
}

export default Products
