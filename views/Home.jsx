import { Box, Text, View } from 'native-base'
import React from 'react'
import { StyleSheet } from 'react-native'
import CardProfile from '../components/CardProfile'
import ListadoVentas from '../components/ListadoVentas'
import ResumenVenta from '../components/ResumenVenta'

const Home = ({navigation}) => {
  return (
    <>
    
    <Box style={{  backgroundColor: "#081620"}}>
         <CardProfile  />
            <Box backgroundColor='#10212D' borderTopRadius={30}  flexBasis='100%' p={5}>
        
                    
               
                <Box width='100%'  >
                  <Text display='flex' color='#fff' marginBottom='2' fontWeight={700} fontSize='2xl' > Ventas</Text>
                  <ResumenVenta/>
                </Box>


                <View flex={1}  >
                  <ListadoVentas  navigation={navigation} />
                </View>
            
            </Box>
        
    
    
    
    </Box>
    </>
  )
}

export default Home

