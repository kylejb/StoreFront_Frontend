import React, { Component }  from 'react';
import PurchaseForm from './PurchaseForms/PurchaseForm'
import CartMenuPart from './cartMenu/cartMenu.component'
import {Link} from 'react-router-dom'

class Checkout extends Component {

    state = {
        showForm: false,
        redirects: false, 
        prevOrder: [] ,
        receipt: ""
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
        let data = await response.json();
        this.setState({...this.state,receipt:data.payment_confirmation})
        

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
        const shipping = 3.99
        return (
            <>
                {!this.state.redirects ? 
                <>
                <h2>Checkout Confirmation</h2>
                    {this.props.cart.map(itemObj  => <CartMenuPart key={itemObj.id} item={itemObj} addToCart={this.props.addToCart} styling = "checkOut"/>  )}


                    <h3>Subtotal = ${this.props.total()}</h3>
                    { (this.props.total() >= .5) ? ( <>
                        <h5>Taxes: ${((parseFloat(this.props.total())+shipping) * 0.08875).toFixed(2)}</h5>
                        <h5>Shipping: ${shipping}</h5> 
                        <h2> TOTAL: ${this.calculateGrandTotal(this.props.total())} </h2>
                    
                    </>) : null}
                    {(this.props.total() >= .5) ?  (<button onClick={() => this.setState({ showForm: true })} value="Place Order" >Confirm Payment Details</button>) : null }



                    <Link to="/" key="back to shopping" ><button >Back to Shopping</button> </Link>
                    { this.state.showForm ? this.handleOrder() : null }
                </>
                : 
                <div>
                {/* Order Confirmation Here */}
                    <h3>Purchase Confirmation</h3>
                    {this.state.prevOrder.map(itemObj  => <CartMenuPart key={itemObj.id} item={itemObj} />  )}
                    <h2> Receipt </h2>
                    <a target ="_blank" href= {this.state.receipt} ><h3>{this.state.receipt}</h3></a> 
                </div> }
            </>
        );   
    }
}

export default Checkout;