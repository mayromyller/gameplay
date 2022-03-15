import React from 'react'

import { TouchableOpacityProps } from 'react-native'

import * as S from './styles'

import DiscordImg from '../../assets/discord.png'

type ButtonIconProps = TouchableOpacityProps & {
  title: string
}

export default function ButtonIcon({ title, activeOpacity }: ButtonIconProps) {
  return (
    <S.ButtonContainer activeOpacity={activeOpacity}>
      <S.Wrapper>
        <S.Icon source={DiscordImg} />
      </S.Wrapper>

      <S.Title>{title}</S.Title>
    </S.ButtonContainer>
  )
}
