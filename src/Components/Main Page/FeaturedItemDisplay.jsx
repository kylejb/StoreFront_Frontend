import React from 'react'
import {Link} from 'react-router-dom'


const FeaturedItemDisplay = (props) =>{






return(

    <Link to={`/items/${props.id}/`} key={props.id} >
        <div classNameName="mainPage-container">
                         <div className="mainPageImage">
                             <img src={props.img} />
                         </div>
                    
                         <div classNameName="mainPage-column">
                             <div>{props.name}</div>
                             <div>{props.description}</div>
                        </div>
                     </div>
                     </Link>

)





}

export default FeaturedItemDisplay;