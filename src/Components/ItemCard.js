import React from "react"
import {Link} from 'react-router-dom'

class ItemCard extends React.Component{

    seeMore =()=>{
        console.log(this.props.name, "was clicked to show the show page")
        // return (
        // <div className="fling-minislide">
        //     <img src={this.props.img} alt={this.props.name} className="product-image" />
        //     <img src={this.props.img} alt={this.props.name} className="product-image" />
        //     <img src={this.props.img} alt={this.props.name} className="product-image" />
        // </div>
        // );
    }

    addToCart =()=>{
        console.log(this.props.name, "was added to cart")
    }
    

    render(){
        return(
            

    <div className="card">
        <Link key={this.props.id} to ={`/items/${this.props.id}`}>
        {/* {this.seeMore} */}
        <img src={this.props.img} alt={this.props.name} className="product-image"  />
        <button  onClick={this.addToCart}>Add to Cart {"🛒"}</button>
        </Link>
        <h2>{this.props.name}</h2>
       
        <h3>{`$${this.props.cost}`}</h3>
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