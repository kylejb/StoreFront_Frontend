import React from 'react';

const CartMenuPart = ( props ) => {

    return (
        <div className="cart-item">
            <div className="image">
                <img src={props.item.img || props.item.img_url}  alt={props.item.name}/>
            </div>
            <div className="column">
                <div>
                    Name: {props.item.name}
                </div>
                <div>
                    Price: ${props.item.cost}
                </div>
                <div>
                    Quantity: {props.item.quantity}
                </div>
                
            </div>   

            <div className="column">
                    <strong>Total: ${(props.item.quantity * props.item.cost).toFixed(2)} </strong>
            </div>

            <button className={props.styling} onClick={()=>props.addToCart(props.item,"remove")} >remove </button>
            <button className={props.styling} onClick={()=>props.addToCart(props.item,"delete")} >Delete Item </button>
         </div> 
    );
}

export default CartMenuPart;

CartMenuPart.defaultProps={
    styling: undefined
}