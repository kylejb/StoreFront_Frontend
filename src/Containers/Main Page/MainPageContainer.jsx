import React from 'react'
import Slider from 'infinite-react-carousel';
import {Link} from 'react-router-dom'



class MainPageContainer extends React.Component{






    render(){
        const settings =  {
            arrows: false,
            autoplay: true,
            dots: true
          };
        return(
<div>
        <span>CustomSlider</span>
        <Slider { ...settings }>
            <Link to={`/items/303/`} >
        <div classNameName="mainPage-container">
                         <div className="mainPageImage">
                             <img src="http://lorempixel.com/702/200/" />
                         </div>
                    
                         <div classNameName="mainPage-colum">
                             <div>Name: Star Wars55</div>
                             <div>Price: $0.08</div></div>
                        
                         <div>Quanity: 1</div>
                    
                     </div>
                     </Link>

                     <div className="mainPage-container">
                         <div className="mainPageImage">
                             <img src="http://lorempixel.com/1002/200/" />
                         </div>
                    
                         <div className="mainPage-column">
                             <div>Name: Star Wars55</div>
                             <div>Price: $0.08</div></div>
                        
                    
                     </div>



        </Slider>
      </div>

            
        )
    }
}

export default MainPageContainer



// <div classNameName="parent">

            //         <div classNameName="mainPage-container">
            //             <div classNameName="image">
            //                 <img src="http://lorempixel.com/702/200/" />
            //             </div>
                    
            //             <div classNameName="column">
            //                 <div>Name: Star Wars55</div>
            //                 <div>Price: $0.08</div></div>
                        
            //             <div>Quanity: 1</div>
                    
            //         </div>
                    
            //         <div classNameName="mainPage-container">
            //             <div classNameName="image">
            //                 <img src="http://lorempixel.com/702/200/" />
            //             </div>
                    
            //             <div classNameName="column">
            //                 <div>Name: Star Wars55</div>
            //                 <div>Price: $0.08</div></div>
                        
            //             <div>Quanity: 1</div>
                    
            //         </div>
            //         <div classNameName="mainPage-container">
            //             <div classNameName="image">
            //                 <img src="http://lorempixel.com/702/200/" />
            //             </div>
                    
            //             <div classNameName="column">
            //                 <div>Name: Star Wars55</div>
            //                 <div>Price: $0.08</div></div>
                        
            //             <div>Quanity: 1</div>
                    
            //         </div>
            
            
            
           

            
