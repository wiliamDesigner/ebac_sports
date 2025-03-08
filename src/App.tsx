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
      const favoritosSemProduto = favoritos.filter((p) => p.id !== produto.id)
      setFavoritos(favoritosSemProduto)
    } else {
      setFavoritos([...favoritos, produto])
    }
  }

  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos} />
        <Produtos
          produto={produtos}
          favoritar={favoritar}
          adicionarAoCarrinho={(produto) => {
            console.log('Adicionar ao carrinho:', produto)
          }}
        />
      </div>
    </Provider>
  )
}

export default App
