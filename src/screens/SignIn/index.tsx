import { StatusBar } from 'react-native'
import React from 'react'

import IllustrationImg from '../../assets/illustration.png'

import * as S from './styles'
import ButtonIcon from '../../components/ButtonIcon'

export function SignIn() {
  return (
    <S.Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <S.Hero source={IllustrationImg} resizeMode="stretch" />

      <S.Content>
        <S.Title>
          Organize {`\n`}
          suas jogatinas {`\n`}
          facilmente
        </S.Title>

        <S.Subtitle>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </S.Subtitle>

        <ButtonIcon title="Entrar com Discord" activeOpacity={0.7} />
      </S.Content>
    </S.Container>
  )
}
