import styled from 'styled-components/native'
import { theme } from '../../global/styles/theme'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Hero = styled.Image`
  width: 100%;
  height: 360px;
`

export const Content = styled.View`
  margin-top: -40px;
  padding: 0 50px;
`

export const Title = styled.Text`
  text-align: center;
  color: ${theme.colors.heading};
  font-size: 40px;
  margin-bottom: 16px;
  font-family: ${theme.fonts.rajdhani700};
  line-height: 40px;
`

export const Subtitle = styled.Text`
  text-align: center;
  color: ${theme.colors.heading};
  font-size: 15px;
  margin-bottom: 64px;
  font-family: ${theme.fonts.inter500};
  line-height: 25px;
`
