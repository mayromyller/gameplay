import React from 'react'

import { View } from 'react-native'

import { Profile } from '../../components/Profile'

import { Container, styles } from './styles'

export function Home() {
  return (
    <Container>
      <View style={styles.header}>
        <Profile />
      </View>
    </Container>
  )
}
