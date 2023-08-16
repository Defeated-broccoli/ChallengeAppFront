import api from './api'
import { FETCH_POST_ENDPOINT } from './endpoints'

export const fetchPosts = async () => {
  const response = await api.get(FETCH_POST_ENDPOINT)
  return response.data
}

export const fetchPostById = async (postId) => {
  const response = await api.get(`${FETCH_POST_ENDPOINT}/${postId}`)
  return response.data
}

export const fetchCommentsByPostId = async (postId) => {
  const response = await api.get(`${FETCH_POST_ENDPOINT}/${postId}/Comments`)
  return response.data
}
