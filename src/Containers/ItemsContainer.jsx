import React from 'react';
import ItemList from './ItemList'
import { Route, Switch } from "react-router-dom"
import ItemShow from '../Components/ItemShow'
import CartMenu from '../Components/cartMenu/cartMenu'
import MainPageContainer from "./Main Page/MainPageContainer"
// import Cart from '../Components/Cart';

const API = 'http://localhost:3000/'
class ItemsContainer extends React.Component {
    constructor(){
        super()
        this.state={
            items: [{"id":1,"name":"Name1","img_url":"http://lorempixel.com/402/200/","cost":1.0,"description":"Description1","created_at":"2020-09-04T07:43:30.877Z","updated_at":"2020-09-04T07:43:30.877Z","category":"CategoryKids"}],
            cart:[]
              
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

    // Add to Cart
    handleAddToCart = ( selectedProduct ) => {
        console.log("handleAddToCart in ItemsContainer... arg is: ", selectedProduct);
        // cart testing (see code/comments below for ideas to make cart more robust)
        let newCartArray = [...this.state.cart, selectedProduct];
        this.setState({ ...this.state, cart: newCartArray }, () => console.log("ItemsContainer CartState: ", this.state.cart));

        //? we need to set a quantity prop/state to cart mechanism to streamline cart display
        /* 
        let cartItem = [...this.state.cart],
            productId = selectedProduct.id,
            productQuantity = selectedProduct.quantity;
        if (this.checkProduct(productId)) {
            console.log("Product ID is currently in Cart... thus, quantity of this product should be increased by one.");
            //* '==' to avoid parseInt()
            let index = cartItem.findIndex( c => c.id == productId );
            cartItem[index]
        }
        */
    }

    // Add to Cart Helper - product verification
    checkProduct(productId) {
        let cart = this.state.cart;
        return cart.some((item) => item.id === productId);
    }

    //? Should be moved to ItemsList (-@kylejb)
    render(){
        return(
            <>
            <CartMenu  cart={this.state.cart}  />
            <Route path="/" render={(routerProps) => <MainPageContainer {...routerProps} />} />
                <div className="grid-container">
                    <Route  path={`/items/:itemId`} render={routerProps => <ItemShow {...routerProps} items={this.state.items} addToCart={this.handleAddToCart} /> }/>
                    <Route exact path="/items" render={routerProps => <ItemList {...routerProps} items={this.state.items} addToCart={this.handleAddToCart}/> }/>
                 </div>
                
            </>
                
            
        )
    }
}

export default ItemsContainer;
