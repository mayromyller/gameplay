import React from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons'

import { theme } from '../../global/styles/theme'
import { styles } from './style'

type ButtonAddProps = TouchableOpacityProps

export default function ButtonAdd({ ...rest }: ButtonAddProps) {
  return (
    <TouchableOpacity style={styles.button} {...rest}>
      <MaterialCommunityIcons
        name="plus"
        color={theme.colors.heading}
        size={24}
      />
    </TouchableOpacity>
  )
}
