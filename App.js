import React from "react";
import {
  Text,
  View,
  NativeBaseProvider
} from "native-base";


import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "./views/Home";
import TabCustom from "./components/TabCustom";
import Header from "./components/Header";
import { PedidoProvider } from "./context/PedidoContext";
import VentaPage from "./views/VentaPage";




const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NativeBaseProvider >


    <PedidoProvider>

  
    <NavigationContainer>
      
    <Tab.Navigator   options ={{position: 'relative', zIndex: "999999"  }}  tabBar={props => <TabCustom {...props} />}>
            <Tab.Screen name="Inicio"  component={Home} options={{header: ()=> null}}  />
            <Tab.Screen name="Gastos"  component={SettingsScreen} options={{header: ()=> null}}    />
            <Tab.Screen name="Perfil"  component={SettingsScreen} options={{header: ()=> <Header name='Perfil' />  }}   />
            <Tab.Screen name="Venta" component={VentaPage} options={{
                                                                header: ()=> <Header name='Nueva Venta'    />
                                                                }}   />
          </Tab.Navigator>
    </NavigationContainer>

    </PedidoProvider>

    </NativeBaseProvider>
  );
}
function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Sesssttngs!</Text>
    </View>
  );
}

