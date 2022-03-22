import React from 'react'

import * as S from './style'

type ListHeaderProps = {
  title: string
  subtitle: string
}

export function ListHeader({ title, subtitle }: ListHeaderProps) {
  return (
    <S.ViewContainer>
      <S.TextTitle>{title}</S.TextTitle>

      <S.TextSubtitle>{subtitle}</S.TextSubtitle>
    </S.ViewContainer>
  )
}
