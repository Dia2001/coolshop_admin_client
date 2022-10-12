const headerProductDefaults = [
  {
    key: 'checkbox',
    value: 'CheckBox',
    visible: true,
    scale: 3
  },
  {
    key: 'name',
    value: 'Tên sản phẩm',
    visible: true,
    scale: 25
  },
  {
    key: 'image',
    value: 'Ảnh',
    visible: true,
    scale: 10
  },
  {
    key: 'price',
    value: 'Giá',
    visible: true,
    scale: 10
  },
  {
    key: 'slug',
    value: 'Slug',
    visible: true,
    scale: 15
  },
  {
    key: 'brandId',
    value: 'Nhãn hiệu',
    visible: true,
    scale: 15
  },
  {
    key: 'categories',
    value: 'Danh mục',
    visible: true,
    scale: 20
  },
  {
    key: 'colors',
    value: 'Màu',
    visible: true,
    scale: 20
  },
  {
    key: 'sizes',
    value: 'Sizes',
    visible: true,
    scale: 20
  },
  {
    key: 'totalQuantity',
    value: 'Số lượng',
    visible: true,
    scale: 10
  },
  {
    key: 'description',
    value: 'Mô tả',
    visible: true,
    scale: 30
  },
  {
    key: 'action',
    value: 'Hành động',
    visible: true,
    scale: 10
  },
]

const config = {
  routes: {
    home: '/',
    login: '/login',
    request: '/requests',
    notifition: '/notifitions',
    categories: '/categories',
    orders: '/orders',
    products: '/products',
    createProduct: '/products/create',
    editProduct: '/products/edit',
    employees: '/employees',
    customers: '/customers',
  },
  BASE_API: process.env.REACT_APP_BASE_URL_API,
  headerProductDefaults,
  urlImageProduct: process.env.REACT_APP_BASE_URL_IMAGE + '/product/'
}

export default config
