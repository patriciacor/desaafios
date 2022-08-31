import React from 'react'; 
import Item from "./Item"

/**
 * 
 * @param {items} pasamos el parametro items ya que la consigna lo exije y nos sirve el mismo para hacer el mapeo del elemento 
 *  cuando realizamos un mapeo en javascript nos referimos a recorrer nuestro matriz(array ,objeto o funcion)
 * la cual nos devolvera  todos los items que contengan una clave unica (id) en React es necesario siempre que cuando realizamos un map 
 * le pasemos un CLAVE de lo contrario no copilara y nos motrara un error de que falta esa KEY
 * lo mismo pasa en el caso de que en nuestro mapeo pasemos items que esten vacios o con muchos espacios no los traera 
 * @returns todos los elemoentos distintos que tenemos en nuestra matriz
 */

 const ItemList = ({ items}) => {
    return (
        <>
            <div>
                {items.length?
                (items.map((item) => <Item {...item} key={item.id}/>)):(
                    <p></p>
                )}
            </div>
        </ >
    )
}

export default ItemList