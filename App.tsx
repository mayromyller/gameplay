import React from 'react'
import { StatusBar } from 'react-native'

import { useFonts } from 'expo-font'
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold
} from '@expo-google-fonts/rajdhani'

import LoadingApp from 'expo-app-loading'

import { SignIn } from './src/screens/SignIn'

export default function App() {
  const [fontLoading] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  })

  if (!fontLoading) <LoadingApp />

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <SignIn />
    </>
  )
}
