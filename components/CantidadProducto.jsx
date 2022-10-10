import React from 'react'
import { Box, Pressable, Text } from 'native-base';
import { AntDesign } from '@expo/vector-icons';

const CantidadProducto = ({cant, setCant, stock}) => {
 
    

    const aumentar=()=>{
        console.log(stock)
        cant === stock
        ? alert('STOKC LIMITE')
        :  setCant(cant + parseInt(1))
       
    }

    const decrementar=()=>{
       cant === 0 ? null : setCant(cant - parseInt(1))
 
    }
    

  

    return (
  
       

        <Box flexDirection='row' bg='#050F16' >
            <Pressable  borderWidth='2' borderRadius={7} padding='2' onPress={()=>decrementar() } >   
                <AntDesign name="minus" size={24}   color='#fff' />
            </Pressable>
            <Box padding='2' >
              <Text color='#fff'  aria-label="Close"  >{cant}</Text> 
            </Box>
            <Pressable  borderWidth='2' borderRadius={7} padding='2' onPress={()=>aumentar()} >
                 <AntDesign name="plus" size={24}   color='#fff' />
            </Pressable>

        </Box>
           
            

    )
}


export default CantidadProducto