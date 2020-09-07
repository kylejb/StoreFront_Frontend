import React from 'react'
import ItemCard from '../Components/ItemCard'


const ItemList =(props)=>{
 
    
    const displayItems = () =>{
       
       return props.items.map(itemObj => (
           
       <ItemCard key={itemObj.id} name={itemObj.name} cost={itemObj.cost} img={itemObj.img_url} id={itemObj.id} addToCart ={props.addToCart} />
       ))
    }


    return(
        <div className={props.styling} >
        
        {displayItems()}


        </div>

    )







}

export default ItemList

ItemList.defaultProps= {
    styling: undefined
}