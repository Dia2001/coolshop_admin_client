import React from 'react'
import { Link } from 'react-router-dom'
import config from '../../config'


const Products = () => {
  return (
    <div className="p-1 flex justify-between items-center">
      <div className='flex items-center'>
        <h5 className='mr-5'>Products</h5>
        <Link className='rounded-full px-2 h-6 bg-ActiveColor hover:opacity-70' to={config.routes.createProduct} >Create</Link>
      </div>
      <div>
        <input type="text" className="rounded-full h-6 mr-2 border-black px-3 border" placeholder='Nhập tên hoặc mã sản phẩm' />
        <button className='rounded-full px-2 h-6 bg-ActiveColor hover:opacity-70'>Search</button>
      </div>
    </div>
  )
}

export default Products
