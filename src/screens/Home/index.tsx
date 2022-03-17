import React, { useState } from 'react'

import { View } from 'react-native'
import ButtonAdd from '../../components/ButtonAdd'
import { CategorySelect } from '../../components/CategorySelect'

import { Profile } from '../../components/Profile'

import { Container, styles } from './styles'

export function Home() {
  const [category, setCategory] = useState('')

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
    </Container>
  )
}
