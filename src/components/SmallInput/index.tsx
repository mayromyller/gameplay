import React from 'react'

import { TextInputProps } from 'react-native'

import * as S from './style'

export function SmallInput({ ...rest }: TextInputProps) {
  return <S.TextInputContainer keyboardType="numeric" {...rest} />
}
