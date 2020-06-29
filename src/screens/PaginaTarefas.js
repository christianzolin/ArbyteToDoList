import React from 'react'
import { View, Text, ImageBackground, FlatList, AsyncStorage, ActivityIndicator } from 'react-native'
import moment from 'moment'
import 'moment/locale/pt-br'
import imagem from '../image/imagem.png'
import ActionButton from 'react-native-action-button'
import AddTarefa from '../components/AddTarefa'
import Tasks from '../components/Tasks'
import { connect } from 'react-redux'
import getTarefa from '../components/Api/getTarefa'
import { addTarefa } from '../components/Api/addTarefa'
import putTarefa from '../components/Api/putTarefa'
import Botao from '../components/Botao'
import deletaTarefa from '../components/Api/deleteTarefa'
import EditarTarefa from '../components/EditarTarefa'

class PaginaTarefas extends React.Component {
    constructor() {
        super()
        this.state = {
            tarefas: [],
            showAddTarefa: false,
            showEditarTarefa: false,
            usuario: {},
            editarId: undefined,
            loading: false,
            nome: ''
        }
    }
    componentDidMount = async () => {
        this.setState({ loading: true })
        const logado = await AsyncStorage.getItem('logado')
        const usuarioLogado = JSON.parse(logado)
        if (!usuarioLogado) {
            this.props.navigation.navigate('Login')
            setTimeout(() => {
                this.setState({ loading: false })
            }, 1000);
        } else {
            const data = await AsyncStorage.getItem('usuario')
            const usuario = JSON.parse(data)
            this.setState({ usuario })
            getTarefa(usuario.token)
                .then(res => {
                    this.setState({ tarefas: res, loading: false, nome: this.state.usuario.user.fullName })
                    console.log('this.state.usuario.user.fullName: ', this.state.usuario.user.fullName);
                })
        }
    }

    adicionarTarefa = tarefa => {
        const tarefas = [...this.state.tarefas]
        addTarefa(tarefa.description, this.state.usuario.token)
            .then(resposta => {
                tarefas.push(resposta)
            })
        this.setState({ tarefas, showAddTarefa: false, onPressAdicionar: false })
        getTarefa(this.state.usuario.token)
            .then(res => {
                this.setState({ tarefas: res })
            })
    }

    tarefaCompletada = id => {
        const tarefas = this.state.tarefas.map(tarefa => {
            if (tarefa.id === id) {
                tarefa.completed = !tarefa.completed
                putTarefa(tarefa.id, tarefa.completed, this.state.usuario.token, tarefa.description)
            }
            return tarefa
        })
        this.setState({ tarefas })
    }

    edit = (id) => {
        this.setState({ editarId: id })
    }

    editarTarefa = (tarefaEditada) => {
        const tarefas = this.state.tarefas.map(tarefa => {
            if (tarefa.id === this.state.editarId) {
                putTarefa(tarefa.id, tarefa.completed, this.state.usuario.token, tarefaEditada.description)
            }
            return tarefa
        })
        this.setState({ tarefas, showEditarTarefa: false })
        getTarefa(this.state.usuario.token)
            .then(res => {
                this.setState({ tarefas: res })
            })
    }

    excluirTarefa = (id) => {
        const tarefas = this.state.tarefas.map(tarefa => {
            if (tarefa.id === id) {
                deletaTarefa(tarefa.id, this.state.usuario.token)
            }
            return tarefa
        })
        console.log('tarefas delete: ', tarefas);
        this.setState({ tarefas })
        getTarefa(this.state.usuario.token)
            .then(res => {
                this.setState({ tarefas: res })
            })
    }

    render() {
        return (
            <View style={styles.container}>
                {this.state.loading
                    ? <ActivityIndicator size={"large"} color={'purple'} />
                    : <View style={styles.container}>
                        <AddTarefa
                            isVisible={this.state.showAddTarefa}
                            onSave={this.adicionarTarefa}
                            onCancel={() => this.setState({ showAddTarefa: false })} />
                        <EditarTarefa
                            isVisible={this.state.showEditarTarefa}
                            onSave={this.editarTarefa}
                            onCancel={() => this.setState({ showEditarTarefa: false })} />
                        <ImageBackground source={imagem}
                            style={styles.background}>
                            <View style={styles.titleBar}>
                                <View style={{ alignItems: "flex-end", padding: 5 }}>
                                    <Text style={{ fontSize: 20, color: 'white' }}> Olá, {this.state.nome}</Text>
                                </View>
                                <Text style={styles.title}>Hoje</Text>
                                <Text style={styles.subtitle}>
                                    {moment().locale('pt-br').format('ddd, D [de] MMMM')}
                                </Text>
                            </View>
                        </ImageBackground>
                        <View style={styles.taskContainer}>
                            <FlatList data={this.state.tarefas}
                                keyExtractor={item => `${item.id}`}
                                renderItem={({ item }) =>
                                    <Tasks {...item}
                                        tarefaCompletada={this.tarefaCompletada}
                                        editarTarefa={this.edit}
                                        showEditarTarefa={() => this.setState({ showEditarTarefa: true })}
                                        excluirTarefa={this.excluirTarefa}
                                    />}
                            />
                        </View>
                        <ActionButton buttonColor={'#000'} onPress={() => { this.setState({ showAddTarefa: true, onPressAdicionar: true }) }} />
                        <Botao title="Sair" onPress={() => {
                            AsyncStorage.setItem('logado', JSON.stringify(false))
                            this.props.navigation.navigate("Login")
                        }} />
                    </View>
                }
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

export default connect(mapStateToProps)(PaginaTarefas);
