import React, { useState, useEffect } from 'react';
import jsonProductos from "../productos.json";
import ItemList from './ItemList';
//debemos importar el ITEMLIST y nuesto json
const ItemListContainer = () => {
    const [productos,setProductos] = useState([]);
/**
 * usamos en este caso al use state y le pasamos un string vacio ya que ahi contendra la informacion 
 * que traeremos de nuestro json
 * UseEffect es un hook de react que lo que hace es renderizar automaticamente nuesto componente cuando un cambio secundario ocurre
 * en este caso el cambio que ocurre es que le pasamos como primer caso un array vacio al usestate, y al useeffect luego le decimos que nos traiga la 
 * data del json justo en ese momento nuestro componente se actualiza y nos muestra por consola nuesto objeto json.
 * ademas ya que en la  propuesta expecificaba que los datos deben de cargar a los 2 segundos   , usamos por ese mismo motivo useEffect
 * ya que la funcion setTimeout para expecificar cuando demorara la renderizacion funciona dentro de este hook.
 * Respecto a la promesa creamos una funcion que es la que contendra todos los datos el cual le pasaremos como parametro
 * el cual utilizaremos para saber si nos acepta o rechaza la peticion
 * luego de esto a nuestra funcion previamente creada le pasamos como parametro nuestro json y los segundos de retardo que debe tener
 * el metodo then capturara nuestra respuesta y nuestro useState podra mostrarnos la informacion en consola en caso de que exista un error el metodo catch no 
 * informara que no hay datos almacenados ya que algo fallo
 */
    useEffect(()=>{
            const getProducts = (datos) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  if (datos) {
                    resolve(datos);
                  } else {
                    reject("Error");
                  }
                }, 2000);
              });
       getProducts(jsonProductos,2000)
      .then((respuesta)=>{
        setProductos(respuesta)
        console.log(respuesta)
    })
    
    .catch((error) => console.log(error,"error"));
},[]);



    return(
    <>
    <div>
        <ItemList items={productos}/>
    </div>
    </>    
        )
        }
//por ultimo y no menos importante retornamos en Itemlist y le decimos que items(parametro de la funcion ItemList) es igual a productos
//primer parametro de useState
 export default ItemListContainer
              
           