import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'
import { theme } from '../../global/styles/theme'

export const ViewContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`

export const ViewContent = styled.View`
  flex: 1;
`

export const ViewHeader = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 12px;
`

export const TextTitle = styled.Text`
  font-family: ${theme.fonts.rajdhani700};
  color: ${theme.colors.heading};
  font-size: 18px;
`

export const TextCategory = styled.Text`
  font-family: ${theme.fonts.inter400};
  color: ${theme.colors.highlight};
  font-size: 13px;
  margin-right: 24px;
`

export const ViewFooter = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`

export const ViewDateInfo = styled.View`
  flex-direction: row;
  align-items: center;
`

export const ViewPlayerInfo = styled.View`
  flex-direction: row;
  align-items: center;
`

export const TextDate = styled.Text`
  font-family: ${theme.fonts.rajdhani500};
  color: ${theme.colors.heading};
  font-size: 13px;
  margin-left: 7px;
`

export const TextPlayer = styled.Text`
  font-family: ${theme.fonts.rajdhani500};
  font-size: 13px;
  margin-left: 7px;
`
