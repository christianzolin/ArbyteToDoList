import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { EasingNode } from 'react-native-reanimated'
import Hoje from './Hoje'
import Amanha from './Amanha'
import Mes from './Mes'

const Tab = createMaterialTopTabNavigator();


function Tarefas() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Hoje" component={Hoje} />
            <Tab.Screen name="Amanhã" component={Amanha} />
            <Tab.Screen name="Mês" component={Mes} />
        </Tab.Navigator>
    );
}
export default Tarefas;
  // <StatusBar />