// src/App.tsx
import { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const [produtos, setProdutos] = useState<Produto[]>([])
  const [favoritos, setFavoritos] = useState<Produto[]>([])
  const [carrinho, setCarrinho] = useState<Produto[]>([])

  useEffect(() => {
    //para verificar no console log se o carrinho etsa sendo atualizado e esta.
    console.log('🛒 Carrinho atualizado:', carrinho)
  }, [carrinho])

  // Carrega os produtos da API
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/ebac_sports')
      .then((res) => res.json())
      .then((res) => {
        setProdutos(res)
        console.log(res)
      })
  }, [])

  // Função para favoritar/desfavoritar um produto
  const favoritar = (produto: Produto) => {
    if (favoritos.find((p) => p.id === produto.id)) {
      setFavoritos(favoritos.filter((p) => p.id !== produto.id))
    } else {
      setFavoritos([...favoritos, produto])
    }
  }

  // Função para adicionar/remover do carrinho
  const adicionarAoCarrinho = (produto: Produto) => {
    if (carrinho.find((p) => p.id === produto.id)) {
      setCarrinho(carrinho.filter((p) => p.id !== produto.id))
    } else {
      setCarrinho([...carrinho, produto])
    }
  }

  // Função para verificar se o produto está no carrinho
  const estaNoCarrinho = (produto: Produto) => {
    return carrinho.some((p) => p.id === produto.id)
  }

  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos
          produtos={produtos}
          favoritar={favoritar}
          adicionarAoCarrinho={adicionarAoCarrinho}
          estaNosFavoritos={(produto) =>
            favoritos.some((fav) => fav.id === produto.id)
          }
          estaNoCarrinho={estaNoCarrinho} // Passando a função para verificar se está no carrinho
        />
      </div>
    </Provider>
  )
}

export default App
