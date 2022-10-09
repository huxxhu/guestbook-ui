import axios from '../axios.config'

export const login = async (data) => {
  return await axios
    .post('/login', data)
    .then((res) => res.data.data)
    .catch((error) => {
      console.log(error)
      alert('別想破解密碼啦 ^_^')
    })
}
