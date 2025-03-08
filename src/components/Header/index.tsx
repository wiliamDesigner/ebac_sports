import { useSelector } from 'react-redux'
import * as S from './styles'
import { Produto } from '../../App'
import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { RootState } from '../../store'

type Props = {
  favoritos: Produto[]
}

const Header = ({ favoritos }: Props) => {
  // com reduz a gente irá conseguir receber isso direto sem props

  const itens = useSelector((state: RootState) => state.carrinho.itens)

  const valorTotal = itens.reduce((acc: number, item: Produto) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <img src={cesta} />
        <span>
          {itens.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
