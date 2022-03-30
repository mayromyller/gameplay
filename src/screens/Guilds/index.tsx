import React from 'react'

import { FlatList } from 'react-native'
import { Divider } from '../../components/Divider'
import { Guild, GuildProps } from '../../components/Guild'

import * as S from './styles'

type GuildsProps = {
  handleGuildSelect: (guild: GuildProps) => void
}

function Guilds({ handleGuildSelect }: GuildsProps) {
  const guilds = [
    {
      id: '1',
      name: 'Lendários',
      icon: null,
      owner: true
    }
  ]

  return (
    <S.ViewContainer>
      <FlatList
        style={{
          width: '100%'
        }}
        data={guilds}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Guild data={item} onPress={() => handleGuildSelect(item)} />
        )}
        ItemSeparatorComponent={() => <Divider />}
        showsVerticalScrollIndicator={false}
      />
    </S.ViewContainer>
  )
}

export default Guilds
