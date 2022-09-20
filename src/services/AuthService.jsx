const BASE_API = process.env.REACT_APP_BASE_API

// Lay token tu localStorage va ding kem vao headers neu co
const token = localStorage.getItem('token')

const headers = {
  'Content-Type': 'application/json',
  'authorization': token || ''
}

/**
* Call api login 
* params Object gom username va password 
* return Object gom status (trang thai call) data (du lieu nhan duoc)
*/
async function login({ username, password }) {
  try {
    const response = await fetch(`${BASE_API}/login`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        username: username,
        password: password
      })
    })

    const result = await response.text()

    if (response.status === 200) {
      return {
        success: true,
        data: result
      }
    } else {
      return {
        success: false,
        data: result
      }
    }

  } catch (e) {
    console.log(e)
    return {
      success: false,
      data: ''
    }
  }
}

/**
* Call api get thong tin user da dang nhap dua vao token 
* return Object gom status (trang thai call) data (du lieu nhan duoc)
*/
async function getProfile() {
  try {
    const response = await fetch(`${BASE_API}/users`, {
      method: 'GET',
      headers,
    })

    const result = await response.json()

    if (response.status === 200) {
      return {
        success: true,
        data: result
      }
    } else {
      return {
        success: false,
        data: result
      }
    }

  } catch (e) {
    console.log(e)
    return {
      success: false,
      data: ''
    }
  }
}

const AuthService = {
  login,
  getProfile
}

export {
  login,
  getProfile
}

export default AuthService
