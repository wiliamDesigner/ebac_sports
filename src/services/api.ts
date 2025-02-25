import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Produto } from '../App'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app'
  }),
  endpoints: (builder) => ({
    getprodutos: builder.query<Produto[], void>({
      query: () => 'produtos'
    }),
    getFavoritos: builder.query<Produto[], void>({
      query: () => 'favoritos'
    }),
    adicionarAocarrinho: builder.mutation<void, Produto>({
      query: (Produto) => ({
        url: 'carrinho',
        method: 'post',
        body: Produto
      })
    })
  })
})

export const {
  useGetprodutosQuery,
  useGetFavoritosQuery,
  useAdicionarAocarrinhoMutation
} = api

export default api
