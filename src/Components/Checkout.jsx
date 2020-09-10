import React, { Component }  from 'react';
import PurchaseForm from './PurchaseForms/PurchaseForm'
import CartMenuPart from './cartMenu/cartMenu.component'
import {Link} from 'react-router-dom'

class Checkout extends Component {

    state = {
        showForm: false,
        redirects: false, 
        prevOrder: [] 
    }

    makePayment = async (billingAddressObj, shippingAddressObj) => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `bearer ${this.props.token}`
            },
            body: JSON.stringify( { payment: { order: [{ cart: this.props.cart, shipping: shippingAddressObj, billing: billingAddressObj }], total: parseInt(this.calculateGrandTotal(this.props.total()))*100 }})
        };
        let response = await fetch("http://localhost:3000/api/v1/payments", options);
        if (response.ok) { 
            this.setState({redirects: true, prevOrder: this.props.cart});
            this.props.clearCart();
        };
        // let data = await response.json();
    }

    handleOrder = () => {
        return (<PurchaseForm cart={this.props.cart} token={this.props.token} makePayment={this.makePayment} total={this.calculateGrandTotal(this.props.total())}/>)
    }


    calculateGrandTotal=(subtotal)=>{
        const shipping = 3.99
        const taxes = (parseFloat(subtotal)+shipping) * 0.08875
        const grandTotal=(parseFloat(this.props.total())+shipping+taxes).toFixed(2)
        return grandTotal
    }

    render() {
        return (
            <>
                {!this.state.redirects ? 
                <>
                    {this.props.cart.map(itemObj  => <CartMenuPart key={itemObj.id} item={itemObj} />  )}

                    <h2>Checkout Confirmation</h2>

                    <h3>Subtotal = ${this.props.total()}</h3>
                    {(this.props.total() >= .5) ?  (<button onClick={() => this.setState({ showForm: true })} value="Place Order" >Confirm Payment Details</button>) : null }
                    <Link to="/" key="back to shopping" ><button >Back to Shopping</button> </Link>
                    { this.state.showForm ? this.handleOrder() : null }
                </>
                : 
                <div>
                {/* Order Confirmation Here */}
                    <h3>Purchase Confirmation</h3>
                    {this.state.prevOrder.map(itemObj  => <CartMenuPart key={itemObj.id} item={itemObj} />  )}
                </div> }
            </>
        );   
    }
}

export default Checkout;