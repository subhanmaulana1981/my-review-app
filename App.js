import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import DetailScreen from './screens/DetailScreen';

const StackNav = createNativeStackNavigator();
function StackNavScreen() {
  return (
    <StackNav.Navigator>

      <StackNav.Screen
        name='Beranda'
        component={ HomeScreen }
        options={ {headerShown: false} }
      />

      <StackNav.Screen 
        name='Detail'
        component={ DetailScreen }
        options={ {
          headerShown: true,
          title: "Detail",
        } }
      />

    </StackNav.Navigator>
  );
}

const StackDrawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <StackDrawer.Navigator
        initialRouteName='Beranda'
        useLegacyImplementation
        screenOptions={{
          headerStyle: {
            backgroundColor: "#F1C40F",
          },
          headerTintColor: "#FFF",
          headerTitleStyle: {
            fontWeight: "bold"
          },
          headerTitleAlign: "center"
        }}
      >

        <StackDrawer.Screen 
          name='Home'
          component={ StackNavScreen }
        />

        <StackDrawer.Screen 
          name='About'
          component={ AboutScreen }
        />

      </StackDrawer.Navigator>
    </NavigationContainer>
  );
}


