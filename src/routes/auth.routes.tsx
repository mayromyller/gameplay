import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { SignIn } from '../screens/SignIn'
import { Home } from '../screens/Home'

const Stack = createNativeStackNavigator()

export type RootStackParam = {
  Home: undefined
  SignIn: undefined
}

export function AuthRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'transparent'
        }
      }}
    >
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}
