import React from 'react';

import ItemList from './ItemList'
import { Route} from "react-router-dom"
import ItemShow from '../Components/ItemShow'
import CartMenu from '../Components/cartMenu/cartMenu'
import MainPageContainer from "./Main Page/MainPageContainer"


const API = 'http://localhost:3000/';



class ItemsContainer extends React.Component {
    constructor(){
        super()
        this.state={
            items: [],
            featuredItems: [],
            newArrivals: []
        }
    }

    getItems = () => {
        fetch(API+"items")
        .then(response => response.json())
        .then(itemsObj => {
            const featuredItems = this.randomlySelectItems(itemsObj),
            newArrivals = this.randomlySelectItems(itemsObj)

            this.setState({...this.state,
            items: itemsObj,
            featuredItems:featuredItems,
            newArrivals: newArrivals
        
        })
    
    }
        );
    }


    randomlySelectItems = (itemsObj) =>{

          const randomNumber = Math.floor(Math.random()*(itemsObj.length-5))
          const randomItems = itemsObj.slice(randomNumber,randomNumber+5)
          return randomItems
            
    

     }


    componentDidMount(){
       this.getItems();
    }



    render(){
        return(
            <>
            <CartMenu  cart={this.props.cart} total={this.props.total}  addToCart={this.props.addToCart} />
            <Route exact path="/" render={(routerProps) => <MainPageContainer {...routerProps} items={this.state.items} addToCart={this.props.addToCart} featuredItems={this.state.featuredItems} newArrivals={this.state.newArrivals}/>} />
                <div className="grid-container">
                    <Route  path={`/items/:itemId`} render={routerProps => <ItemShow {...routerProps} items={this.state.items} addToCart={this.props.addToCart} />} />
                    <Route  exact path="/items" render={routerProps => <ItemList {...routerProps} items={this.state.items} addToCart={this.props.addToCart} />} />
                 </div>
                
            </>
                
            

        )
    }
}

export default ItemsContainer;
