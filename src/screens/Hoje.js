import React from 'react'
import { View, Text, ImageBackground, FlatList, TouchableOpacity } from 'react-native'
import moment from 'moment'
import 'moment/locale/pt-br'
import imagem from '../image/imagem.png'
import Icon from 'react-native-vector-icons/FontAwesome'

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
        this.setState({ tarefas })
    }

    componentDidMount = () => {
        this.filterTasks()
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={imagem}
                    style={styles.background}>
                    <View style={styles.iconbar}>
                        <TouchableOpacity onPress={this.toogleFilter}>
                            <Icon name={this.state.showDoneTasks ? 'eye' : 'eye-slash'}
                            size={20} color={'#000'}/>
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
    iconBar:{

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