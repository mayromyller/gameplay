import React from 'react'

import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import Gradient from '../../components/Gradient'
import { Header } from '../../components/Header'

import { Fontisto } from '@expo/vector-icons'

import { theme } from '../../global/styles/theme'

import BannerImg from '../../assets/banner.png'

import * as S from './style'
import { ListHeader } from '../../components/ListHeader'
import { Member } from '../../components/Member'
import { Divider } from '../../components/Divider'
import ButtonIcon from '../../components/ButtonIcon'

export function AppointmentDetails() {
  const members = [
    {
      id: '1',
      username: 'Mayro',
      avatar_url: 'https://github.com/mayromyller.png',
      status: 'online'
    },
    {
      id: '2',
      username: 'Mayro',
      avatar_url: 'https://github.com/mayromyller.png',
      status: 'offline'
    }
  ]

  return (
    <Gradient>
      <S.ViewContainer>
        <Header
          title="Detalhes"
          action={
            <TouchableOpacity>
              <Fontisto name="share" size={24} color={theme.colors.primary} />
            </TouchableOpacity>
          }
        />

        <S.ImageBackgroundStyle source={BannerImg}>
          <S.ViewContent>
            <S.TextTitle>Lendários</S.TextTitle>
            <S.TextSubtitle>
              É hoje que vamos chegar ao challenger sem perde uma partida da
              md10
            </S.TextSubtitle>
          </S.ViewContent>
        </S.ImageBackgroundStyle>

        <S.ViewWrapper>
          <ListHeader title="Jogadores" subtitle="Total 3" />

          <FlatList
            data={members}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Member data={item} />}
            ItemSeparatorComponent={() => <Divider />}
            style={{ marginTop: 27 }}
          />
        </S.ViewWrapper>
      </S.ViewContainer>
      <S.ViewContainerButton>
        <ButtonIcon title="Entrar na partida" />
      </S.ViewContainerButton>
    </Gradient>
  )
}
