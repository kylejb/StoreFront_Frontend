import React from 'react'
import {Link} from 'react-router-dom'


const FeaturedItemDisplay = (props) =>{






return(

    <Link to={`/items/${props.id}/`} key={props.id} >
        <div className="mainPage-container">
                         <div className="mainPageImage">
                             <img src={props.img} alt={props.name}/>
                         </div>
                    
                         <div className="mainPage-column">
                             <div>{props.name}</div>
                             <div>{props.description}</div>
                        </div>
                     </div>
                     </Link>

)





}

export default FeaturedItemDisplay;