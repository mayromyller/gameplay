import React, {
  useContext,
  createContext,
  useState,
  ReactNode,
  useEffect
} from 'react'

import * as AuthSession from 'expo-auth-session'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { discordConfig } from '../config/'
import { api } from '../services/api'
import { COLLECTION_USERS } from '../config/database'

type User = {
  id: string
  username: string
  firstName: string
  avatar: string
  email: string
  token: string
}

type AuthContextData = {
  user: User
  signIn: () => Promise<void>
  loading: boolean
}

type AuthProviderProps = {
  children: ReactNode
}

type AuthorizationResponse = AuthSession.AuthSessionResult & {
  params: {
    access_token?: string
    error?: string
  }
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User)
  const [loading, setLoading] = useState(false)

  async function signIn() {
    try {
      setLoading(true)

      const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${discordConfig.CLIENT_ID}&redirect_uri=${discordConfig.REDIRECT_URI}&response_type=${discordConfig.RESPONSE_TYPE}&scope=${discordConfig.SCOPE}`

      const { params, type } = (await AuthSession.startAsync({
        authUrl
      })) as AuthorizationResponse

      if (type === 'success' && !params.error) {
        api.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${params.access_token}`

        const userInfo = await api.get('/users/@me')

        const firstName = userInfo.data.username.split(' ')[0]
        userInfo.data.avatar = `${discordConfig.CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`

        const userData = {
          ...userInfo.data,
          firstName,
          token: params.access_token
        }

        await AsyncStorage.setItem(COLLECTION_USERS, JSON.stringify(userData))

        setUser(userData)
      }
    } catch (error) {
      throw new Error('Não foi possível fazer a autenticação')
    } finally {
      setLoading(false)
    }
  }

  async function loadUserStorageData() {
    const storage = await AsyncStorage.getItem(COLLECTION_USERS)

    if (storage) {
      const userLogged = JSON.parse(storage) as User

      api.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${userLogged.token}`

      setUser(userLogged)
    }
  }

  useEffect(() => {
    loadUserStorageData()
  }, [])

  return (
    <AuthContext.Provider value={{ user, signIn, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  return context
}
