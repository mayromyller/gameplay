import React, { ReactNode } from 'react'

import { Modal, ModalProps, TouchableWithoutFeedback } from 'react-native'
import Gradient from '../Gradient'

import * as S from './style'

type ModalViewProps = ModalProps & {
  children: ReactNode
  closeModal: () => void
}

export function ModalView({ children, closeModal, ...rest }: ModalViewProps) {
  return (
    <Modal transparent animationType="slide" {...rest} statusBarTranslucent>
      <TouchableWithoutFeedback onPress={closeModal}>
        <S.ViewOverlay>
          <S.ViewContainer>
            <Gradient>
              <S.ViewBar />
              {children}
            </Gradient>
          </S.ViewContainer>
        </S.ViewOverlay>
      </TouchableWithoutFeedback>
    </Modal>
  )
}
