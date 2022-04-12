import React from 'react'

import * as S from './style'

type Props = {
  isCentered?: boolean
}

export function Divider({ isCentered }: Props) {
  return (
    <S.ViewDivider
      style={[
        isCentered
          ? {
              marginVertical: 12
            }
          : {
              marginTop: 2,
              marginBottom: 31
            }
      ]}
    />
  )
}
