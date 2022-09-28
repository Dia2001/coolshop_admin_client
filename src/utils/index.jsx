export const getToken = () => localStorage.getItem("token")

export const getHeaders = () => {
  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${getToken() || ''}`
  }
}
