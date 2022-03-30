import React from 'react'

import { TouchableOpacityProps, TouchableOpacity } from 'react-native'

import { Title, styles } from './styles'

type ButtonIconProps = TouchableOpacityProps & {
  title: string
}

export default function Button({
  title,
  activeOpacity,
  ...rest
}: ButtonIconProps) {
  return (
    <TouchableOpacity
      style={styles.ButtonContainer}
      activeOpacity={activeOpacity}
      {...rest}
    >
      <Title>{title}</Title>
    </TouchableOpacity>
  )
}
