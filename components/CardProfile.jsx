import React from 'react'
import { Text, View, Image ,StyleSheet , TouchableOpacity} from 'react-native';
import {AiOutlineLogout} from 'react-icons/ai'
import { AntDesign } from '@expo/vector-icons';


const CardProfile = () => {
  return (
    <View style={{
      
        height: 120,
        margin : 'auto',
        width: '95%',
        borderRadius: 17,
        fontFamily: 'Zilla Slab',
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        
    }}>
    <View>
        <Image  style={{
        height: 30 ,
        width : 30 ,
        borderRadius : 30,        marginLeft: 10,
        marginRight: 10,
        flex: 1
    }}  source={{uri : 'https://picsum.photos/300/300'}} />

    </View>

    <View style={ {
        display : 'flex',
        flex: 5,
        padding: 10,
      
        marginLeft: 20,
    }}>
        <Text style={{color: '#F3F2C9', fontWeight: '600' }} >Hola Jhon Apaza</Text>
        <Text style={{color: '#fff' , fontWeight:'300'}} >Bienvenido de nuevo</Text>
    </View>

    <View>
        <AntDesign name="logout" size={20} color="#F3F2C9" />
    </View>
       
    

</View>
  )
}

export default CardProfile
