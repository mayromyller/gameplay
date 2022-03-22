import React, { useState } from 'react'

import { FlatList, View } from 'react-native'
import ButtonAdd from '../../components/ButtonAdd'
import { CategorySelect } from '../../components/CategorySelect'

import { Profile } from '../../components/Profile'

import { Container, Content, styles } from './styles'
import { ListHeader } from '../../components/ListHeader'
import { Appointment } from '../../components/Appointment'
import { Divider } from '../../components/Divider'

export function Home() {
  const [category, setCategory] = useState('')

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

  return (
    <Container>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd activeOpacity={0.7} />
      </View>

      <CategorySelect
        selectedCategory={category}
        setCategory={handleCategorySelect}
      />

      <Content>
        <ListHeader title="Partidas Agendadas" subtitle="Total 6" />

        <FlatList
          data={appointments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Appointment data={item} />}
          ItemSeparatorComponent={() => <Divider />}
          showsVerticalScrollIndicator={false}
          style={{ marginTop: 24 }}
        />
      </Content>
    </Container>
  )
}
