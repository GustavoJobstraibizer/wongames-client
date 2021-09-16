import { ApolloClient, HttpLink, NormalizedCacheObject } from '@apollo/client'
import { useMemo } from 'react'
import apolloCache from './apolloCache'

const isSSR = typeof window === 'undefined'

let apolloClient: ApolloClient<NormalizedCacheObject | null>

function createApolloClient() {
  return new ApolloClient({
    ssrMode: isSSR,
    link: new HttpLink({ uri: 'http://localhost:1337/graphql' }),
    cache: apolloCache
  })
}

export function initializeApollo(initialState = null) {
  // Verifica se ja existe uma instancia, se nao existir
  // cria uma nova se existir, usa a instancia existente
  const apolloClientGlobal = apolloClient ?? createApolloClient()

  // recupera os dados do cache
  if (initialState) {
    apolloClientGlobal.cache.restore(initialState)
  }

  // Inicializa no SSR com o cache limpo
  if (isSSR) return apolloClientGlobal

  apolloClient = apolloClient ?? apolloClientGlobal

  return apolloClient
}

export function useApollo(initialState = null) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}
