import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import * as S from './styles'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

type Props = {
  produtos: ProdutoType[];
  favoritar: (produto: ProdutoType) => void; // Adicionado
  adicionarAoCarrinho: (produto: ProdutoType) => void; // Adicionado
  isLoading?: boolean;
};

const ProdutosComponent = ({
  produtos,
  favoritar,
  adicionarAoCarrinho,
  isLoading = false,
}: Props) => {
  // Obtém a lista de favoritos do Redux
  const favoritos = useSelector((state: RootState) => state.favoritos);

  // Função para verificar se um produto está nos favoritos
  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    return favoritos.some((f) => f.id === produto.id)
  }

  if (isLoading) return <h2>Carregando...</h2>

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

export default ProdutosComponent;