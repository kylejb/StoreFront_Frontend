import React from 'react'

class CartMenu extends React.Component{
    constructor(){
        super()
        this.state=({
            clickStatus: undefined
        })
        }

        mouseAdd = () =>{
            this.setState({
                ...this.state,
                clickStatus: "show"
            })
        }


        mouseRemove = () =>{
            this.setState({
                ...this.state,
                clickStatus: ""
            })
        }
    

        displayCart =() =>{
            if(this.props.cart[0]){
                console.log(this.props.cart[0])
            }
        }


    render(){
    return(
    <>
        <button id="roundButton" onClick={this.mouseAdd}></button>
        <div className={this.state.clickStatus} id="cartMenu" onMouseLeave={this.mouseRemove}>
            <h2>My Shopping Cart</h2>
            <ul>
                {this.displayCart()}
                {/* <li>({this.props.cart[0].name}</li> */}
                <li> Turd Burglar</li>
                <li> chewbacca</li>

            </ul>
           
        </div>
    </>
    )
    }
}


export default CartMenu;
