import React from 'react'
import Slider from 'infinite-react-carousel';
import FeaturedItemDisplay from '../../Components/Main Page/FeaturedItemDisplay'
import ItemList from '../ItemList'


class MainPageContainer extends React.Component{
    

    renderFeaturedItems = ()=>{
        return this.props.featuredItems.map(itemObj => <FeaturedItemDisplay key={itemObj.id} name={itemObj.name} img={itemObj.img_url} description={itemObj.description} id={itemObj.id}/>)
    }

    // Here is where we randomly select a few items to display as feature. if we do something else in the backend to determine hottest selling item, we can replace this with the appropriate code

    randomlySelectItems = () =>{
        
            if (this.props.newArrivals[0]){
         
            return  <ItemList items={this.props.newArrivals}  addToCart={this.props.addToCart}/> 
            }
    
         }



    render(){
        const settings =  {
            arrows: false,
            autoplay: true,
            dots: true,
            adaptiveHeight: true,
          };
        return(
<div>
        <h2>New Arrivals</h2>
        {this.props.items[0]? 
        <Slider { ...settings }>
            {this.renderFeaturedItems() }
        </Slider>
        : null}



        <h2> Featured Items</h2>
            {this.randomlySelectItems()}


      </div>




            
        )
    }
}

export default MainPageContainer


