import React from 'react'
import { Alert, ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParam } from '../../routes/auth.routes'

import { useAuth } from '../../hooks/auth'

import IllustrationImg from '../../assets/illustration.png'

import ButtonIcon from '../../components/ButtonIcon'
import Gradient from '../../components/Gradient'

import * as S from './styles'
import { theme } from '../../global/styles/theme'

type SignInScreenProps = NativeStackNavigationProp<RootStackParam, 'SignIn'>

export function SignIn() {
  const { signIn, loading } = useAuth()

  async function handleNavigation() {
    try {
      await signIn()
    } catch (error) {
      // Alert.alert(error)
    }
  }

  return (
    <Gradient>
      <S.Container>
        <S.Hero source={IllustrationImg} resizeMode="stretch" />

        <S.Content>
          <S.Title>
            Conecte-se {`\n`} e organize suas {`\n`}
            jogatinas
          </S.Title>

          <S.Subtitle>
            Crie grupos para jogar seus games {`\n`}
            favoritos com seus amigos
          </S.Subtitle>

          {loading ? (
            <ActivityIndicator color={theme.colors.primary} />
          ) : (
            <ButtonIcon
              title="Entrar com Discord"
              activeOpacity={0.7}
              onPress={handleNavigation}
            />
          )}
        </S.Content>
      </S.Container>
    </Gradient>
  )
}
