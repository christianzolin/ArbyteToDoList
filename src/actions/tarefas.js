export const adicionarTarefa = (tarefa) => {
  return {
    type: 'ADICIONAR_TAREFA',
    tarefa,
  };
};

export const atualizarConteudoCaixaDeTexto = (texto) => {
  return {
    type: 'ATUALIZAR_CONTEUDO_CAIXA_DE_TEXTO',
    texto,
  };
};
