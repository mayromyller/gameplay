import React from 'react'
import { View } from 'react-native'
import { Avatar } from '../Avatar'

import * as S from './styles'

export function Profile() {
  return (
    <S.Container>
      <Avatar urlImage="https://github.com/mayromyller.png" />

      <View>
        <S.User>
          <S.lightUserName>Olá,</S.lightUserName>
          <S.UseName>Mmdev</S.UseName>
        </S.User>

        <S.Status>Hoje é dia de vitória</S.Status>
      </View>
    </S.Container>
  )
}
