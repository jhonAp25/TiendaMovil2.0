import { Box, Text, View } from 'native-base'
import React from 'react'
import { Image } from 'react-native'

const ResumenVenta = () => {
  return (

        <View backgroundColor= '#055052' rounded='lg' p='4' margin='auto' width='100%' >
            <Box flexDirection='row'  alignItems='baseline'  >
                <Text color={'#9BB9BA'} marginBottom='10px' >Total de Ventas </Text>
               
            </Box> 
            <Text style={{fontWeight: 'bold' , marginRight : 14 , color :'#fff' }}> S/ 500</Text>
        </View>


  )
}

export default ResumenVenta


