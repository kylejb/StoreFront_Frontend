import React from 'react'
import Slider from 'infinite-react-carousel';
import FeaturedItemDisplay from '../../Components/Main Page/FeaturedItemDisplay'
import ItemList from '../ItemList'


class MainPageContainer extends React.Component{
    constructor (){
        super()
        this.state= {
            featuredItems:
[{"id":301,"name":"In the beginning, the Universe was created. This has made a lot of people very angry and been widely regarded as a bad move.1","img_url":"http://lorempixel.com/602/100/","cost":0.08,"description":"You want to enjoy life, don't you? If you get your job done quickly and your job is fun, that's good isn't it? That's the purpose of life, partly. Your life is better.","created_at":"2020-09-08T08:36:27.418Z","updated_at":"2020-09-08T08:36:27.418Z","category":"CategoryKids"},
{"id":302,"name":"Star Wars2","img_url":"http://lorempixel.com/302/100/","cost":0.01,"description":"Use your feelings, Obi-Wan, and find him you will.","created_at":"2020-09-08T08:36:27.429Z","updated_at":"2020-09-08T08:36:27.429Z","category":"CategoryWomen"},
{"id":303,"name":"The Lord of the Rings: The Two Towers3","img_url":"http://lorempixel.com/202/800/","cost":0.02,"description":"You want to enjoy life, don't you? If you get your job done quickly and your job is fun, that's good isn't it? That's the purpose of life, partly. Your life is better.","created_at":"2020-09-08T08:36:27.435Z","updated_at":"2020-09-08T08:36:27.435Z","category":"CategoryKids"},
{"id":304,"name":"In the beginning, the Universe was created. This has made a lot of people very angry and been widely regarded as a bad move.4","img_url":"http://lorempixel.com/102/900/","cost":0.01,"description":"You want to enjoy life, don't you? If you get your job done quickly and your job is fun, that's good isn't it? That's the purpose of life, partly. Your life is better.","created_at":"2020-09-08T08:36:27.451Z","updated_at":"2020-09-08T08:36:27.451Z","category":"CategoryKids"},
{"id":305,"name":"Star Wars5","img_url":"http://lorempixel.com/702/200/","cost":0.08,"description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum","created_at":"2020-09-08T08:36:27.459Z","updated_at":"2020-09-08T08:36:27.459Z","category":"CategoryKids"},
{"id":306,"name":"Star Wars6","img_url":"http://lorempixel.com/202/700/","cost":0.0,"description":"You want to enjoy life, don't you? If you get your job done quickly and your job is fun, that's good isn't it? That's the purpose of life, partly. Your life is better.","created_at":"2020-09-08T08:36:27.466Z","updated_at":"2020-09-08T08:36:27.466Z","category":"CategoryWomen"}

            ]
        }
    }

    renderFeaturedItems = ()=>{
        return this.state.featuredItems.map(itemObj => <FeaturedItemDisplay key={itemObj.id} name={itemObj.name} img={itemObj.img_url} description={itemObj.description} id={itemObj.id}/>)
    }

    // Here is where we randomly select a few items to display as feature. if we do something else in the backend to determine hottest selling item, we can replace this with the appropriate code

    randomlySelectItems = () =>{


         
            if (this.props.items[0]){
              const randomNumber = Math.floor(Math.random()*(this.props.items.length-5))
              const randomItems = this.props.items.slice(randomNumber,randomNumber+5)
              console.log("i am inside the random generator method",randomNumber, randomItems )

            return  <ItemList items={randomItems}  addToCart ={this.props.addToCart}/> 
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
        <Slider { ...settings }>
            {this.renderFeaturedItems() }
        </Slider>



        <h2> Featured Items</h2>
            {this.randomlySelectItems()}


      </div>




            
        )
    }
}

export default MainPageContainer


