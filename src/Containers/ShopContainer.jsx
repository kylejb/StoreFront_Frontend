import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ItemsContainer from './ItemsContainer';
import Checkout from '../Components/Checkout';


class ShopContainer extends Component {

    state = {
        cart: []
    }

    //* Add to Cart
    handleAddToCart = ( selectedProduct,change="add" ) => {
        console.log("handleAddToCart in ShopContainer... arg is: ", selectedProduct);
        //* cart testing (see code/comments below for ideas to make cart more robust)
        // let newCartArray = [...this.state.cart, selectedProduct];
        // this.setState({ cart: newCartArray }, () => console.log("ShopContainer CartState: ", this.state.cart));
        let newCartArray = this.state.cart

        let luis = this.state.cart.findIndex(itemObj=> itemObj.id === selectedProduct.id)
        if (luis !==-1){
            change === "add" ?   newCartArray[luis].quantity += 1 : newCartArray[luis].quantity -= 1

            newCartArray[luis].quantity <1 ? newCartArray.splice(luis,1) : selectedProduct="beer"
           


        } else{
          newCartArray = [...this.state.cart, {...selectedProduct,quantity:1}]
        }

       this.setState({ cart: newCartArray }, () => console.log("ShopContainer CartState: ", this.state.cart));
    }
       
    //* Add to Cart Helper - product verification
    checkProduct(productId) {
        let cart = this.state.cart;
        return cart.some((item) => item.id === productId);
    }

    calculateSubTotal = () =>{
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
                <Route exact path="/checkout" render={() => <Checkout cart={this.state.cart} total={this.calculateSubTotal} token={this.props.token} clearCart={this.clearCart} />} />
                <ItemsContainer addToCart={this.handleAddToCart} cart={this.state.cart} total={this.calculateSubTotal}/>
            </>
        );
    }
}

export default ShopContainer;