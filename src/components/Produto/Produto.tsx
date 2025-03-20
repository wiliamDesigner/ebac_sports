import { useDispatch } from 'react-redux'
import { Produto as ProdutoType } from '../../App'
import * as S from './styles' // Importando os estilos
import { adicionar, favoritar } from '../../store/reducers/carrinho'

// Função para formatar o preço em Real (se não estiver importada de outro lugar)
export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

type Props = {
  produto: ProdutoType
  estaNosFavoritos: boolean
  adicionaraocarrinho: () => void // tenho que declarar essa props para poder usar ela
  estanocarrinho: () => void // tenho que declarar essa props para poder usar ela
  favoritar: () => void // tenho que declarar essa props para poder usar ela
}

const ProdutoComponent = ({ produto, estaNosFavoritos }: Props) => {
  const dispatch = useDispatch()

  // Função para favoritar/desfavoritar um produto
  const handleFavoritar = () => {
    dispatch(favoritar(produto))
  }

  // Função para adicionar um produto ao carrinho
  const handleAdicionarAoCarrinho = () => {
    dispatch(adicionar(produto))
  }

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={handleFavoritar} type="button">
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={handleAdicionarAoCarrinho} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
