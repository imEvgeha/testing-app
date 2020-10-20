const axios = require('axios')

export const getPosts = async () => {
  return await axios.get('https://simple-blog-api.crew.red/posts')
    .then(function (response: any) {
      return response.data
    })
    .catch(function (error: any) {
      console.log(error)
    })
}

export const createPost = ({ title, body }: {title: string, body: string}) => {
  axios.post('https://simple-blog-api.crew.red/posts', {
    title: title,
    body: body
  })
    .then(function () {
      alert('Successfully created!')
    })
    .catch(function (error: any) {
      console.log(error)
      alert('Error! Check console.log')
    })
}

export const getDefinitePost = async (id: string) => {
  return await axios.get(`https://simple-blog-api.crew.red/posts/${id}?_embed=comments`)
    .then(function (response: any) {
      return response.data
    })
    .catch(function (error: any) {
      console.log(error)
    })
}

export const deleteDefinitePost = async (id: string) => {
  return await axios.delete(`https://simple-blog-api.crew.red/posts/${id}?_embed=comments`)
    .then(function (response: any) {
      return response.data
    })
    .catch(function (error: any) {
      console.log(error)
    })
}

export const createComment = async ({ id, body }: {id: string | string[], body: string}) => {
  axios.post('https://simple-blog-api.crew.red/comments', {
    postId: id,
    body: body
  })
    .then(function () {
      alert('Successfully created!')
    })
    .catch(function (error: any) {
      console.log(error)
      alert('Error! Check console.log')
    })
}
