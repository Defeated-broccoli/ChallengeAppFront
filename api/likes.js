import api from './api'
import { FETCH_LIKE_ENDPOINT } from './endpoints'

export const fetchLikesNumberByPostId = async (postId) => {
  const response = await api.get(`${FETCH_LIKE_ENDPOINT}/${postId}/Likes/Count`)
  return response.data
}
