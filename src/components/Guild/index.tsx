import React from 'react'

import { TouchableOpacityProps, View } from 'react-native'

import { Feather } from '@expo/vector-icons'

import { GuildImage } from '../GuildImage'

import * as S from './style'
import { theme } from '../../global/styles/theme'

export type GuildProps = {
  id: string
  name: string
  icon: string | null
  owner: boolean
}

type Props = TouchableOpacityProps & {
  data: GuildProps
}

export function Guild({ data, ...rest }: Props) {
  return (
    <S.TouchButton {...rest}>
      <GuildImage guildId={data.id} iconId={data.icon} />

      <S.ViewContent>
        <View>
          <S.TextTitle>{data.name}</S.TextTitle>

          <S.TextInfo>{data.owner ? 'Admin' : 'Convidado'}</S.TextInfo>
        </View>
      </S.ViewContent>

      <Feather name="chevron-right" color={theme.colors.heading} size={24} />
    </S.TouchButton>
  )
}
