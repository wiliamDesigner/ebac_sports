// src/components/Produto.tsx
import { Produto as ProdutoType } from '../App'

type Props = {
  produtos: ProdutoType[] // Alterando para 'produto' (mais semântico e direto)
  favoritar: (produto: ProdutoType) => void
  adicionarAoCarrinho: (produto: ProdutoType) => void
  estaNosFavoritos: (produto: ProdutoType) => boolean
}

const Produto = ({
  produto,
  favoritar,
  adicionarAoCarrinho,
  estaNosFavoritos
}: Props) => {
  return (
    <div>
      <h3>{produto.nome}</h3>
      <button onClick={() => favoritar(produto)}>
        {estaNosFavoritos(produto)
          ? 'Remover dos Favoritos'
          : 'Adicionar aos Favoritos'}
      </button>
      <button onClick={() => adicionarAoCarrinho(produto)}>
        Adicionar ao Carrinho
      </button>
    </div>
  )
}

export default Produto
