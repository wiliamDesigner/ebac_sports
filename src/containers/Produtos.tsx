// src/components/Produto.tsx
import { Produto as ProdutoType } from '../App'

type Props = {
  produtos: ProdutoType[] // Alterando para 'produto' (mais semântico e direto)
  favoritar: (produto: ProdutoType) => void
  adicionarAoCarrinho: (produto: ProdutoType) => void
  estaNosFavoritos: (produto: ProdutoType) => boolean
  estaNoCarrinho: (produto: ProdutoType) => boolean
}
const Produto = ({
  produtos,
  favoritar,
  adicionarAoCarrinho,
  estaNosFavoritos,
  estaNoCarrinho
}: Props) => {
  return (
    <>
      {produtos.map((produto) => (
        <div key={produto.id}>
          <h3>{produto.nome}</h3>
          <button onClick={() => favoritar(produto)}>
            {estaNosFavoritos(produto)
              ? 'Remover dos Favoritos'
              : 'Adicionar aos Favoritos'}
          </button>
          <button onClick={() => adicionarAoCarrinho(produto)}>
            {estaNoCarrinho(produto)
              ? 'Remover do Carrinho'
              : 'Adicionar ao Carrinho'}
            Adiciona ao Carrinho
          </button>
        </div>
      ))}
    </>
  )
}

export default Produto
