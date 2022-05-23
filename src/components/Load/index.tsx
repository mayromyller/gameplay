import React from 'react'

import { ActivityIndicator } from 'react-native'
import { theme } from '../../global/styles/theme'

import * as S from './style'

export function Load() {
  return (
    <S.Container>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </S.Container>
  )
}
