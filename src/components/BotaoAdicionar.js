import React from 'react';
import {TouchableOpacity, Text, AsyncStorage} from 'react-native';
import {connect} from 'react-redux';

import {
  adicionarTarefa,
  atualizarConteudoCaixaDeTexto,
} from '../actions/tarefas';

const BotaoAdicionar = ({conteudoDaCaixaDeTexto, dispatch, tarefas}) => {
  return (
    <TouchableOpacity
      style={styles.botao}
      onPress={() => {
        dispatch(adicionarTarefa(conteudoDaCaixaDeTexto));
        dispatch(atualizarConteudoCaixaDeTexto(''));
      }}>
      <Text style={styles.textoBotao}>ADICIONAR TAREFA</Text>
    </TouchableOpacity>
  );
};

const styles = {
  botao: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    color: '#FFF',
    borderRadius: 5,
    height: 50,
    marginVertical: 5,
  },
  textoBotao: {
    fontWeight: 'bold',
    color: '#FFF',
  },
};

const mapStateToProps = (store) => {
  return {
    conteudoDaCaixaDeTexto: store.conteudoDaCaixaDeTexto,
    tarefas: store.tarefas
  };
};

export default connect(mapStateToProps)(BotaoAdicionar);
