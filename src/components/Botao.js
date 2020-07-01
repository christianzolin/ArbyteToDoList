import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'


const Botao = (props) => {
    return (
        <TouchableOpacity style={styles.styleButton}
            onPress={props.onPress}
        >
            <Text style={styles.buttonText}>{props.title}</Text>
        </TouchableOpacity>

    );
}
const styles = {
    styleButton: {
        borderColor: '#ffdd55',
        height: 40,
        width: 180,
        backgroundColor: 'gold',
        borderWidth: 2,
        margin: 20,
        borderRadius: 11,
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
    },
    buttonText: {
        textAlign: "center",
        fontSize: 20,
    }

}
export default Botao;