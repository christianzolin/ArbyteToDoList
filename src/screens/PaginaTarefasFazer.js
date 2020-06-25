import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { View, Text, AsyncStorage } from 'react-native'
import BotaoAdicionar from '../components/BotaoAdicionar';
import EntradaDeTexto from '../components/EntradaDeTexto';
import ListaDeTarefas from '../components/ListaDeTarefas';
import { adicionarTarefa } from '../actions/tarefas'

const PaginaTarefasFazer = ({dispatch}) => {


    return (
        <View>
            <BotaoAdicionar />
            <EntradaDeTexto />
            <ListaDeTarefas />
        </View>
    )
}

const mapStateToProps = (store) => {
    return {
        tarefas: store.adicionarTarefa.tarefas
    };
};

export default connect(mapStateToProps)(PaginaTarefasFazer);
