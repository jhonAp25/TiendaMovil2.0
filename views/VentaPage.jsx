import React from 'react'
import { ProductoProvider } from '../context/ProductoContext'
import { Circle, Link ,View ,Text,Icon,Box } from 'native-base';

import TipoProducto from '../components/TipoProducto';

const VentaPage = ({navigation}) => {
  return (
    <ProductoProvider>

      
    <View backgroundColor='#081620' flex={1} padding= '2' >
        
        <TipoProducto navigation={navigation}  hola='hola' />
    </View>
    </ProductoProvider>
  )
}

export default VentaPage