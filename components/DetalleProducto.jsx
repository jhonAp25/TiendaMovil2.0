import {Modal ,FormControl, Text, Button, Box, Image, Center, Circle, Select, Radio} from 'native-base'
import { ProductoContext } from '../context/ProductoContext'
import React, { useContext, useEffect, useState }  from 'react'
import { PedidoContext } from '../context/PedidoContext'
import CantidadProducto from './CantidadProducto'

const DetalleProducto = ({modalVisible,setModalVisible, modelo }) => {

    let{precioMax,color, talla,stock,  getListaPorModeloAndTalla, getListaPorModeloAndColor}=useContext(ProductoContext)
    let{addCarrito}=useContext(PedidoContext)


    /********************** S T A T E ************************ */
    const[cant, setCant]=useState(1)
    const[precioTotal, setPrecioTotal]=useState(precioMax)
    const[productoSelect, setProductoSelct]=useState([{  }])
    
    
    const selectColor =(id)=>{     
        getListaPorModeloAndColor(modelo.id, id)     
    }

    const selectTalla =(id)=>{ 
        getListaPorModeloAndTalla(modelo.id,id)
    }
    const llenadoProd=()=>{
        setProductoSelct([...productoSelect,{
            cantidad: cant,
         //   pedido: { id: 0},
            producto: {id: 1 },
            subTotal: precioTotal
          }])


     setModalVisible(!modalVisible)
    }


    const selectProducto=()=>{
      llenadoProd()

        addCarrito({
            cantidad: cant,
            producto: {id: 1 },
            subTotal: precioTotal
          })

     
    }
    
    
    useEffect(() => {
      

        setPrecioTotal(precioMax * cant)
    }, [cant])



  return (
    <Modal isOpen={modalVisible} onClose={setModalVisible} size='full' animationType="slide"    >
            <Modal.Content   borderTopRightRadius='30'  borderTopLeftRadius='30' bg='#10212D'  padding='7'  marginBottom='0' marginTop='auto' height='80%' position='relative' zIndex='-99999999999' >
            
            <Box  color='#fff'> <Text color='#879096' fontSize='xl'  > Producto  {modelo.nombre} </Text>  </Box>
            <Modal.Body backgroundColor='#081620'  padding='10'  >
                <FormControl>
                <Center marginBottom='6'>
                    {modelo.length===0
                    ? <Text fontSize='4xl' color='#fff'   > Producto Agotado </Text> 
                    : <Image width='150' height= '150'resizeMode='contain' source = {{uri : modelo.imagenProducto}} alt='ropa-modelo' />}
                </Center>


                <Text fontSize='md' color='#8A9095' >{modelo.nombre}</Text>
                <Box flexDirection='row' justifyContent='space-between' marginTop='2'>
                    <Text fontSize='2xl' color='#fff'>{modelo.nombre}</Text>
                    <CantidadProducto cant={cant} setCant={setCant} stock={stock} />
                </Box>

                
                

                <Box width='100%'  flexDirection='row' alignItems='center' marginTop='4' >

                <Box  flex='4'  width='30%' justifyContent='flex-start' flexDirection='row'>
                        <Radio.Group
                            accessibilityLabel="colores disponibles"
                            name="colors"
                            flexDirection='row'
                            onChange={(value)=>selectColor(value)}
                        >
                        {color.map(c=>(
                            
                        <Circle key={c.id} value={c.id}  my={1} bg={c.codigo} color={c.codigo} padding={2}   marginRight={5} >
                            <Radio value={c.id} name={c.nombre}  size='sm' accessibilityLabel='color'  />
                        </Circle>
                            

                        ))}

                        </Radio.Group>
                       
                        
                    </Box>
                    
                    <Box  flex='1'   >
                        <Select width='100%' 
                                color='#fff' 
                                marginTop='1'
                                placeholder="Talla" 
                                
                                onValueChange={(itemValue)=>selectTalla(itemValue)}
                                 >
                            {talla.map(t=>(
                                <Select.Item  key={t.id}  label={t.descripcion} value={`${t.id}`} />
                            ))}
                           
                                
                        </Select>
                    </Box>     
                </Box>


                <Box  width='100%'>
                    <Box marginTop='3'>
                        <Text fontSize='md'  color='#8A9095'>Precio Total</Text>
                        <Text  fontSize='3xl'  color='#0DC683'  >S/{precioTotal > 0 ? precioTotal :precioMax }</Text>
                    </Box>
                   
                </Box>
               
                </FormControl>
            </Modal.Body>
            <Modal.Footer  >
                
                    <Button   bg='#FF4C29'width='100%' onPress={() => selectProducto()}  >
                        <Text fontSize='md'  color='#fff'> Carrito </Text>
                    </Button>
                
                
            </Modal.Footer>
            </Modal.Content>
        </Modal>
  )
}

export default DetalleProducto