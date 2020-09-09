import React, { Component }  from 'react';
import PurchaseForm from './PurchaseForms/PurchaseForm'

class Checkout extends Component {

    state = {
        showForm: false
    }

    handleOrder = () => {
        console.log("Cart: Clicking to go to order page")
        return (<PurchaseForm cart={this.props.cart} token={this.props.token} />)
    }

    render() {
        console.log("Cart Props ", this.props)
        return (
            <>
                {/* Render Cart Items Here*/}
                <h2>Cart: checkout cart onClick...</h2>
                <button onClick={() => this.setState({ showForm: true })} value="Place Order" />
                { this.state.showForm ? this.handleOrder() : null }
            </>
        );
     };
}

export default Checkout;