import { Pressable, Text, View , Circle, StatusBar, Badge} from 'native-base'
import React, { useContext, useEffect } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { PedidoContext } from '../context/PedidoContext';


const Header = ({name}) => {

    let{carrito}=useContext(PedidoContext)


    return (
        <>
        <StatusBar bg="#3700B3" barStyle="light-content" />
            <View bg='#081620' height='70px' justifyContent='space-between' alignItems='center' borderBottomWidth='1px' borderColor='#000' flexDirection='row' paddingRight={8} paddingLeft={4}  >
                <Text textAlign='center'   color='#fff' >{name} </Text>
                {name==='Nueva Venta'
                ? <Pressable position='relative'  >
                   
                    
                    {carrito.length===0 ? null
                    : <Badge  colorScheme="danger"  rounded="full" mb={-4} mr={-4} zIndex={1} variant="solid" alignSelf="flex-end"  _text={{
                      fontSize: 10
                    }}>
                        {carrito.length}
                      </Badge>
                }
                <AntDesign name="shoppingcart" size={24}   color='#fff' /> 
                   
                </Pressable> 
                
                : null  }
            </View>  
        </>
    )
}

export default Header