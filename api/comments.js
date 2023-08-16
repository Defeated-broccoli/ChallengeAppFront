import api from './api'
import { FETCH_COMMENT_ENDPOINT } from './endpoints'

export const fetchComments = async () => {
  const response = await api.get(FETCH_COMMENT_ENDPOINT)
  return response.data
}
