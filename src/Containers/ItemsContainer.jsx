import React from 'react';
import { Route } from "react-router-dom";
import ItemList from './ItemList';
import ItemShow from '../Components/ItemShow';


const API = 'http://localhost:3000/';


class ItemsContainer extends React.Component {
    constructor(){
        super()
        this.state={
            items: [{"id":1,"name":"Name1","img_url":"http://lorempixel.com/402/200/","cost":1.0,"description":"Description1","created_at":"2020-09-04T07:43:30.877Z","updated_at":"2020-09-04T07:43:30.877Z","category":"CategoryKids"}],             
        }
    }

    getItems = () => {
        fetch(API+"items")
        .then(response => response.json())
        .then(itemsObj => {
            this.setState({...this.state,
            items: itemsObj})}
        );
    }

    componentDidMount() {
       this.getItems();
    }

    render() {
        console.log("ItemsContainer ", this.props)
        return (
            <div className="grid-container">
                    <Route  path={`/items/:itemId`} render={routerProps => <ItemShow {...routerProps} items={this.state.items} addToCart={this.props.addToCart} />} />
                    <Route  exact path="/items" render={routerProps => <ItemList {...routerProps} items={this.state.items} addToCart={this.props.addToCart} />} />
            </div>
        )
    }
}

export default ItemsContainer;
