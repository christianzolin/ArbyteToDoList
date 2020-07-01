import React, {useState} from 'react';

import {Text, TouchableOpacity} from 'react-native';

const RemoverTarefa = (tarefa) => {
  return (
    <TouchableOpacity style={styles.botaoRemover}>
      <Text style={{color: '#fff', margin: 5}}>REMOVER</Text>
    </TouchableOpacity>
  );
};

const Tarefa = ({tarefa}) => {
  const [selecionada, seleciona] = useState(false);
  return (
    <TouchableOpacity
      style={styles.tarefa}
      onPress={() => seleciona(!selecionada)}>
      {selecionada && <RemoverTarefa />}
      <Text>{tarefa}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  tarefa: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingVertical: 10,
    alignItems: 'center',
  },
  botaoRemover: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#F55',
    height: 25,
    marginRight: 10,
  },
};

export default Tarefa;
