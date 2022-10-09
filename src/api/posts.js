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

export const replyPost = async ({ data, id, token }) => {
  return await axios
    .patch(`/admin/post/${id}/reply`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res)
    .catch((error) => {
      console.log(error)
    })
}
