import React from 'react'
import { View, Text, ImageBackground, FlatList, TouchableOpacity, AsyncStorage, Button } from 'react-native'
import moment from 'moment'
import 'moment/locale/pt-br'
import imagem from '../image/imagem.png'
import ActionButton from 'react-native-action-button'
import AddTarefa from './AddTarefa'
import Tasks from '../components/Tasks'
import { connect } from 'react-redux'
import getTarefa from '../components/getTarefa'
import { addTarefa } from '../components/addTarefa'
import putTarefa from '../components/putTarefa'
import Botao from '../components/Botao'

class PaginaTodasTarefas extends React.Component {
    constructor() {
        super()
        this.state = {
            tarefas: [],
            showAddTarefa: false,
            usuario: {}
        }
    }
    componentDidMount = async () => {
        const data = await AsyncStorage.getItem('usuario')
        const logado = await AsyncStorage.getItem('logado')
        // const {usuario } = this.props
        const usuario = JSON.parse(data) || []
        this.setState({ usuario, })
        getTarefa(usuario.token)
            .then(res => {
                this.setState({ tarefas: res })
            })
    }

    tarefaCompletada = id => {
        const tarefas = this.state.tarefas.map(tarefa => {
            if (tarefa.id === id) {
                putTarefa(id, !tarefa.completed, this.state.usuario.token)
                tarefa.completed = !tarefa.completed
            }
            return tarefa
        })
        this.setState({ tarefas })
    }


    AddTarefa = tarefa => {
        const tarefas = [...this.state.tarefas]
        addTarefa(tarefa.description, this.state.usuario.token)
            .then(resposta => {
                tarefas.push(resposta)
            })
        this.setState({ tarefas, showAddTarefa: false })
    }

    render() {
        return (
            <View style={styles.container}>
                <AddTarefa
                    isVisible={this.state.showAddTarefa}
                    onSave={this.AddTarefa}
                    onCancel={() => this.setState({ showAddTarefa: false })} />
                <ImageBackground source={imagem}
                    style={styles.background}>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>Hoje</Text>
                        <Text style={styles.subtitle}>
                            {moment().locale('pt-br').format('ddd, D [de] MMMM')}
                        </Text>
                    </View>
                </ImageBackground>
                <View style={styles.taskContainer}>
                    <FlatList data={this.state.tarefas}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({ item }) => <Tasks {...item} tarefaCompletada={this.tarefaCompletada} />} />
                </View>
                <ActionButton buttonColor={'#000'} onPress={() => { this.setState({ showAddTarefa: true }) }} />
                <Botao title="Sair" onPress={() => {
                    AsyncStorage.setItem('logado', JSON.stringify(false))
                    this.props.navigation.navigate("Login")
                }} />

            </View>
        )
    }
}


const styles = {
    container: {
        flex: 1
    },
    background: {
        flex: 3
    },
    iconBar: {
        marginTop: 10,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    title: {
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 30,
    },
    taskContainer: {
        flex: 7,
    }
}

const mapStateToProps = (store) => {
    return {
        usuario: store.usuario.usuario
    };
};

export default connect(mapStateToProps)(PaginaTodasTarefas);
