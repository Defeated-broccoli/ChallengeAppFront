import api from './api'
import { FETCH_APPUSER_ENDPOINT } from './endpoints'

export const fetchAppUsers = async (token) => {
  const response = await api.get(FETCH_APPUSER_ENDPOINT)
  return response.data
}

export const fetchAppUserById = async (appUserId) => {
  const response = await api.get(`${FETCH_APPUSER_ENDPOINT}/id/${appUserId}`)
  return response.data
}

export const fetchPostsByAppUserId = async (appUserId) => {
  const response = await api.get(
    `${FETCH_APPUSER_ENDPOINT}/id/${appUserId}/posts`
  )
  return response.data
}

export const fetchCommentsByAppUserById = async (appUserId) => {
  const response = await api.get(
    `${FETCH_APPUSER_ENDPOINT}/id/${appUserId}/comments`
  )
  return response.data
}

/* export const fetchAppUsers = async (token) => {
  const response = await api.get(FETCH_APPUSER_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response.data
} */
