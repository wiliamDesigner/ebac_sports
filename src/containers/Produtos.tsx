// src/components/Produto.tsx
import { Produto as ProdutoType } from '../App'
import ProdutoComponent from '../components/Produto/Produto'
import { Produtos } from './styles'
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
    <Produtos>
      {produtos.map((produto) => (
        <ProdutoComponent
          key={produto.id}
          produto={produto}
          estaNosFavoritos={estaNosFavoritos(produto)}
          adicionaraocarrinho={() => adicionarAoCarrinho(produto)}
          estanocarrinho={() => estaNoCarrinho(produto)}
          favoritar={() => favoritar(produto)}
        />
      ))}
    </Produtos>
  )
}

export default Produto
