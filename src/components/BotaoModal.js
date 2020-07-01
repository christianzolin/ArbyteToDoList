import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'


const BotaoModal = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <Text style={styles.textButton}>{props.title}</Text>
        </TouchableOpacity>

    );
}
const styles = {
    textButton: {
        margin: 20,
        marginRight: 30,
        color: '#1631be'
    }
}
export default BotaoModal;