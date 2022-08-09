import axios from '../axios.config'

export const getPosts = async () => {
  return await axios
    .get('/posts')
    .then((res) => res.data.post)
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
