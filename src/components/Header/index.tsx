import React, { ReactNode } from 'react'
import { Pressable, View } from 'react-native'

import { Feather } from '@expo/vector-icons'

import { theme } from '../../global/styles/theme'
import * as S from './style'
import { useNavigation } from '@react-navigation/native'

type HeaderProps = {
  title: string
  action?: ReactNode
}

export function Header({ title, action }: HeaderProps) {
  const { brand900, brand400, heading } = theme.colors

  const navigator = useNavigation()

  function handleGoBack() {
    navigator.goBack()
  }

  return (
    <S.LinearGradientContainer colors={[brand900, brand400]}>
      <Pressable onPress={handleGoBack}>
        <Feather name="arrow-left" size={24} color={heading} />
      </Pressable>
      <S.TextTitle>{title}</S.TextTitle>
      {action && <View>{action}</View>}
    </S.LinearGradientContainer>
  )
}
