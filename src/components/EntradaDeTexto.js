import React from 'react';
import {TextInput} from 'react-native';
import {connect} from 'react-redux';

import {atualizarConteudoCaixaDeTexto} from '../actions/tarefas';

const EntradaDeTexto = ({conteudoDaCaixaDeTexto, dispatch}) => {
  return (
    <TextInput
      style={styles.entradaDeTexto}
      value={conteudoDaCaixaDeTexto}
      onChangeText={(novoTexto) =>
        dispatch(atualizarConteudoCaixaDeTexto(novoTexto))
      }
    />
  );
};

const styles = {
  entradaDeTexto: {
    height: 100,
    borderWidth: 2,
    borderColor: '#000',
    marginVertical: 10,
  },
};

const mapStateToProps = (store) => {
  return {
    conteudoDaCaixaDeTexto: store.conteudoDaCaixaDeTexto,
  };
};

export default connect(mapStateToProps)(EntradaDeTexto);
