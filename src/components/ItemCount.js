//importamos react y useState para asi poder cambiar el estado del componente
import React,{useState} from 'react';
import "../App.css";

 /**
     * Creamos un metodo useState que inicializaremos en cero el segundo parametro
    pasado en el metodo con el nombre setCounter es utilizado para actualizar automaticamente
    el estado del componente que queremos renderizar.
    vamos a tener dos botones como queremos disminuir y aumentar el contador
    cada vez que clickemos el boton para aumentar o disminuir este disparara el evento estado 
    haciendo que nuestro valor cambie automaticamente
    si no utilizamos o importamos correctamente este hook lo que pasara es que nuestro 
    componente no se actualizara
    ya que los componentes de react son inmutables */

  const ItemCount=({stock,initial,onAdd})=>{
    
    const [counter,setCounter] = useState(1);
    

   
    
    function Incrementar(){
      if(counter < stock){    //si el stock es menor que el contador se podra incrementar el resultado 
       
    setCounter(counter+1);
      }
    }
    function Disminuir(){
        if(counter>initial){ // si el contador es mayor al valor inicial(1) se podra disminuir el contador
    setCounter(counter-1)
}
    } 

    
    
  return (
    <div >      
        
       <div className='contador'><h1>ItemCount </h1> 
       <div>
        <button className='botonI' onClick={Incrementar}>Incrementar+</button>
         <input className="Input" value={counter}/>
         
         <button className='botonD' onClick={Disminuir}>Disminuir-</button>
 
   <button class="carrito"onClick={()=>onAdd(counter)}> {stock > counter ? "Agregar al Carrito" :"Sin stock"}</button> 

   </div> </div> </div>
//por ultimo le pasamos un booleano con el metodo onclick que solo disparara la funcion en caso de que el stock sea mayor al contador
      
  )
}

export default ItemCount