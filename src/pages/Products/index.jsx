import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import config from '../../config'
import SearchBox from './components/SearchBox'
import ProductService from '../../services/ProductService'

function Products() {
  const totalScaleHeader = config.headerProductDefaults.reduce((curr, item) => curr + item.scale, 0)
  const [products, setProducts] = useState([])
  const [sizes, setSizes] = useState([])
  const [colors, setColors] = useState([])
  const [brands, setBrands] = useState([])
  const [category, setCategory] = useState([])
  const [listChecked, setListChecked] = useState([])

  useEffect(() => {
    fetchApiGetAllSize()
    fetchApiGetAllBrand()
    fetchApiGetAllColor()
    fetchApiGetAllCategory()
    fetchApiGetAllProduct()
  }, [])

  const fetchApiGetAllProduct = async () => {
    const result = await ProductService.getAll()
    if (result.success) {
      setProducts(result.data)
    }
  }

  const fetchApiGetAllCategory = async () => {

    setCategory([
      {
        categoryId: '692d207a-12fe-54e6-6351-12b245ff3d02',
        name: 'Thời trang nam',
        description: 'Mô tả gì đó'
      },
      {
        categoryId: '77b3727c-71c0-3b4d-0cca-194e61bec35f',
        name: 'Thời trang nữ',
        description: 'Mô tả gì đó'
      }
    ])
  }

  const fetchApiGetAllBrand = async () => {
    setBrands([
      {
        "brandId": "469b3ece-744a-45d5-957d-e8c757976496",
        "name": "Nike",
        "description": "Mô tả gì đó về size này"
      },
      {
        "brandId": "142cb08f-7c31-21fa-8e90-67245e8b283e",
        "name": "Adidas",
        "description": "Mô tả gì đó về size này"
      },
    ])
  }

  const fetchApiGetAllSize = async () => {
    setSizes([
      {
        "sizeId": "3f7bb059-6c87-1b53-7f6a-e0860b0602ba",
        "name": "4xl",
        "description": "Mô tả gì đó về size này"
      },
      {
        "sizeId": "6fd9cee5-30b5-5670-79ff-f8ad76748b41",
        "name": "5xl",
        "description": "Mô tả gì đó về size này"
      },
      {
        "sizeId": "99d2d2a5-4332-11ed-a028-0242ac130002",
        "name": "2xl",
        "description": "Mô tả gì đó về size này"
      },
    ])
  }

  const fetchApiGetAllColor = async () => {
    setColors([
      {
        "colorId": "3304dddb-1b72-607f-25c2-579daad24557",
        "name": "Xanh",
        "description": "Mô tả gì đó về màu này"
      },
      {
        "colorId": "57cdf8c4-47e3-5560-7e41-c1ec321fe728",
        "name": "Đỏ",
        "description": "Mô tả gì đó về màu này"
      },
      {
        "colorId": "d6fc8b97-4336-11ed-a028-0242ac130002",
        "name": "Xanh lúa mạ",
        "description": "Mô tả gì đó về màu này"
      },
    ])
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

  return (
    <div className="p-1 justify-between items-center">
      <SearchBox />
      <table className="w-full">
        <thead className="table-header-group">
          <tr className="bg-blue-50">
            {config.headerProductDefaults.map((item, index) => {
              if (item.key === 'checkbox') {
                return <th key={index}
                  className="text-start"
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
            return <tr key={indexProduct}>
              {config.headerProductDefaults.map((header, index) => {
                const key = header.key
                if (key === 'checkbox') {
                  return <td key={index} >
                    <input type="checkbox" checked={listChecked.includes(product.productId)}
                      onChange={() => handleCheck(product.productId)} />
                  </td>
                }
                if (key === 'image') {
                  return <td key={index}>
                    <img alt='' className="w-10 h-10 object-contain" src={`${config.urlImageProduct}${product[key]}`} ></img>
                  </td>
                }
                if (key === 'brandId') {
                  return <td key={index}>
                    <h6>{brands.find(brand => brand.brandId === product[key]).name}</h6>
                  </td>
                }
                if (key === 'categories') {
                  return <td key={index}>
                    <>{product[key].map(categoryId => {
                      return <h6 key={categoryId} >
                        - {category.find(category => category.categoryId === categoryId).name}
                      </h6>
                    })}</>
                  </td>
                }
                if (key === 'colors') {
                  return <td key={index}>
                    <div>
                      {product.detail[key].map((colorId, index) => {
                        const color = colors.find(color => color.colorId === colorId)
                        if (color) {
                          return <h6 key={index} className="bg-green-400 rounded-md px-1 ml-1">
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
                    <div className="flex items-center">
                      {product.detail[key].map(sizeId => {
                        const size = sizes.find(size => size.sizeId === sizeId)
                        if (size) {
                          return <h6 key={sizeId} className="bg-green-400 rounded-md px-1 ml-1">
                            {size.name}
                          </h6>
                        }
                        return ''
                      })}
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
    </div >
  )
}

export default Products
