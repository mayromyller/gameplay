import 'react-native-gesture-handler'

import React from 'react'
import { StatusBar } from 'react-native'

import { useFonts } from 'expo-font'
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold
} from '@expo-google-fonts/rajdhani'

import AppLoading from 'expo-app-loading'

import { Routes } from './src/routes'

import Gradient from './src/components/Gradient'

export default function App() {
  const [fontLoading] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  })

  if (!fontLoading) {
    return <AppLoading />
  }

  return (
    <Gradient>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </Gradient>
  )
}
