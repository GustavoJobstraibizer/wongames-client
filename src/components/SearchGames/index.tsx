import { useDebounce } from '@react-hook/debounce'
import { LoaderCircle } from '@styled-icons/boxicons-regular'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import GameCard, { GameCardProps } from 'components/GameCard'
import TextField from 'components/TextField'
import {
  QuerySearchGames,
  QuerySearchGamesVariables
} from 'graphql/generated/QuerySearchGames'
import { QUERY_SEARCH_GAMES } from 'graphql/queries/games'
import { useEffect, useState } from 'react'
import { initializeApollo } from 'utils/apollo'
import { gamesMapper } from 'utils/mappers'
import * as S from './styles'

const apolloClient = initializeApollo()

const SearchGames = () => {
  const [loading, setLoading] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const [items, setItems] = useState<GameCardProps[]>([])
  const [searchTerm, setSearchTerm] = useDebounce<string>('', 500)

  useEffect(() => {
    const fetchGames = async () => {
      if (!searchTerm) {
        setIsOpen(false)
        setItems([])
        return
      }

      if (searchTerm.length >= 3) {
        setLoading(true)
        setIsOpen(true)

        const { data } = await apolloClient.query<
          QuerySearchGames,
          QuerySearchGamesVariables
        >({
          query: QUERY_SEARCH_GAMES,
          variables: {
            limit: 5,
            start: 0,
            sort: 'price:desc',
            where: { name_contains: searchTerm }
          }
        })

        setLoading(false)

        if (data?.games) {
          setItems(gamesMapper(data?.games))
        }
      }
    }

    fetchGames()
  }, [searchTerm])

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Overlay aria-hidden={isOpen} onClick={() => setIsOpen(!isOpen)} />
      <TextField
        placeholder="Informe o nome do jogo..."
        icon={<SearchIcon aria-label="Search" />}
        name="search"
        type="search"
        onInputChange={(v) => setSearchTerm(v as string)}
      />

      <S.SearchContent isOpen={isOpen}>
        {!loading && items?.length > 0 && (
          <S.Content>
            {items?.map((item) => (
              <GameCard key={item.title} {...item} />
            ))}
          </S.Content>
        )}

        {loading && (
          <S.IconWrapper>
            <LoaderCircle aria-label="Carregando..." />
          </S.IconWrapper>
        )}

        {!loading && !items?.length && (
          <S.Message>
            Nenhum jogo encontrado com o termo `{searchTerm}`
          </S.Message>
        )}
      </S.SearchContent>
    </S.Wrapper>
  )
}

export default SearchGames
