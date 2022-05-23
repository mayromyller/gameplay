import React, { useEffect, useState } from 'react'

import { FlatList } from 'react-native'
import { Divider } from '../../components/Divider'
import { Guild, GuildProps } from '../../components/Guild'

import * as S from './styles'
import { Load } from '../../components/Load/index'
import { api } from '../../services/api'

type GuildsProps = {
  handleGuildSelect: (guild: GuildProps) => void
}

function Guilds({ handleGuildSelect }: GuildsProps) {
  const [guilds, setGuilds] = useState<GuildProps[]>([])
  const [loading, setLoading] = useState(true)

  async function fetchGuilds() {
    const response = await api.get('/users/@me/guilds')

    setGuilds(response.data)
    setLoading(false)
  }

  useEffect(() => {
    fetchGuilds()
  }, [])

  return (
    <S.ViewContainer>
      {loading ? (
        <Load />
      ) : (
        <FlatList
          style={{
            width: '100%'
          }}
          data={guilds}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Guild data={item} onPress={() => handleGuildSelect(item)} />
          )}
          ItemSeparatorComponent={() => <Divider isCentered />}
          ListHeaderComponent={() => <Divider isCentered />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 40,
            paddingTop: 40
          }}
        />
      )}
    </S.ViewContainer>
  )
}

export default Guilds
