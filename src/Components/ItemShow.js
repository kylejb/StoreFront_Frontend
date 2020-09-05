import React from 'react';
 

const ItemShow = (props) => {
   
  return (
    <div>
      <h2> ITEM SHOW PAGE</h2>
      <h3>{ props.items.name }</h3>
      <img src={props.items.img_url}  alt={props.items.name}/>
      <p>{props.items.description}</p>
    </div>
  );
}
 
export default ItemShow;