import React from 'react'
import ItemCard from '../Components/ItemCard'


const ItemList = ( props ) => {
    console.log("i'm inside itemlist, the following is props",  props)

    const displayItems = () => {
       return props.items.map(itemObj => <ItemCard key={itemObj.id} name={itemObj.name} cost={itemObj.cost} img={itemObj.img_url} id={itemObj.id} addToCart={props.addToCart}/>)
    }


    return (
        <div className="main">
            {displayItems()}
        </div>
    );
}

export default ItemList;