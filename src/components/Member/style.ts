import styled from 'styled-components/native'
import { theme } from '../../global/styles/theme'

export const ViewContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`

export const ViewContent = styled.View``

export const TextTitle = styled.Text`
  font-family: ${theme.fonts.rajdhani700};
  font-size: 18px;
  color: ${theme.colors.heading};
`

export const ViewStatus = styled.View`
  flex-direction: row;
  align-items: center;
`

export const ViewBulletStatus = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  margin-right: 8px;
`

export const TextNameStatus = styled.Text`
  font-family: ${theme.fonts.inter400};
  font-size: 13px;
  color: ${theme.colors.highlight};
`
