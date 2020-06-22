import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';

import Tarefa from './Tarefa';

const ListaDeTarefas = ({tarefas}) => {
  return (
    <View style={styles.listaTarefas}>
      {tarefas.map((tarefa, index) => (
        <Tarefa key={index} tarefa={tarefa} />
      ))}
    </View>
  );
};

const styles = {
  listaTarefas: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#000',
  },
};

const mapStateToProps = (store) => {
  return {
    tarefas: store.tarefas,
  };
};

export default connect(mapStateToProps)(ListaDeTarefas);
