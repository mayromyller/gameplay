import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'
import { theme } from '../../global/styles/theme'

export const Title = styled.Text`
  font-family: ${theme.fonts.rajdhani500};
  font-size: 15px;
  color: ${theme.colors.heading};
`

export const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginRight: 8
  },

  content: {
    width: 100,
    height: 116,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 7,
    alignItems: 'center'
  },

  checked: {
    width: 10,
    height: 10,
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-end',
    borderColor: theme.colors.brand300,
    borderWidth: 1,
    borderRadius: 3
  },

  check: {
    width: 10,
    height: 10,
    backgroundColor: theme.colors.brand900,
    alignSelf: 'flex-end',
    borderColor: theme.colors.brand500,
    borderWidth: 1,
    borderRadius: 3
  }
})
