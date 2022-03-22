import React from 'react'

import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

import { categories } from '../../utils/categories'

import { GuildImage } from '../GuildImage'

import PlayerSvg from '../../assets/player.svg'
import CalendarSvg from '../../assets/calendar.svg'

import { theme } from '../../global/styles/theme'

import * as S from './style'

export type GuildProps = {
  id: string
  name: string
  icon: null
  owner: boolean
}

export type AppointmentProps = {
  id: string
  guild: GuildProps
  category: string
  date: string
  description: string
}

type ButtonProps = TouchableOpacityProps & {
  data: AppointmentProps
}

export function Appointment({ data, ...rest }: ButtonProps) {
  const [category] = categories.filter((item) => item.id === data.category)

  const { owner } = data.guild
  const { on, primary } = theme.colors

  return (
    <TouchableOpacity {...rest}>
      <S.ViewContainer>
        <GuildImage />

        <S.ViewContent>
          <S.ViewHeader>
            <S.TextTitle>{data.guild.name}</S.TextTitle>

            <S.TextTitle>{category.title}</S.TextTitle>
          </S.ViewHeader>

          <S.ViewFooter>
            <S.ViewDateInfo>
              <CalendarSvg />

              <S.TextDate>{data.date}</S.TextDate>
            </S.ViewDateInfo>

            <S.ViewPlayerInfo>
              <PlayerSvg fill={owner ? primary : on} />

              <S.TextPlayer style={{ color: owner ? primary : on }}>
                {owner ? 'Anfitrião' : 'Visitante'}
              </S.TextPlayer>
            </S.ViewPlayerInfo>
          </S.ViewFooter>
        </S.ViewContent>
      </S.ViewContainer>
    </TouchableOpacity>
  )
}
