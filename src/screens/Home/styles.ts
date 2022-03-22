import { StyleSheet } from 'react-native'

import styled from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const Container = styled.View`
  flex: 1;
`

export const Content = styled.View`
  margin-top: 40px;
  padding: 0 24px;
`

export const styles = StyleSheet.create({
  header: {
    width: '100%',
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: getStatusBarHeight() + 26,
    marginBottom: 42
  }
})
