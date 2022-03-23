import React from 'react'
import { ScrollView } from 'react-native'

import { categories } from '../../utils/categories'

import { Category } from '../Category'

import { styles } from './style'

type CategorySelectSelectProps = {
  selectedCategory: string
  setCategory: (categoryId: string) => void
  hasCheckbox?: boolean
}

export function CategorySelect({
  selectedCategory,
  setCategory,
  hasCheckbox = false
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
          hasCheckbox={hasCheckbox}
          checked={category.id === selectedCategory}
          onPress={() => setCategory(category.id)}
        />
      ))}
    </ScrollView>
  )
}
