import React from 'react';
import { TextInput } from 'react-native';

const EntradaDeTexto = ({ state, setState, placeholder }) => {
    return (
        <TextInput
            style={styles.entradaDeTexto}
            placeholder={placeholder}
            placeholderTextColor='black'
            value={state}
            onChangeText={(novoTexto) =>
                setState(novoTexto)

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

export default EntradaDeTexto