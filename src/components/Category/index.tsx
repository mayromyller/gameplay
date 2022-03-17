import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

import { View, Pressable, PressableProps } from 'react-native'

import { SvgProps } from 'react-native-svg'
import { theme } from '../../global/styles/theme'

type CategoryProps = PressableProps & {
  title: string
  icon: React.FC<SvgProps>
  checked?: boolean
}

import * as S from './style'
import { styles } from './style'

export function Category({
  title,
  icon: Icon,
  checked = false,
  ...rest
}: CategoryProps) {
  return (
    <Pressable {...rest}>
      <LinearGradient
        style={styles.container}
        colors={[`${theme.colors.brand400}`, `${theme.colors.brand500}`]}
      >
        <View style={[styles.content, { opacity: checked ? 1 : 0.5 }]}>
          <View style={checked ? styles.checked : styles.check} />
          <Icon width={48} height={48} />
          <S.Title>{title}</S.Title>
        </View>
      </LinearGradient>
    </Pressable>
  )
}
