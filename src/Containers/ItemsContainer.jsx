import React from 'react';
import ItemList from './ItemList'

const API = 'http://localhost:3001/'
class ItemsContainer extends React.Component {
    constructor(){
        super()
        this.state={
            items: []
        }

    }


    componentDidMount(){
        // fetch(API+"items")
        // .then(response => response.json())
        // .then(itemsObj => {

        //     this.setState({...this.state,
        //     items: itemsObj})}

        // )
 
        this.setState({...this.state,
            items: [
                {name: "name", img_url: "image 1", cost: "cost1", description:" 1 description", category: "random category"},
                {name: "name", img_url: "image 1", cost: "cost1", description:" 1 description", category: "random category"},
                {name: "name", img_url: "image 1", cost: "cost1", description:" 1 description", category: "random category"},
                {name: "name", img_url: "image 1", cost: "cost1", description:" 1 description", category: "random category"},
                {name: "name", img_url: "image 1", cost: "cost1", description:" 1 description", category: "random category"},
                {name: "name", img_url: "image 1", cost: "cost1", description:" 1 description", category: "random category"},
                {name: "name", img_url: "image 1", cost: "cost1", description:" 1 description", category: "random category"},
                {name: "name", img_url: "image 1", cost: "cost1", description:" 1 description", category: "random category"}]})
    }




    render(){

        return(
            <>
                <h1>Hello</h1>
                <ItemList items={this.state.items}/>
            </>
        )
    }


}

export default ItemsContainer;