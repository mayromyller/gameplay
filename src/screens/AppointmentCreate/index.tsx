import React, { useState } from 'react'

import { View, ScrollView, Platform } from 'react-native'

import Gradient from '../../components/Gradient'
import { CategorySelect } from '../../components/CategorySelect'
import { Header } from '../../components/Header'
import { GuildImage } from '../../components/GuildImage'
import { SmallInput } from '../../components/SmallInput'
import { TextArea } from '../../components/TextArea/index'

import { theme } from '../../global/styles/theme'

import { Feather } from '@expo/vector-icons'

import Button from '../../components/Button'
import { ModalView } from '../../components/ModalView'
import Guilds from '../Guilds'
import { GuildProps } from '../../components/Guild'

import * as S from './style'

export function AppointmentCreate() {
  const [category, setCategory] = useState('')
  const [openModal, setOpenModal] = useState(false)
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps)

  const handleOpenModal = () => setOpenModal(true)

  const handleGuildSelect = (guildSelect: GuildProps) => {
    setGuild(guildSelect)
    setOpenModal(false)
  }

  return (
    <Gradient>
      <Header title="Agendar partida" />
      <S.KeyboardContainer
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      >
        <ScrollView>
          <S.TextLabel
            style={{
              marginTop: 36,
              marginLeft: 24,
              marginBottom: 18
            }}
          >
            Categoria
          </S.TextLabel>

          <CategorySelect
            hasCheckbox
            setCategory={setCategory}
            selectedCategory={category}
          />

          <S.ViewForm>
            <S.TouchableOpacityButton onPress={handleOpenModal}>
              <S.ViewSelect>
                {guild.name ? <GuildImage /> : <S.ViewImage />}

                <S.ViewSelectBody>
                  <S.TextLabel>
                    {guild.name ? guild.name : 'Selecione um Servidor'}
                  </S.TextLabel>
                </S.ViewSelectBody>

                <Feather
                  name="chevron-right"
                  color={theme.colors.heading}
                  size={18}
                />
              </S.ViewSelect>
            </S.TouchableOpacityButton>

            <S.ViewField>
              <View>
                <S.TextLabel>Dia e mês</S.TextLabel>
                <S.ViewColumn>
                  <SmallInput maxLength={2} />
                  <S.TextDivider>/</S.TextDivider>
                  <SmallInput maxLength={2} />
                </S.ViewColumn>
              </View>
              <View>
                <S.TextLabel>Hora e minuto</S.TextLabel>
                <S.ViewColumn>
                  <SmallInput maxLength={2} />
                  <S.TextDivider>:</S.TextDivider>
                  <SmallInput maxLength={2} />
                </S.ViewColumn>
              </View>
            </S.ViewField>

            <S.ViewField style={{ marginBottom: 16 }}>
              <S.TextLabel>Descrição</S.TextLabel>
              <S.TextInfo>Max 100 caracteres</S.TextInfo>
            </S.ViewField>

            <TextArea
              multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}
            />

            <S.ViewFooter>
              <Button title="Agendar" />
            </S.ViewFooter>
          </S.ViewForm>
        </ScrollView>

        <ModalView visible={openModal}>
          <Guilds handleGuildSelect={handleGuildSelect} />
        </ModalView>
      </S.KeyboardContainer>
    </Gradient>
  )
}
