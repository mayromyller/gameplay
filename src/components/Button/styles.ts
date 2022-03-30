import styled from 'styled-components/native'
import { theme } from '../../global/styles/theme'

import { StyleSheet } from 'react-native'

export const Wrapper = styled.View`
  align-items: center;
  justify-content: center;
  height: 56px;
  width: 56px;
  border-right-width: 1px;
  border-right-color: ${theme.colors.line};
`

export const Icon = styled.Image`
  height: 18px;
  width: 24px;
`

export const Title = styled.Text`
  flex: 1;
  font-size: 15px;
  text-align: center;
  color: ${theme.colors.heading};
`

export const styles = StyleSheet.create({
  ButtonContainer: {
    width: '100%',
    height: 56,
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center'
  }
})
