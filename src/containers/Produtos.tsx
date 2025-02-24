import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'

import * as S from './styles'

type Props = {
  produtos: ProdutoType[] //array de produtos no carrinho
  favoritos: ProdutoType[] // array de produtos como favoritos
  favoritar: (produto: ProdutoType) => void
  adicionarAoCarrinho: (produto: ProdutoType) => void
}

const ProdutosComponent = ({
  produtos,
  favoritos,
  favoritar,
  adicionarAoCarrinho
}: Props) => {
  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const IdsDosFavoritos = favoritos.map((f) => f.id)
    return IdsDosFavoritos.includes(produtoId)
  }

  return (
    <>
      <S.Produtos>
        {produtos.map((produto) => (
          <Produto
            key={produto.id}
            produto={produto}
            favoritar={favoritar}
            adicionarAoCarrinho={adicionarAoCarrinho}
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
