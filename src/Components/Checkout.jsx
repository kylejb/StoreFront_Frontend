import React, { Component }  from 'react';
import PurchaseForm from './PurchaseForms/PurchaseForm'
import CartMenuPart from './cartMenu/cartMenu.component'
import {Link} from 'react-router-dom'

class Checkout extends Component {

    state = {
        showForm: false
    }

    handleOrder = () => {
        console.log("Cart: Clicking to go to order page")
        return (<PurchaseForm cart={this.props.cart} token={this.props.token} />)
    }




    calculateSubTotal = () =>{
        return this.props.cart.map(item => item.cost).reduce((a,b)=>a+b,0)
    }

    render() {
        console.log("Cart Props ", this.props.cart,"this is the subtotal",this.props.total())
        return (
            <>
              
              {this.props.cart.map(itemObj  => <CartMenuPart key={itemObj.id} item={itemObj} />  )}




                <h2>Cart: checkout cart onClick...</h2>


                <h3>Subtotal = ${this.props.total()}</h3>
               {(this.props.total() >= 5) ?  (<button onClick={() => this.setState({ showForm: true })} value="Place Order" >Confirm Payment Details</button>) : null }
               <Link to="/" key="back to shopping" ><button >Back to Shopping</button> </Link>
                { this.state.showForm ? this.handleOrder() : null }
            </>
        );
     };
}

export default Checkout;