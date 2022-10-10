import React,{useContext , useEffect, useState} from 'react'
import axios from 'axios';

let PedidoContext = React.createContext();
let {Provider, Consumer} = PedidoContext;

const url = 'https://tienda-apaza-back-end.herokuapp.com/'


const PedidoProvider = ({children}) => {

    //**************STATE***************
    const [pedido, setPedido]=useState([])
    const [detallePedido, setDetallePedido]=useState([])

    const[carrito, setCarrito]=useState([])



    const postNewPedido=()=>axios.post(url +'pedido',{} )
        .then(({data})=>{ 
            console.log(data)
        
        })
        .catch((error) => { })

    const postNewDetallePedido=()=>axios.post(url +'pedido',{} )
        .then(({data})=>{ 
           pedido(data)
        
        })
        .catch((error) => { })


    const getDetallePedido = ()=> axios.get(url +'listaPorPedido/1' )
        .then(({data})=>{ 
            setDetallePedido(data)
           
            console.log(data)
            })
        .catch((error) => {  
        })  











        /*******************LLENADO DE PRODUCTO SELECCIONADOS*********** */

        const addCarrito=(productos)=>{
          
        
            carrito === []
                ?   setCarrito( [productos])
                :   setCarrito([ productos,...carrito])
    
    
    
        
        }
        



    return (
        <Provider value={{postNewPedido, postNewDetallePedido, addCarrito, carrito}}>
            {children}
        </Provider>
    )
}

export {PedidoProvider, Consumer as PedidoConsumer , PedidoContext};  
