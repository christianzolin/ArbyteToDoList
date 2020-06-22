const estadoInicial = {
  tarefas: [],
};
export const adicionarTarefa = (state = estadoInicial, action) => {
  switch (action.type) {
    case 'ADICIONAR_TAREFA':
      return {...state, tarefas: [...state.tarefas, action.tarefa]};
    case 'ATUALIZAR_CONTEUDO_CAIXA_DE_TEXTO':
      return {...state, conteudoDaCaixaDeTexto: action.texto};
    default:
      return state;
  }
};
