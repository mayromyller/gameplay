import styled from 'styled-components/native'
import { theme } from '../../global/styles/theme'
import { KeyboardAvoidingView } from 'react-native'

export const KeyboardContainer = styled(KeyboardAvoidingView)`
  flex: 1;
`

export const TextLabel = styled.Text`
  font-size: 18px;
  font-family: ${theme.fonts.rajdhani700};
  color: ${theme.colors.heading};
`

export const ViewForm = styled.View`
  padding: 0 24px;
  margin-top: 32px;
`

export const TouchableOpacityButton = styled.TouchableOpacity``

export const ViewSelect = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  height: 68px;
  border: 1px solid ${theme.colors.brand500};
  border-radius: 8px;
  padding-right: 25px;
  overflow: hidden;
`

export const ViewImage = styled.View`
  width: 64px;
  height: 68px;
  background-color: ${theme.colors.brand500};
  border: 1px;
  border-radius: 8px;
`

export const ViewSelectBody = styled.View`
  flex: 1;
  align-items: center;
`

export const ViewField = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
`

export const ViewColumn = styled.View`
  flex-direction: row;
  align-items: center;
`

export const TextDivider = styled.Text`
  color: ${theme.colors.highlight};
  font-size: 15px;
  margin: 0 4px;
  font-family: ${theme.fonts.inter500};
`

export const TextInfo = styled.Text`
  font-size: 13px;
  font-family: ${theme.fonts.inter400};
  color: ${theme.colors.highlight};
`

export const ViewFooter = styled.View`
  margin-top: 20px;
  margin-bottom: 56px;
`
