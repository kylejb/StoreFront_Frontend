import React from 'react';
import { Link } from 'react-router-dom';
import CartMenuPart from './cartMenu.component';

class CartMenu extends React.Component{
    constructor(){
        super()
        this.state=({
            clickStatus: undefined
        });
    }

        mouseChange = () =>{
            let status = this.state.clickStatus
            this.state.clickStatus? status=undefined: status="show"
            this.setState({
                ...this.state,
                clickStatus: status
            })
        }
    
        displayCartItem = ( itemObj => <CartMenuPart item={itemObj}  addToCart={this.props.addToCart}/>)

        displayCart =() =>{
            if(this.props.cart[0]){
                return(
                    <div style={{width:"100%"}}>
                        {this.props.cart.map(this.displayCartItem)}

                        <strong>Subtotal: ${this.props.total()}</strong>
                        
                        <Link to="/checkout" key="quick-cart-button">
                            <button ><strong>View Cart and Checkout</strong></button>
                        </Link>
                    </div>
                )
            } else {
                return(
                    <>
                        <p> Cart is Empty</p>
                        <img src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG4.png" alt="shopping cart logo" style={{width:"100%"}} />
                    </>
                )
            }
        }


    render(){
        
        return(
            <>
                <p id="roundButton" onClick={this.mouseChange}><strong>{this.props.cart.map(item => item.quantity).reduce((a,b)=>a+b,0)}</strong></p>
                
                <div className={this.state.clickStatus} id="cartMenu" onMouseLeave={this.mouseChange}>
                    <h2>My Shopping Cart</h2>
                    <ul>
                        {this.displayCart()}  
                    </ul>  
                </div>
            </>
        )
    }
}

export default CartMenu;
