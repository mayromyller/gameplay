import React from 'react'

import { TouchableOpacityProps, TouchableOpacity } from 'react-native'

import { Icon, Wrapper, Title, styles } from './styles'

import DiscordImg from '../../assets/discord.png'

type ButtonIconProps = TouchableOpacityProps & {
  title: string
}

export default function ButtonIcon({
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
      <Wrapper>
        <Icon source={DiscordImg} />
      </Wrapper>

      <Title>{title}</Title>
    </TouchableOpacity>
  )
}
