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
            items: []
        }
    }

    getItems = () => {
        fetch(API+"items")
        .then(response => response.json())
        .then(itemsObj => {
            this.setState({...this.state,
            items: itemsObj})}
        );
    }

    componentDidMount() {
       this.getItems();
    }



    render(){
        
        return(
            <>
            <CartMenu  cart={this.props.cart} total={this.props.total}  addToCart={this.props.addToCart} />
            <Route exact path="/" render={(routerProps) => <MainPageContainer {...routerProps} items={this.state.items} addToCart={this.props.addToCart} />} />
                <div className="grid-container">
                    <Route  path={`/items/:itemId`} render={routerProps => <ItemShow {...routerProps} items={this.state.items} addToCart={this.props.addToCart} />} />
                    <Route  exact path="/items" render={routerProps => <ItemList {...routerProps} items={this.state.items} addToCart={this.props.addToCart} />} />
                 </div>
                
            </>
                
            

        )
    }
}

export default ItemsContainer;
