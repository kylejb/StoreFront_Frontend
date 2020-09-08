import React, { Component }  from 'react';

class Cart extends Component {

    render() {
        console.log("Cart Props ", this.props)
        return (
            <h2>Cart</h2>
        );
     };
}

export default Cart;