import api from './api'
import { FETCH_LOGIN_ENDPOINT } from './endpoints'

export const fetchTokenByAppUserData = async (login, password) => {
  const response = await api.post(FETCH_LOGIN_ENDPOINT, {
    email: login,
    password: password,
  })

  return response.data
}
