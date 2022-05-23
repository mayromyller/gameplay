import React, { useState } from 'react'

import { View, ScrollView, Platform } from 'react-native'

import uuid from 'react-native-uuid'
import AsyncStorage from '@react-native-async-storage/async-storage'

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
import { COLLECTION_APPOINTMENTS } from '../../config/database'
import { RootStackParam } from '../../routes/auth.routes'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'

type AppointmentCreateNavigationProps = NativeStackNavigationProp<
  RootStackParam,
  'AppointmentDetails'
>

export function AppointmentCreate() {
  const [category, setCategory] = useState('')
  const [openModal, setOpenModal] = useState(false)
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps)

  const [minute, setMinute] = useState('')
  const [hour, setHour] = useState('')
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [description, setDescription] = useState('')

  const navigation = useNavigation<AppointmentCreateNavigationProps>()

  const handleOpenModal = () => setOpenModal(true)
  const handleCloseModal = () => setOpenModal(false)

  const handleGuildSelect = (guildSelect: GuildProps) => {
    setGuild(guildSelect)
    setOpenModal(false)
  }

  const handleSave = async () => {
    const newAppointment = {
      id: uuid.v4(),
      guild,
      category,
      date: `${day}/${month} as ${hour}:${minute}h`,
      description
    }

    const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS)
    const appointments = storage ? JSON.parse(storage) : []

    await AsyncStorage.setItem(
      COLLECTION_APPOINTMENTS,
      JSON.stringify([...appointments, newAppointment])
    )

    navigation.navigate('Home')
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
                {guild.name ? (
                  <GuildImage guildId={guild.id} iconId={guild.icon} />
                ) : (
                  <S.ViewImage />
                )}

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
                  <SmallInput maxLength={2} onChangeText={setDay} />
                  <S.TextDivider>/</S.TextDivider>
                  <SmallInput maxLength={2} onChangeText={setMonth} />
                </S.ViewColumn>
              </View>
              <View>
                <S.TextLabel>Hora e minuto</S.TextLabel>
                <S.ViewColumn>
                  <SmallInput maxLength={2} onChangeText={setHour} />
                  <S.TextDivider>:</S.TextDivider>
                  <SmallInput maxLength={2} onChangeText={setMinute} />
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
              onChangeText={setDescription}
            />

            <S.ViewFooter>
              <Button title="Agendar" onPress={handleSave} />
            </S.ViewFooter>
          </S.ViewForm>
        </ScrollView>

        <ModalView visible={openModal} closeModal={handleCloseModal}>
          <Guilds handleGuildSelect={handleGuildSelect} />
        </ModalView>
      </S.KeyboardContainer>
    </Gradient>
  )
}
