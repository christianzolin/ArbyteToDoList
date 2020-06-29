import React, { useState } from 'react'
import { View, Text, TouchableNativeFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default Hoje = (props) => {
    const [checks, setChecks] = useState(false)
    const [editar, setEditar] = useState(false)
    const [excluir, setExcluir] = useState(false)
    var check = false
    if (props.completed !== false) {
        check = (
            <View style={styles.done}>
                <Icon name='check' size={20}
                    color={'white'} />
            </View>
        )
    } else {
        check = <View style={styles.pending} />
    }

    const descStyle = props.completed !== false ?
        { textDecorationLine: 'line-through' } : {}



    return (
        <View style={styles.container}>
            <TouchableNativeFeedback onPress={() => {
               
                props.tarefaCompletada(props.id)
            }}>
                <View style={styles.checkContainer}>{check}
                </View>
            </TouchableNativeFeedback>
            <View style={{ flexDirection: 'row', flex: 3 }}>
                <Text style={[styles.description, descStyle]}>
                    {props.description}
                </Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row", margin: 2 }}>
                <TouchableNativeFeedback onPress={() => {
                    props.showEditarTarefa()
                    props.editarTarefa(props.id)
                }}>
                    <View style={styles.checkContainer}>{<Icon name='edit' size={20}
                        color={'black'} />}
                    </View>
                </TouchableNativeFeedback>
                <View style={{ flex: 1, flexDirection: "row", margin: 2 }}>
                    <TouchableNativeFeedback onPress={() => {
                        setExcluir(true)
                        props.excluirTarefa(props.id)
                    }}>
                        <View style={styles.checkContainer}>
                            {/* {<Icon name='delte' size={20}
                            color={'black'} />} */}
                            <Text style={{color: 'red', fontSize: 22}}>X</Text>
                            </View>
                    </TouchableNativeFeedback>
                </View>
            </View>

        </View >
    )
}

const styles = {
    container: {
        flex: 1,
        paddingVertical: 10,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: 'AAA'
    },
    checkContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '20%',
    },
    pending: {
        borderWidth: 1,
        height: 25,
        width: 25,
        borderRadius: 15,
        borderColor: '#555'
    },
    done: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 25,
        width: 25,
        borderRadius: 15,
        backgroundColor: '#4D7031',
    },
    description: {
        // fontFamily: 'Lato',
        fontSize: 15
    },
    date: {
        // fontFamily: 'Lato',
        fontSize: 12
    }
}