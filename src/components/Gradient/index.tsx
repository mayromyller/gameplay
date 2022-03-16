import React, { ReactNode } from 'react'
import { theme } from '../../global/styles/theme'

import * as S from './styles'

type GradientProps = {
  children: ReactNode
}

export default function Gradient({ children }: GradientProps) {
  return (
    <S.Gradient
      colors={[`${theme.colors.brand700}`, `${theme.colors.brand900}`]}
    >
      {children}
    </S.Gradient>
  )
}
