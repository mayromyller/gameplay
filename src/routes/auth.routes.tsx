import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '../screens/Home'
import { AppointmentDetails } from '../screens/AppointmentDetails'
import { AppointmentCreate } from '../screens/AppointmentCreate'

const Stack = createNativeStackNavigator()

export type RootStackParam = {
  Home: undefined
  SignIn: undefined
  AppointmentDetails: undefined
  AppointmentCreate: undefined
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
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AppointmentDetails" component={AppointmentDetails} />
      <Stack.Screen name="AppointmentCreate" component={AppointmentCreate} />
    </Stack.Navigator>
  )
}
