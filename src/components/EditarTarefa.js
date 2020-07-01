import React, { Component } from 'react'
import {
    Modal,
    View,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Alert,

} from 'react-native'
import BotaoModal from '../components/BotaoModal'

const initialState = { description: '' }

export default class EditarTarefa extends Component {
    constructor() {
        super()
        this.state = { ...initialState }
    }

    save = () => {
        if (!this.state.description.trim()) {
            Alert.alert('Dados inválidos', 'Informe uma descrição para tarefa')
            return
        }
        const data = { ...this.state }
        this.props.onSave(data)
        this.setState({ ...initialState })
    }

    render() {
        return (
            <Modal onRequestClose={this.props.onCancel}
                visible={this.props.isVisible}
                animationType={'slide'} transparent={true}>

                <TouchableWithoutFeedback onPress={this.props.onCancel} >
                    <View style={styles.offset}></View>
                </TouchableWithoutFeedback>

                <View style={styles.container}>
                    <Text style={styles.header}>Nova Tarefa</Text>
                    <TextInput placeholder="Descrição..."
                        style={styles.input}
                        onChangeText={description => this.setState({ description })}
                        value={this.state.description} />
                </View>
                <View style={styles.containerButton}>
                    <BotaoModal onPress={this.props.onCancel} title={'Cancelar'} />
                    <BotaoModal onPress={this.save} title={'Salvar'} />
                </View>

                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.offset}></View>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }
}

const styles = {
    containerButton: {
        backgroundColor: "white",
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    container: {
        backgroundColor: 'white',
        justifyContent: 'space-between',
    },
    offset: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)',
    },
    textButton: {
        margin: 20,
        marginRight: 30,
        color: '#1631be'
    },
    header: {
        backgroundColor: '#1631be',
        color: '#AAA',
        textAlign: 'center',
        padding: 15,
        fontSize: 15,
    },
    input: {
        width: '90%',
        height: 40,
        marginTop: 10,
        marginLeft: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#e3e3e3',
        borderRadius: 6,
    },
    date: {
        backgroundColor: 'white',
        fontSize: 20,
        marginLeft: 10,
        marginTop: 10,
        textAlign: 'center',
    }
}