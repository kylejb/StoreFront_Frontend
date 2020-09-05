import React from 'react'
import ItemCard from '../Components/ItemCard'


const ItemList =(props)=>{
    console.log("i'm inside itemlist, the following is match.url",props.url)
    
    const displayItems = () =>{
       
       return props.items.map(itemObj => (
           
       <ItemCard key={itemObj.id} name={itemObj.name} cost={itemObj.cost} img={itemObj.img_url} id={itemObj.id}/>
       ))
    }


    return(
        <>
        <h1> Swag to the Max</h1>
        {displayItems()}


        </>

    )







}

export default ItemList