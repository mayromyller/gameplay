import styled from 'styled-components/native'
import { theme } from '../../global/styles/theme'

export const ViewOverlay = styled.View`
  background-color: ${theme.colors.overlay};
  flex: 1;
`

export const ViewContainer = styled.View`
  flex: 1;
  margin-top: 100px;
`

export const ViewBar = styled.View`
  width: 39px;
  height: 2px;
  border-radius: 2px;
  background-color: ${theme.colors.brand300};
  align-self: center;
  margin-top: 13px;
`
