import React from 'react';
import ItemList from '../Containers/ItemList'
 

const ItemShow = (props) => {
   const item =  props.items.find(itemObj=> itemObj.id === parseInt(props.match.params.itemId))
   let recommendedItems =  props.items.slice(0,5)
   
   
   const renderPage=()=>{

              if (item){
                const randomNumber = Math.floor(Math.random()*(props.items.length-50))
                const filteredItems = props.items.slice(randomNumber,50).filter(itemObj => itemObj.category === item.category)
                if(filteredItems.length > 0){
                  recommendedItems = filteredItems.splice(0,5)
                }

              
              return (
              <>
                <h2> ITEM SHOW PAGE</h2>
                <div>
                  <h1>{ item.name }</h1>
                  <div className="itemDisplay" >
                    <img src={item.img_url}  alt={item.name}/>
                    <div>
                    <p>{item.description}</p>
                    <h3>{`$${item.cost}`}</h3>
                    <button  onClick={()=> props.addToCart(item)}>{"Add to Cart 🛒"}</button>
                    </div>
                  </div>
                </div>
              
                  <div>
                    <h1> Recommended Items </h1>
                    <div id="recommendedItems" >
                    <ItemList items={recommendedItems} styling={"gallery"} addToCart ={props.addToCart}/> 
                    </div>
                  </div>
              </>

            );
              } else{return `the params ItemId is ${props.match.params.itemId}`}


  }





  return(
  renderPage()
  )

 
}
 
export default ItemShow;

