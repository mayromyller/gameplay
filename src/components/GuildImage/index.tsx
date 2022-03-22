import React from 'react'
import {} from 'react-native'
// import { theme } from '../../global/styles/theme'
import * as S from './style'

export function GuildImage() {
  const uri = 'https://github.com/mayromyller.png'
  return <S.Image source={{ uri }} resizeMode="cover" />
}
