import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, AsyncStorage } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import EntradaDeTextoLogin from '../components/EntradaDeTextoLogin'
import Botao from '../components/Botao'
import cadastrar from '../components/Cadastrar'

export default Cadastro = ({ navigation }) => {
    const [email, setEmail] = React.useState('')
    const [nome, setNome] = React.useState('')
    
    const onPressCadastrar = () => {
        cadastrar(nome,email)
        .then( res => console.log(res))
        .catch(e => console.log('error ao cadastrar', e))
        navigation.navigate('Login')
    }
    return (
        <View style={styles.container}>
                <Text style={styles.textHeader}>Lista de Tarefas</Text>
            <View style={styles.login}>
                <Text style={styles.textLogin}>Cadastro</Text>
            </View>
            <View style={styles.caixaDeTexto}>
                <EntradaDeTextoLogin login={nome} setLogin={setNome} placeholder={'  Digite seu nome'}/>
                <EntradaDeTextoLogin login={email} setLogin={setEmail} placeholder={'  Digite seu e-mail'}/>
            </View>
            <View style={styles.botoes}>
                <Botao onPress={() => { navigation.navigate('Login')}} title="Voltar" />
                <Botao onPress={() => { onPressCadastrar() }} title="Cadastrar" />
            </View>
        </View>
    )
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#ccccff'
    },
    login: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '85%',
        backgroundColor: 'gold',
        alignSelf: 'center',
        borderRadius: 15,
        borderColor: '#ffdd55',
        borderWidth: 1,
        padding: 10,
        marginTop: 10

    },
    caixaDeTexto: {
        // flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    botoes: {
        // flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textLogin: {
        fontSize: 26,
        margin: 3,
    },
    textHeader: {
        fontSize: 30,
        margin: 3,
        color: 'blue'
    }

}