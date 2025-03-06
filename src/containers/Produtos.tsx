import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import { useAdicionarAocarrinhoMutation, useGetFavoritosQuery, useGetprodutosQuery } from '../services/api'

import * as S from './styles'

/*type Props = {
  produtos: ProdutoType[] //array de produtos no carrinho
  favoritos: ProdutoType[] // array de produtos como favoritos
  favoritar: (produto: ProdutoType) => void
  adicionarAoCarrinho: (produto: ProdutoType) => void
}*/

const ProdutosComponent = () => {
  const { data: produtos, isLoading } = useGetprodutosQuery()
  const [adicionarAoCarrinho] = useAdicionarAocarrinhoMutation()
  const{data:favoritos}=useGetFavoritosQuery()
  

  if (isLoading) return <h2>Carregando...</h2>

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    
    return produtoEstaNosFavoritos?.some((f) => f.id === produto.id)
  }

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto
            key={produto.id}
            produto={produto}
            favoritar={favoritar}
            adicionarAoCarrinho={()=>adicionarAoCarrinho(produto)}
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
