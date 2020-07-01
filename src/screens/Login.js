import React from 'react'
import { View, Text, AsyncStorage, Alert, Button} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import Botao from '../components/Botao'
import { connect } from 'react-redux'
import LoginApi from '../components/Api/Login'
import validacaoEmail from '../components/validacaoEmail'


class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            login: '',
            loading: false,
            logado: false
        }
    }

    onPressLogin = () => {
        if(validacaoEmail(this.state.login)){
            LoginApi(this.state.login)
                .then(res => {
                    this.setState({ logado: true })
                    const usuario = res.data
                    console.log('usuario login: ', usuario);
                    // dispatch(actionLogin(usuario))
                    AsyncStorage.setItem('usuario', JSON.stringify(usuario))
                    AsyncStorage.setItem('logado', JSON.stringify(this.state.logado))
                    this.props.navigation.push('Tarefas')
                })
                .catch(e => {
                    Alert.alert('dados invalidos')
                    console.log('erro', e.response.data)})
        }
    }

    render() {
        return (
            <View style={styles.container} >
                <Text style={styles.textHeader}>Lista de Tarefas</Text>
                <View style={styles.login}>
                    <Text style={styles.textLogin}>Login</Text>
                </View>
                <View style={styles.caixaDeTexto}>
                    <TextInput
                        style={styles.entradaDeTexto}
                        placeholder=' Digite seu e-mail'
                        placeholderTextColor='black'
                        value={this.state.login}
                        onChangeText={(login) => this.setState({ login })}
                    />
                </View>
                <View style={styles.botoes}>
                    <Botao onPress={() => { this.onPressLogin() }} title="Login" />
                    <Botao onPress={() => { this.props.navigation.navigate('Cadastro') }} title="Cadastrar" />
                </View>
            </View>
        )
    }
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
    entradaDeTexto: {
        margin: 50,
        borderWidth: 2,
        borderColor: '#000',
        marginVertical: 10,
        width: 250,
        height: 50,
        borderWidth: 2,
        borderColor: '#ffde21',
        borderRadius: 12,
        marginVertical: 8,
        marginHorizontal: 2,
        backgroundColor: 'gold',
        paddingLeft: 7
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

const mapState = store => {
    return {
        usuario: store.usuario
    }
}

export default connect(mapState)(Login)