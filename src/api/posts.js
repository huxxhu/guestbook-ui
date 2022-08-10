import axios from '../axios.config'

export const getPosts = async (params) => {
  return await axios
    .get('/posts', { params })
    .then((res) => res.data)
    .catch((error) => {
      console.log('⚠️ GET POSTS ERROR: ' + error)
      return []
    })
}

export const addPost = async (data) => {
  return await axios
    .post('/post', data)
    .then((res) => res)
    .catch((error) => {
      console.log(error)
    })
}
