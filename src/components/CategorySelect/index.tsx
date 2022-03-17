import React from 'react'
import { ScrollView } from 'react-native'

import { categories } from '../../utils/categories'

import { Category } from '../Category'

import { styles } from './style'

type CategorySelectSelectProps = {
  selectedCategory: string
  setCategory: (categoryId: string) => void
}

export function CategorySelect({
  selectedCategory,
  setCategory
}: CategorySelectSelectProps) {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map((category) => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          checked={category.id === selectedCategory}
          onPress={() => setCategory(category.id)}
        />
      ))}
    </ScrollView>
  )
}
