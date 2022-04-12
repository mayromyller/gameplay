import React, { useState } from 'react'

import { FlatList, View } from 'react-native'
import ButtonAdd from '../../components/ButtonAdd'
import { CategorySelect } from '../../components/CategorySelect'

import { Profile } from '../../components/Profile'

import { Container, Content, styles } from './styles'
import { ListHeader } from '../../components/ListHeader'
import { Appointment } from '../../components/Appointment'
import { Divider } from '../../components/Divider'
import Gradient from '../../components/Gradient'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParam } from '../../routes/auth.routes'

type HomeScreenProps = NativeStackNavigationProp<
  RootStackParam,
  'AppointmentDetails'
>

export function Home() {
  const [category, setCategory] = useState('')

  const navigation = useNavigation<HomeScreenProps>()

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/01 às 20:40h',
      description: 'É hoje que vamos vencer'
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/01 às 20:40h',
      description: 'É hoje que vamos vencer'
    }
  ]

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId)
  }

  const handleAppointmentDetails = () =>
    navigation.navigate('AppointmentDetails')

  const handleAppointmentCreate = () => navigation.navigate('AppointmentCreate')

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

      <Content>
        <ListHeader title="Partidas Agendadas" subtitle="Total 6" />
      </Content>

      <FlatList
        data={appointments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Appointment data={item} onPress={handleAppointmentDetails} />
        )}
        ItemSeparatorComponent={() => <Divider />}
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 24, paddingHorizontal: 24 }}
        contentContainerStyle={{
          paddingBottom: 40
        }}
      />
    </Gradient>
  )
}
