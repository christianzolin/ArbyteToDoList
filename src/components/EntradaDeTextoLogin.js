import React from 'react';
import { TextInput } from 'react-native';

const EntradaDeTextoLogin = ({ login, setLogin, placeholder }) => {
    return (
        <TextInput
            style={styles.entradaDeTexto}
            placeholder={placeholder}
            placeholderTextColor='black'
            value={login}
            onChangeText={(novoTexto) =>
                setLogin(novoTexto)

            }
        />
    );
};

const styles = {
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
};

export default EntradaDeTextoLogin