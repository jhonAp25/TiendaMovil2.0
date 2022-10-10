import { FlatList, Flex, Image, ScrollView, Text, View } from 'native-base'
import React, {useContext, useState} from 'react'
import { Pressable, Animated} from 'react-native'

import { ProductoContext } from '../context/ProductoContext'
import DetalleProducto from './DetalleProducto'

const TipoProducto = () => {

    let {tipoProd,  getListaPorModelo, modeloProd } = useContext(ProductoContext)

    /**************** S T A T E *************** */

    const [modalVisible, setModalVisible] = useState(false)
    

    
  
    const handleSizeClick = (id) => {       
        setModalVisible(!modalVisible)
        getListaPorModelo(id)
      
    }


    
    const renderItem = ({ item }) => (
        <Pressable onPress={() => handleSizeClick(item.id)} >
            <Flex direction='column' alignItems='center' justifyContent='space-around' bg="#10202D"  style={{ width: 150,
        height: 150,
      
        position: 'relative',
        marginHorizontal: 6,
        marginTop: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

      }} >
                <Image source = {{uri : item.imagenProducto}} alt='ropa-modelo'  style={{ width: 100,
        height: 100,
        resizeMode: 'contain'}} />
                <Text  color='#F3F2C9' textTransform='capitalize' fontSize='sm' > {item?.nombre} </Text>
            </Flex>
        </Pressable>
    )



  return (
    <>
    <ScrollView maxHeight='100%'   marginLeft={3} >
        
    {tipoProd.map(t=>(
            <View key={t.id}>
            <Text color='#838A8F' textTransform='uppercase' style={{fontWeight: 'bold' , fontSize : 15 ,marginTop: 10}}>{t?.nombre}  </Text>
                    <FlatList
                        style={{flex : 1, maxHeight: 195}}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                       
                        data={t.modelo}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
            </View>
        ))}

    </ScrollView>
    
  {/********************** M O D A L ******************************** */}
        


     <DetalleProducto modelo={modeloProd} modalVisible={modalVisible} setModalVisible={setModalVisible} />
        
      

    </>
  )
}

export default TipoProducto