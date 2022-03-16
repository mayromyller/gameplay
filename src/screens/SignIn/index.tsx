import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParam } from '../../routes/auth.routes'

import IllustrationImg from '../../assets/illustration.png'

import ButtonIcon from '../../components/ButtonIcon'

import * as S from './styles'

type HomeScreenProps = NativeStackNavigationProp<RootStackParam, 'SignIn'>

export function SignIn() {
  const navigation = useNavigation<HomeScreenProps>()

  return (
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

        <ButtonIcon
          title="Entrar com Discord"
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Home')}
        />
      </S.Content>
    </S.Container>
  )
}
