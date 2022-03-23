import styled from 'styled-components/native'

import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import { LinearGradient } from 'expo-linear-gradient'
import { theme } from '../../global/styles/theme'

export const LinearGradientContainer = styled(LinearGradient)`
  width: 100%;
  height: 104px;
  margin-top: ${getStatusBarHeight() + 'px'};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
`

export const TextTitle = styled.Text`
  flex: 1;
  text-align: center;
  font-family: ${theme.fonts.rajdhani700};
  color: ${theme.colors.heading};
  font-size: 20px;
`
