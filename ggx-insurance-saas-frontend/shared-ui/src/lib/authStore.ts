import { create } from 'zustand'

export interface AuthUser {
  id: string
  email: string
  name: string
  role: string
  avatar?: string
}

interface AuthState {
  user: AuthUser | null
  token: string | null
  isAuthenticated: boolean
  login: (user: AuthUser, token: string) => void
  logout: () => void
  updateUser: (user: Partial<AuthUser>) => void
}

const storedUser = localStorage.getItem('ggx_user')
const storedToken = localStorage.getItem('ggx_token')

export const useAuthStore = create<AuthState>((set) => ({
  user: storedUser ? JSON.parse(storedUser) : null,
  token: storedToken || null,
  isAuthenticated: !!storedToken,

  login: (user, token) => {
    localStorage.setItem('ggx_token', token)
    localStorage.setItem('ggx_user', JSON.stringify(user))
    set({ user, token, isAuthenticated: true })
  },

  logout: () => {
    localStorage.removeItem('ggx_token')
    localStorage.removeItem('ggx_user')
    set({ user: null, token: null, isAuthenticated: false })
  },

  updateUser: (updates) => {
    set((state) => {
      if (!state.user) return state
      const updated = { ...state.user, ...updates }
      localStorage.setItem('ggx_user', JSON.stringify(updated))
      return { user: updated }
    })
  },
}))
