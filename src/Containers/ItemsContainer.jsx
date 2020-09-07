import React from 'react';
import ItemList from './ItemList'
import {Route} from "react-router-dom"
import ItemShow from '../Components/ItemShow'

const API = 'http://localhost:3000/'
class ItemsContainer extends React.Component {
    constructor(){
        super()
        this.state={
            items: [{"id":1,"name":"Name1","img_url":"http://lorempixel.com/402/200/","cost":1.0,"description":"Description1","created_at":"2020-09-04T07:43:30.877Z","updated_at":"2020-09-04T07:43:30.877Z","category":"CategoryKids"}
        ],
            swag: {"id":1,"name":"Name1","img_url":"http://lorempixel.com/402/200/","cost":1.0,"description":"Description1","created_at":"2020-09-04T07:43:30.877Z","updated_at":"2020-09-04T07:43:30.877Z","category":"CategoryKids"}
            
        }

    }


    componentDidMount(){
        fetch(API+"items")
        .then(response => response.json())
        .then(itemsObj => {

            this.setState({...this.state,
            items: itemsObj})}

        )
    }




    render(){
         
        return(
            <>
                
                <Route  path={`/items/:itemId`} render={routerProps => <ItemShow {...routerProps} items={this.state.items} addToCart ={this.props.addToCart} /> }/>
                <Route exact path="/items" render={routerProps => <ItemList {...routerProps} items={this.state.items} addToCart ={this.props.addToCart}/> }/>

                
                
            </>
        )
    }


}

export default ItemsContainer;
