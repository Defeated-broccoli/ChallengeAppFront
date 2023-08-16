import axios from 'axios'

const api = axios.create({
  baseURL: 'https://challengeappserver.azurewebsites.net',
  headers: {},
})

export default api
