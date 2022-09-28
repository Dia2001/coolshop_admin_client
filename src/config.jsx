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
    employees: '/employees',
    customers: '/customers',
  },
  BASE_URL: process.env.REACT_APP_BASE_API
}

export default config
