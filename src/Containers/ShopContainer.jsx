import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import UserContainer from './UserContainer';
import ItemsContainer from './ItemsContainer';
import Cart from '../Components/Cart';

class ShopContainer extends Component {

    state = {
        cart: []
    }

    //* Add to Cart
    handleAddToCart = ( selectedProduct ) => {
        console.log("handleAddToCart in ShopContainer... arg is: ", selectedProduct);
        //* cart testing (see code/comments below for ideas to make cart more robust)
        let newCartArray = [...this.state.cart, selectedProduct];
        this.setState({ cart: newCartArray }, () => console.log("ShopContainer CartState: ", this.state.cart));

        //? do we need to set a quantity prop/state to cart mechanism to streamline cart display
        // below is a start for possible improvements to the cart... based on quantity to collapse list of items in cart
        // let cartItem = [...this.state.cart],
        //     productId = selectedProduct.id,
        //     productQuantity = selectedProduct.quantity;
        // if (this.checkProduct(productId)) {
        //     console.log("Product ID is currently in Cart... thus, quantity of this product should be increased by one.");
        //     //* '==' to avoid parseInt()
        //     let index = cartItem.findIndex( c => c.id == productId );
        //     cartItem[index]
        // }
    }
       
    //* Add to Cart Helper - product verification
    checkProduct(productId) {
        let cart = this.state.cart;
        return cart.some((item) => item.id === productId);
    }
   

    render() {
        console.log("Render ShopContainer (state) is: ", this.state);

        return (
            <>
                <h4>Shop Container</h4>
                <Route exact path="/items/cart" render={() => <Cart cart={this.state.cart} user={this.props.user} token={this.props.token} />} />
                <ItemsContainer addToCart={this.handleAddToCart} />
            </>
        );
    }
}

export default ShopContainer;