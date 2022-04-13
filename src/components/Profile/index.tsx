import React from 'react'
import { View } from 'react-native'
import { Avatar } from '../Avatar'
import { useAuth } from '../../hooks/auth'

import * as S from './styles'

export function Profile() {
  const { user } = useAuth()

  return (
    <S.Container>
      <Avatar urlImage={user.avatar} />

      <View>
        <S.User>
          <S.lightUserName>Olá,</S.lightUserName>
          <S.UseName>{user.firstName}</S.UseName>
        </S.User>

        <S.Status>Hoje é dia de vitória</S.Status>
      </View>
    </S.Container>
  )
}
