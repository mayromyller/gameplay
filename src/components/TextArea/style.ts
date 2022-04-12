import { TextInput } from 'react-native'
import styled from 'styled-components/native'
import { theme } from '../../global/styles/theme'

export const TextInputContainer = styled(TextInput)`
  width: 100%;
  height: 95px;
  background-color: ${theme.colors.brand400};
  color: ${theme.colors.heading};
  border-radius: 8px;
  font-family: ${theme.fonts.inter400};
  font-size: 13px;
  margin-right: 4px;
  padding: 16px;
`
