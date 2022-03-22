import styled from 'styled-components/native'
import { theme } from '../../global/styles/theme'

export const ViewContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`

export const TextTitle = styled.Text`
  font-family: ${theme.fonts.rajdhani700};
  color: ${theme.colors.heading};
  font-size: 18px;
`

export const TextSubtitle = styled.Text`
  font-family: ${theme.fonts.inter400};
  color: ${theme.colors.highlight};
  font-size: 13px;
`
