import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

import { View, Pressable, PressableProps } from 'react-native'

import { SvgProps } from 'react-native-svg'
import { theme } from '../../global/styles/theme'

type CategoryProps = PressableProps & {
  title: string
  icon: React.FC<SvgProps>
  hasCheckbox?: boolean
  checked?: boolean
}

import * as S from './style'
import { styles } from './style'

export function Category({
  title,
  icon: Icon,
  hasCheckbox = false,
  checked = false,
  ...rest
}: CategoryProps) {
  const { brand400, brand500, brand600 } = theme.colors

  return (
    <Pressable {...rest}>
      <LinearGradient
        style={styles.container}
        colors={[`${theme.colors.brand300}`, `${theme.colors.brand400}`]}
      >
        <LinearGradient
          style={[styles.content, { opacity: checked ? 1 : 0.5 }]}
          colors={[checked ? brand600 : brand400, brand500]}
        >
          {hasCheckbox && (
            <View style={checked ? styles.checked : styles.check} />
          )}
          <Icon width={48} height={48} />
          <S.Title>{title}</S.Title>
        </LinearGradient>
      </LinearGradient>
    </Pressable>
  )
}
