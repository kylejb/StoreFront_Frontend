import React, { Component } from 'react';
import UserContainer from './UserContainer';
import ItemsContainer from './ItemsContainer';

class UserItemsWrapper extends Component {
    //? Lift state from UserContainer and ItemsContainer OR do we keep state one level lower and use this wrapper to trigger render on load?
            //? If yes, uncomment below, pass function(s) to respective component as prop, and delete the corresponding functions from 'UserContainer.jsx' and 'ItemsContainer.jsx':
                //! NOTE: 
                    //* prop for handleLoginForm and handleRegistrationForm should be called 'handleSubmit' and fed to 'UserContainer'
                    //* prop for cart should be called 'addToCart' and fed to 'ItemsContainer'

    /* <<<START

    state = {
        currentUser: null,
        token: null,
        cart: []
    }
 
    const handleLoginForm = async (currentUserObj) => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({ user: currentUserObj })
        };
        let response = await fetch("http://localhost:3000/api/v1/login", options);
        let data = await response.json();
        newState = {...this.state}; newState.currentUser = data.user; newState.token = data.jwt;
        this.setState({newState});
    }

    const handleRegistrationForm = async (newUserObj) => {
        console.log("Create New User Here", newUserObj)

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({ user: newUserObj })
        };

        let response = await fetch("http://localhost:3000/api/v1/users", options);
        let data = await response.json();
        console.log("handleRegistrationForm Fetch Response: ", data);
        newState = {...this.state}; newState.currentUser = data.user; newState.token = data.jwt;
        this.setState({newState});
    }

    //* Add to Cart
    handleAddToCart = ( selectedProduct ) => {
        console.log("handleAddToCart in ItemsContainer... arg is: ", selectedProduct);
        //* cart testing (see code/comments below for ideas to make cart more robust)
        let newCartArray = [...this.state.cart, selectedProduct];
        this.setState({ cart: newCartArray }, () => console.log("ItemsContainer CartState: ", this.state.cart));

        //? do we need to set a quantity prop/state to cart mechanism to streamline cart display
        // below is a start for possible improvements to the cart... based on quantity to collapse list of items in cart
        let cartItem = [...this.state.cart],
            productId = selectedProduct.id,
            productQuantity = selectedProduct.quantity;
        if (this.checkProduct(productId)) {
            console.log("Product ID is currently in Cart... thus, quantity of this product should be increased by one.");
            //* '==' to avoid parseInt()
            let index = cartItem.findIndex( c => c.id == productId );
            cartItem[index]
        }
        
    }
       
    //* Add to Cart Helper - product verification
    checkProduct(productId) {
        let cart = this.state.cart;
        return cart.some((item) => item.id === productId);
    }

    END>>> */
   

    render() {
        return (
            <>
                <h4>UserItemWrapper</h4>
                <UserContainer />
                <ItemsContainer />
            </>
        );
    }
}

export default UserItemsWrapper;