import React from 'react'

import { theme } from '../../global/styles/theme'

import * as S from './styles'

type AvatarProps = {
  urlImage: string
}

export function Avatar({ urlImage }: AvatarProps) {
  return (
    <S.GradientContainer
      colors={[`${theme.colors.brand400}`, `${theme.colors.brand500}`]}
    >
      <S.Avatar source={{ uri: urlImage }} />
    </S.GradientContainer>
  )
}
