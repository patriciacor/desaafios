import React from 'react';
import "../App.css"
/**
 * 
 * @param {id,title,price,description,pictureUrl} param0 
 * @returns retornamos los elementos que le pasamos por parametros en formato carta o en el que mas te guste no tenemos 
 * porque retornarlos todos ,yo en mi caso deje fuera el id no perjudica en nada.
 * lo puse como parametro ya que la consigna lo exije
 */
const Item = ({id,title,price,description,pictureUrl}) => {
  return (
      <div itemID='productos' className='card-productos'>
   
                        <img src={pictureUrl} alt=""/>  
                <p>{title}</p>
               <p className='desc'>{description}</p>
          <p>USD{price}</p>
            
      </div>
  );
}

export default Item

