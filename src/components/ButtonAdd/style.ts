import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
  button: {
    height: 48,
    width: 48,
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
