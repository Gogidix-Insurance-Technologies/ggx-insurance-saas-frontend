import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios'

export function createApiClient(baseURL: string = '/api') {
  const client = axios.create({ baseURL, timeout: 30000 })

  client.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('ggx_token')
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  })

  client.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
      if (error.response?.status === 401) {
        localStorage.removeItem('ggx_token')
        localStorage.removeItem('ggx_user')
        window.location.href = '/login'
      }
      return Promise.reject(error)
    }
  )

  return client
}

export const apiClient = createApiClient()
