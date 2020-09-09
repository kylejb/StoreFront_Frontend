import React from 'react'
import {Link} from 'react-router-dom'

class CartMenu extends React.Component{
    constructor(){
        super()
        this.state=({
            clickStatus: undefined
        })
        }

        mouseChange = () =>{
            let status = this.state.clickStatus
            this.state.clickStatus? status=undefined: status="show"
            this.setState({
                ...this.state,
                clickStatus: status
            })
        }
    


        displayCartItem=(itemObj)=>{
            console.log(itemObj)
        return(

            <div className="cart-item">
                <div className="image">
                    <img src={itemObj.img} />
                </div>
                <div class="column">
                    <div>
                        Name: {itemObj.name}
                    </div>
                    <div>
                        Price: ${itemObj.cost}
                    </div>
                    <div>
                        Quanity: 1
                    </div>
                </div>
                
                
             </div> 
    
       
    
        )
        }











        displayCart =() =>{
            if(this.props.cart[0]){
                return(
                            <div  style={{width:"100%"}}>
                                
                                
                                {this.props.cart.map(this.displayCartItem)}
                                
                                <Link to="/cart" key="quick-cart-button">
                                    <button ><strong>View Cart and Checkout</strong></button>
                                </Link>

                            </div>
                )
            }else{
                return(
                    <>
                <p> Cart is Empty</p>
                <img src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG4.png" style={{width:"100%"}} />
                </>
                )
            }
        }


    render(){
    return(
    <>
        <button id="roundButton" onClick={this.mouseChange}></button>
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
