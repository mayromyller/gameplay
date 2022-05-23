import React from 'react'

import { discordConfig } from '../../config'

import DiscordSVG from '../../assets/discord.svg'

import * as S from './style'
import { theme } from '../../global/styles/theme'

type ImageProps = {
  guildId: string
  iconId: string | null
}

export function GuildImage({ guildId, iconId }: ImageProps) {
  const uri = `${discordConfig.CDN_IMAGE}/icons/${guildId}/${iconId}.png`

  return (
    <S.Container
      style={{
        backgroundColor: guildId ? 'transparent' : theme.colors.discord
      }}
    >
      {iconId ? (
        <S.Image source={{ uri }} resizeMode="cover" />
      ) : (
        <DiscordSVG height={40} width={40} />
      )}
    </S.Container>
  )
}
