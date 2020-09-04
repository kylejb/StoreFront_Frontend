import React from 'react'
import ItemCard from '../Components/ItemCard'

const ItemList =(props)=>{

    const displayItems = () =>{
       
       return props.items.map(itemObj => <ItemCard name={itemObj.name} cost={itemObj.cost} />)
    }


    return(
        <>
        <h1> Swag to the Max</h1>
        {displayItems()}
        </>

    )







}

export default ItemList