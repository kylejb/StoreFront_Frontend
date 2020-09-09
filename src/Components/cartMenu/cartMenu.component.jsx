import React from 'react';

const CartMenuPart = ( props ) => {

    return (
        <div className="cart-item">
            <div className="image">
                <img src={props.item.img} />
            </div>
            <div className="column">
                <div>
                    Name: {props.item.name}
                </div>
                <div>
                    Price: ${props.item.cost}
                </div>
                <div>
                    Quanity: 1
                </div>
            </div>   
         </div> 
    );
}

export default CartMenuPart;