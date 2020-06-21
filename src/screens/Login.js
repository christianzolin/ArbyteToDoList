import React from 'react'
import {View, Text, Button } from 'react-native'


export default Login = ({navigation}) => {
    
    return (
        <View style={styles.container}>
            <Text>
                Login
            </Text>
        
            <Button title='Tarefas' onPress={()=> navigation.navigate('Tarefas')}/>
        </View>
    )
}

const styles ={
    container:{
        flex:1
    }
}