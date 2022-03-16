import styled from 'styled-components/native'
import { theme } from '../../global/styles/theme'

export const Container = styled.View`
  flex-direction: row;
`

export const User = styled.View`
  flex-direction: row;
`

export const lightUserName = styled.Text`
  font-family: ${theme.fonts.rajdhani500};
  font-size: 24px;
  color: ${theme.colors.heading};
  margin-right: 6px;
`

export const UseName = styled.Text`
  font-family: ${theme.fonts.rajdhani700};
  font-size: 24px;
  color: ${theme.colors.heading};
`

export const Status = styled.Text`
  font-family: ${theme.fonts.inter400};
  color: ${theme.colors.highlight};
  font-size: 15px;
`
