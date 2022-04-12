import React from 'react'

import { TextInputProps } from 'react-native'

import * as S from './style'

export function TextArea({ ...rest }: TextInputProps) {
  return (
    <S.TextInputContainer
      {...rest}
      style={{
        textAlignVertical: 'top'
      }}
    />
  )
}
