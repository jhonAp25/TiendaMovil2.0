import React from 'react'
import { TouchableOpacity,ScrollView, Text } from 'react-native';

const ListadoVentas = ({navigation}) => {
  return (
    <>
    
    <ScrollView  style={{
        flex: 1,
        margin: 'auto',
        marginTop: '5%',
        width : '100%',
        
    }} >

                <Text style={{color: '#879096' }}>Listado de Ventas </Text>
                <TouchableOpacity style={{
                    marginTop: 10,
                    display: 'flex',
                    color: '#fff',
                    flexDirection: 'row',
                    backgroundColor: '#122534',
                    justifyContent: 'flex-end',
                    borderRadius: 12,
                    padding: 15
                }} onPress={()=>navigation.push('detalleVenta')} >
                    <Text style={{ flex: 1, color: '#fff',}} >1</Text>
                    <Text style={{color: '#fff' , flex: 2}}>Nueva Venta</Text>
                    <Text style={{color: '#F3F2C9' , fontWeight: '400' , flex: 3, textAlign :'right'}}>S/. 45</Text>
                </TouchableOpacity>


              
                <TouchableOpacity style={{
                    marginTop: 10,
                    display: 'flex',
                    color: '#fff',
                    flexDirection: 'row',
                    backgroundColor: '#122534',
                    justifyContent: 'flex-end',
                    borderRadius: 12,
                    padding: 15
                }} onPress={()=>navigation.push('detalleVenta')} >
                    <Text style={{ flex: 1, color: '#fff',}} >1</Text>
                    <Text style={{color: '#fff' , flex: 2}}>Nueva Venta</Text>
                    <Text style={{color: '#F3F2C9' , fontWeight: '400' , flex: 3, textAlign :'right'}}>S/. 45</Text>
                </TouchableOpacity>


            
            </ScrollView>
    </>
  )
}

export default ListadoVentas