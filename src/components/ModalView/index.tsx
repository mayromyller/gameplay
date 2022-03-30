import React, { ReactNode } from 'react'

import { Modal, ModalProps } from 'react-native'
import Gradient from '../Gradient'

import * as S from './style'

type ModalViewProps = ModalProps & {
  children: ReactNode
}

export function ModalView({ children, ...rest }: ModalViewProps) {
  return (
    <Modal transparent animationType="slide" {...rest}>
      <S.ViewOverlay>
        <S.ViewContainer>
          <Gradient>
            <S.ViewBar />
            {children}
          </Gradient>
        </S.ViewContainer>
      </S.ViewOverlay>
    </Modal>
  )
}
