import React from "react"
import {Link} from 'react-router-dom'

class ItemCard extends React.Component{

    seeMore =()=>{
        // return (
        // <div className="fling-minislide">
        //     <img src={this.props.img} alt={this.props.name} className="product-image" />
        //     <img src={this.props.img} alt={this.props.name} className="product-image" />
        //     <img src={this.props.img} alt={this.props.name} className="product-image" />
        // </div>
        // );
    }

    addToCartHelper = ( e ) => {
        e.preventDefault();
        this.props.addToCart(this.props);
    }
    

    render(){
        return(
            

    <div className="card">
        <div className="card-image">

            <Link key={this.props.id} to ={`/items/${this.props.id}`}>
                <img src={this.props.img} alt={this.props.name} className="product-image" />
            </Link>
            <button className="corner-button" onClick={this.addToCart}>🛒</button>
        </div>
        <button  onClick={this.addToCartHelper}>Add to Cart {"🛒"}</button>
        <div className="title">
        <h2>{this.props.name}</h2>
        </div>
        <div>
        <h3>{`$${this.props.cost}`}</h3>
        </div>
        <div className="button-container">
        <Link key={this.props.id} to ={`/items/${this.props.id}`}>
        <button  onClick={this.seeMore}>See More</button>
        </Link>
        </div>
    </div>
        )


        



    }
    
}



export default ItemCard