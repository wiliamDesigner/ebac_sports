import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Produto } from '../../App';

type CarrinhoState = {
  itens: Produto[]; // Array de produtos no carrinho
  favoritos: Produto[]; // Array de produtos favoritos
};

const initialState: CarrinhoState = {
  itens: [], // Carrinho começa vazio
  favoritos: [], // Lista de favoritos começa vazia
};

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    // Adiciona um produto ao carrinho
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload;
      const produtoJaAdicionado = state.itens.find((p) => p.id === produto.id)

      if (produtoJaAdicionado) {
        alert('Item já adicionado ao carrinho')
      } else {
        state.itens.push(produto)
      }
    }

    // Remove um produto do carrinho
    remover: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      state.itens = state.itens.filter((p) => p.id !== id)
    },

    // Adiciona ou remove um produto dos favoritos
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload;
      const produtoJaFavoritado = state.favoritos.find((p) => p.id === produto.id)

      if (produtoJaFavoritado) {
        // Remove dos favoritos
        state.favoritos = state.favoritos.filter((p) => p.id !== produto.id)
      } else {
        // Adiciona aos favoritos
        state.favoritos.push(produto)
      }
    }
  }
})

// Exporta as actions
export const { adicionar, remover, favoritar } = carrinhoSlice.actions

// Exporta o reducer
export default carrinhoSlice.reducer