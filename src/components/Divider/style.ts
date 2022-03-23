import styled from 'styled-components/native'
import { theme } from '../../global/styles/theme'

export const ViewDivider = styled.View`
  width: 78%;
  height: 1px;
  background-color: ${theme.colors.brand400};
  margin: 2px 0 32px;
  align-self: flex-end;
`
