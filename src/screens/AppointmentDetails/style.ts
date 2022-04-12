import styled from 'styled-components/native'
import { theme } from '../../global/styles/theme'

import { getBottomSpace } from 'react-native-iphone-x-helper'

export const ViewContainer = styled.View`
  flex: 1;
`

export const ImageBackgroundStyle = styled.ImageBackground`
  width: 100%;
  height: 234px;
`

export const ViewContent = styled.View`
  flex: 1;
  justify-content: flex-end;
  padding: 0 24px;
  margin-bottom: 30px;
`

export const TextTitle = styled.Text`
  font-size: 28px;
  font-family: ${theme.fonts.rajdhani700};
  color: ${theme.colors.heading};
`

export const TextSubtitle = styled.Text`
  font-size: 13px;
  font-family: ${theme.fonts.inter400};
  color: ${theme.colors.heading};
  line-height: 21px;
`

export const ViewWrapper = styled.View`
  padding: 0 24px;
`

export const ViewContainerButton = styled.View`
  padding: 20px 24px;
  margin-bottom: ${getBottomSpace() + 'px'};
`
