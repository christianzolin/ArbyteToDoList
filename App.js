import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/Login'
import Tarefas from './src/screens/Tarefas'
import Cadastro from './src/screens/Cadastro'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import  combineReducers  from './src/reducers/reducerIndex';

const store = createStore(combineReducers);

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar />
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Cadastro" component={Cadastro} />
          <Stack.Screen name="Tarefas" component={Tarefas} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
export default App;