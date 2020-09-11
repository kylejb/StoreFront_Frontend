import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ItemsContainer from './ItemsContainer';
import Checkout from '../Components/Checkout';


class ShopContainer extends Component {

    state = {
        cart: []
    }

    // Modifies Cart
    handleAddToCart = ( selectedProduct, change = "add" ) => {

        let newCartArray = [...this.state.cart], 
            selectedProductCartIndex = this.state.cart.findIndex( itemObj => itemObj.id === selectedProduct.id );

        if (selectedProductCartIndex !== -1) {
            switch (change) {
                case "add":
                    newCartArray[selectedProductCartIndex].quantity += 1;
                    break;
                case "remove":
                    (newCartArray[selectedProductCartIndex].quantity <= 1) ? newCartArray.splice(selectedProductCartIndex,1) : newCartArray[selectedProductCartIndex].quantity -= 1; 
                    break;
                case "delete":
                    newCartArray.splice(selectedProductCartIndex, 1);
                    break;
                default:
                    // placeholder for error handling
                    break;
            };
        } else {
            newCartArray.push({...selectedProduct, quantity: 1})
        };
        this.setState({ cart: newCartArray });
    }

    //* Add to Cart Helper - product verification
    checkProduct = (productId) => {
        let cart = this.state.cart;
        return cart.some((item) => item.id === productId);
    }

    calculateSubTotal = () => {
        return this.state.cart.map(item => item.cost*item.quantity).reduce((a,b)=>a+b,0).toFixed(2)
    }

    clearCart = () => {
        this.setState({...this.state, cart: [] })
    }
   

    render() {
        console.log("Render ShopContainer (state) is: ", this.state);

        return (
            <>
                <h4>Shop Container</h4>
                <Route exact path="/checkout" render={() => <Checkout cart={this.state.cart} total={this.calculateSubTotal} token={this.props.token} clearCart={this.clearCart} addToCart={this.handleAddToCart} />} />
                <ItemsContainer addToCart={this.handleAddToCart} cart={this.state.cart} total={this.calculateSubTotal}/>
            </>
        );
    }
}

export default ShopContainer;