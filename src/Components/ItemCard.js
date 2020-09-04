import React from "react"

class ItemCard extends React.Component{


    render(){
        return(
            <div>
            <h3>{this.props.name}</h3>
                <h4>{this.props.cost}</h4>
                </div>
        )




    }
    
}



export default ItemCard