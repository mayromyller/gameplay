import React, { useEffect, useState } from 'react'

import {
  Alert,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  Platform,
  Share
} from 'react-native'

import { Fontisto } from '@expo/vector-icons'
import { useRoute } from '@react-navigation/native'
import * as Linking from 'expo-linking'

import { api } from '../../services/api'

import BannerImg from '../../assets/banner.png'

import { Header } from '../../components/Header'
import Gradient from '../../components/Gradient'
import { ListHeader } from '../../components/ListHeader'
import { Member, MemberProps } from '../../components/Member'
import { Divider } from '../../components/Divider'
import ButtonIcon from '../../components/ButtonIcon'
import { AppointmentProps } from '../../components/Appointment'
import { Load } from '../../components/Load'

import { theme } from '../../global/styles/theme'
import * as S from './style'

type Params = {
  guildSelected: AppointmentProps
}

type GuildWidget = {
  id: string
  name: string
  instant_invite: string
  members: MemberProps[]
  presence_count: number
}

export function AppointmentDetails() {
  const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget)
  const [loading, setLoading] = useState(false)
  const route = useRoute()
  const { guildSelected } = route.params as Params

  function handleShareInvite() {
    const message =
      Platform.OS === 'ios'
        ? `Junte-se a ${guildSelected.guild.name}`
        : widget.instant_invite

    Share.share({
      message,
      url: widget.instant_invite
    })
  }

  async function fetchGuildWidget() {
    try {
      setLoading(true)
      const response = await api.get(
        `/guilds/${guildSelected.guild.id}/widget.json`
      )
      setWidget(response.data)
    } catch (error) {
      Alert.alert(
        'Widget',
        'Verifique as configurações do servidor. Veja se o Widget está ativado!'
      )
    } finally {
      setLoading(false)
    }
  }

  function handleOpenGuild() {
    Linking.openURL(widget.instant_invite)
  }

  useEffect(() => {
    fetchGuildWidget()
  }, [])

  return (
    <Gradient>
      <S.ViewContainer>
        <Header
          title="Detalhes"
          action={
            guildSelected.guild.owner && (
              <TouchableOpacity onPress={handleShareInvite}>
                <Fontisto name="share" size={24} color={theme.colors.primary} />
              </TouchableOpacity>
            )
          }
        />

        <S.ImageBackgroundStyle source={BannerImg}>
          <S.ViewContent>
            <S.TextTitle>{guildSelected.guild.name}</S.TextTitle>
            <S.TextSubtitle>{guildSelected.description}</S.TextSubtitle>
          </S.ViewContent>
        </S.ImageBackgroundStyle>

        {loading ? (
          <Load />
        ) : (
          <S.ViewWrapper>
            <ListHeader title="Jogadores" subtitle={`Total `} />

            <FlatList
              data={widget.members}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <Member data={item} />}
              ItemSeparatorComponent={() => <Divider />}
              style={{ marginTop: 27 }}
            />
          </S.ViewWrapper>
        )}
      </S.ViewContainer>
      <S.ViewContainerButton>
        {guildSelected.guild.owner && (
          <ButtonIcon onPress={handleOpenGuild} title="Entrar na partida" />
        )}
      </S.ViewContainerButton>
    </Gradient>
  )
}
