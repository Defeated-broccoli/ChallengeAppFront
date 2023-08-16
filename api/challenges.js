import api from './api'
import { FETCH_CHALLENGE_ENDPOINT } from './endpoints'

export const fetchChallenges = async () => {
  const response = await api.get(FETCH_CHALLENGE_ENDPOINT)
  return response.data
}
