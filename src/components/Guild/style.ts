import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'
import { theme } from '../../global/styles/theme'

export const TouchButton = styled(TouchableOpacity).attrs({
  activityOpacity: 0.7
})`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 0 24px;
`

export const ViewContent = styled.View`
  flex: 1;
  justify-content: center;
`

export const TextTitle = styled.Text`
  font-family: ${theme.fonts.rajdhani700};
  color: ${theme.colors.heading};
  font-size: 18px;
  margin-bottom: 11px;
`

export const TextInfo = styled.Text`
  font-family: ${theme.fonts.inter400};
  color: ${theme.colors.highlight};
  font-size: 13px;
  margin-bottom: 24px;
`
