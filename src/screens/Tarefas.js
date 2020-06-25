import 'react-native-gesture-handler';
import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import PaginaTodasTarefas from './PaginaTodasTarefas'
import PaginaTarefasFazer from './PaginaTarefasFazer'
import Mes from './Mes'

const Tab = createMaterialTopTabNavigator();


function Tarefas() {
    return (
        <Tab.Navigator initialRouteName="Todas as Tarefas">
            <Tab.Screen name="Todas as Tarefas" component={PaginaTodasTarefas} />
            <Tab.Screen name="A fazer" component={PaginaTarefasFazer} />
            {/* <Tab.Screen name="Mês" component={Mes} /> */}
        </Tab.Navigator>
    );
}
export default Tarefas;
  // <StatusBar />