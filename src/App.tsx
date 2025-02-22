import { useEffect, useState } from 'react'
import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle } from './styles'
import { Provider } from 'react-redux'
import { store } from './store'

import { useDispatch } from 'react-redux'
import { adicionar } from './store/carrinho'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const dispatch = useDispatch()

  const [produtos, setProdutos] = useState<Produto[]>([])
  // const [carrinho, setCarrinho] = useState<Produto[]>([])
  const [favoritos, setFavoritos] = useState<Produto[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/ebac_sports')
      .then((res) => res.json())
      .then((res) => setProdutos(res))
  }, [])

  function adicionarAoCarrinho(produto: Produto) {
    dispatch(adicionar(produto))
  }

  function favoritar(produto: Produto) {
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
          key={produto.id}
          produtos={produtos}
          favoritar={favoritar}
          adicionarAoCarrinho={adicionarAoCarrinho}
          estaNosFavoritos={produtoEstaNosFavoritos(produto)}
        />
      </div>
    </Provider>
  )
}

export default App
