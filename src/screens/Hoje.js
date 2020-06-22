import React from 'react'
import { View, Text, ImageBackground, FlatList, TouchableOpacity, Alert } from 'react-native'
import moment from 'moment'
import 'moment/locale/pt-br'
import imagem from '../image/imagem.png'
import Icon from 'react-native-vector-icons/FontAwesome'
import ActionButton from 'react-native-action-button'
import AddTarefa from './AddTarefa'
import Tasks from '../components/Tasks'

export default class Hoje extends React.Component {
    state = {
        tarefas: [
            {
                id: Math.random(), desc: 'Só Salve',
                estimatedAt: new Date(), doneAt: null
            },
            {
                id: Math.random(), desc: 'Salvado',
                estimatedAt: new Date(), doneAt: new Date()
            },
            {
                id: Math.random(), desc: 'Só Salve',
                estimatedAt: new Date(), doneAt: null
            },
            {
                id: Math.random(), desc: 'Salvado',
                estimatedAt: new Date(), doneAt: new Date()
            },
            {
                id: Math.random(), desc: 'Só Salve',
                estimatedAt: new Date(), doneAt: null
            },
            {
                id: Math.random(), desc: 'Salvado',
                estimatedAt: new Date(), doneAt: new Date()
            },
        ],
        visible: [],
        showDoneTasks: true,
        showAddTarefa: false,
    }

    AddTarefa = tarefa => {
        const tarefas = [...this.state.tarefas]
        tarefas.push({
            id: Math.random(),
            desc: tarefa.desc,
            estimatedAt: tarefa.date,
            doneAt: null
        })
        this.setState({ tarefas, showAddTarefa: false }, this.filterTasks)
    }



    filterTasks = () => {
        let visibleTasks = null
        if (this.state.showDoneTasks) {
            visibleTasks = [...this.state.tarefas]
        } else {
            const pending = task => task.doneAt === null
            visibleTasks = this.state.tarefas.filter(pending)
        }
        this.setState({ visible: visibleTasks })
    }

    toogleFilter = () => {
        this.setState({ showDoneTasks: !this.state.showDoneTasks }, this.filterTasks)
    }

    toogleTask = id => {
        const tarefas = this.state.tarefas.map(tarefa => {
            if (tarefa.id === id) {
                tarefa = { ...tarefa }
                tarefa.doneAt = tarefa.doneAt ? null : new Date()
            }
            return tarefa
        })
        this.setState({ tarefas }, this.filterTasks)
    }

    componentDidMount = () => {
        this.filterTasks()
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
                    <View style={styles.iconBar}>
                        <TouchableOpacity onPress={this.toogleFilter}>
                            <Icon name={this.state.showDoneTasks ? 'eye' : 'eye-slash'}
                                size={20} color={'#000'} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>Hoje</Text>
                        <Text style={styles.subtitle}>
                            {moment().locale('pt-br').format('ddd, D [de] MMMM')}
                        </Text>
                    </View>
                </ImageBackground>
                <View style={styles.taskContainer}>
                    <FlatList data={this.state.visible}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({ item }) => <Tasks {...item} toogleTask={this.toogleTask} />} />
                </View>
                <ActionButton buttonColor={'#000'} onPress={() => { this.setState({ showAddTarefa: true }) }} />
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