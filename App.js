import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/Login'
import PaginaTarefas from './src/screens/PaginaTarefas'
import Cadastro from './src/screens/Cadastro'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import  tarefa  from './src/reducers/tarefa';

const store = createStore(tarefa);

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar />
        <Stack.Navigator initialRouteName="Tarefas" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Cadastro" component={Cadastro} />
          <Stack.Screen name="Tarefas" component={PaginaTarefas} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
export default App;