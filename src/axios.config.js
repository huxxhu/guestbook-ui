import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://guestbook-api-coral.vercel.app',
})

export default instance
