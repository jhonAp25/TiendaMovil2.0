import React,{useContext , useEffect, useState} from 'react'
import axios from 'axios';

let ProductoContext = React.createContext();
let {Provider, Consumer} = ProductoContext;

const url = 'https://tienda-apaza-back-end.herokuapp.com/'


const ProductoProvider = ({children}) => {

    //********* */ STATES ************
    const [tipoProd ,setTipoProd] =useState([])
    const [ producto , setProducto] = useState([])
    const [modeloProd , setModelo]=useState([])
    const [color , setColor]=useState([])
    const [talla , setTalla]=useState([])
    const [precioMax , setPrecioMax]=useState(0)
    const [stock , setStock]=useState(0)



        const getListaProducto = async()=>{ await axios.get(url +'tipoProducto/lista' )
        .then(({data})=>{ 
          
            setTipoProd(data)
            console.log(data)
          
            })
        .catch((error) => {  
        })}

        const getListaPorModelo = async(id)=>{ await axios.get(url +`producto/ListaModelo/${id}` )
        .then(({data})=>{ 

            if(data.length>0){
                setProducto(data)
           
                //Modelo
                setModelo(data[0]?.modelo)
    
                //Precio
                setPrecioMax(data[0]?.precio)
              
    
                //Stock
                setStock(data[0]?.stock)
    
                //Color
                let hash={}
                let color = data.map(d=>(d.color)).filter(o => hash[o.id] ? false : hash[o.id] = true);
                setColor(color)
               //Talla
                let hash2={}
                let talla = data.map(d=>(d.talla)).filter(o => hash2[o.id] ? false : hash2[o.id] = true);
                setTalla(talla)
    
                console.log(data)
            }else{     
                setModelo([])
                //Precio
                setPrecioMax(0)
                //Stock
                setStock(0)
            }
           
            })
        .catch((error) => {  
        })}


        const getListaPorModeloAndTalla = async(idMol, idTal)=>{ await axios.get(url +`producto/ModeloTalla/${idMol}/${idTal}` )
        .then(({data})=>{ 
          
            //Stock
            setStock(data[0].stock)

            //Color
            let hash={}
            let color = data.map(d=>(d.color)).filter(o => hash[o.id] ? false : hash[o.id] = true);
            setColor(color)


            })
        .catch((error) => {  
        })}


        const getListaPorModeloAndColor = async(idMol, idCol)=>{ await axios.get(url +`producto/ModeloColor/${idMol}/${idCol}` )
        .then(({data})=>{ 
          
            //Stock
            setStock(data[0].stock)
          

           //Talla
            let hash2={}
            let talla = data.map(d=>(d.talla)).filter(o => hash2[o.id] ? false : hash2[o.id] = true);
            setTalla(talla)

            })
        .catch((error) => {  
        })}











    useEffect(() => {

        getListaProducto()
    
    }, []);
    
    return(
        <Provider value={{getListaProducto  ,tipoProd , producto, getListaPorModelo ,modeloProd,stock, color,setPrecioMax, talla,precioMax, getListaPorModeloAndTalla, getListaPorModeloAndColor}}>
            {children}
        </Provider>
    )
}

export {ProductoProvider, Consumer as ProductoConsumer , ProductoContext};  
