import React from 'react'
import {} from 'react-native'
import { theme } from '../../global/styles/theme'
import { Avatar } from '../Avatar'
// import { theme } from '../../global/styles/theme'
import * as S from './style'

export type MemberProps = {
  id: string
  username: string
  avatar_url: string
  status: string
}

type DataProps = {
  data: MemberProps
}

export function Member({ data }: DataProps) {
  const isOnline = data.status === 'online'
  const { on, primary } = theme.colors

  return (
    <S.ViewContainer>
      <Avatar urlImage={data.avatar_url} />
      <S.ViewContent>
        <S.TextTitle>{data.username}</S.TextTitle>

        <S.ViewStatus>
          <S.ViewBulletStatus
            style={{
              backgroundColor: isOnline ? on : primary
            }}
          />
          <S.TextNameStatus>
            {isOnline ? 'Disponível' : 'Ocupado'}
          </S.TextNameStatus>
        </S.ViewStatus>
      </S.ViewContent>
    </S.ViewContainer>
  )
}
