import React, { useState, useCallback } from 'react'

import { FlatList, View } from 'react-native'
import ButtonAdd from '../../components/ButtonAdd'
import { CategorySelect } from '../../components/CategorySelect'

import { Profile } from '../../components/Profile'

import AsyncStorage from '@react-native-async-storage/async-storage'

import { Container, Content, styles } from './styles'
import { ListHeader } from '../../components/ListHeader'
import { Appointment, AppointmentProps } from '../../components/Appointment'
import { Divider } from '../../components/Divider'
import Gradient from '../../components/Gradient'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParam } from '../../routes/auth.routes'
import { COLLECTION_APPOINTMENTS } from '../../config/database'
import { Load } from '../../components/Load'

type HomeScreenProps = NativeStackNavigationProp<
  RootStackParam,
  'AppointmentDetails'
>

export function Home() {
  const [category, setCategory] = useState('')
  const [loading, setLoading] = useState(true)
  const [appointments, setAppointments] = useState<AppointmentProps[]>([])

  const navigation = useNavigation<HomeScreenProps>()

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId)
  }

  const handleAppointmentDetails = (guildSelected: AppointmentProps) =>
    navigation.navigate('AppointmentDetails', { guildSelected })

  const handleAppointmentCreate = () => navigation.navigate('AppointmentCreate')

  const loadAppointments = async () => {
    const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS)
    const appointment: AppointmentProps[] = storage ? JSON.parse(storage) : []

    if (category) {
      setAppointments(appointment.filter((item) => item.category === category))
    } else {
      setAppointments(appointment)
    }

    setLoading(false)
  }

  useFocusEffect(
    useCallback(() => {
      loadAppointments()
    }, [category])
  )

  return (
    <Gradient>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd activeOpacity={0.7} onPress={handleAppointmentCreate} />
      </View>

      <CategorySelect
        selectedCategory={category}
        setCategory={handleCategorySelect}
      />

      {loading ? (
        <Load />
      ) : (
        <>
          <Content>
            <ListHeader
              title="Partidas Agendadas"
              subtitle={`Total ${appointments.length}`}
            />
          </Content>

          <FlatList
            data={appointments}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Appointment
                data={item}
                onPress={() => handleAppointmentDetails(item)}
              />
            )}
            ItemSeparatorComponent={() => <Divider />}
            showsVerticalScrollIndicator={false}
            style={{ marginTop: 24, paddingHorizontal: 24 }}
            contentContainerStyle={{
              paddingBottom: 40
            }}
          />
        </>
      )}
    </Gradient>
  )
}
