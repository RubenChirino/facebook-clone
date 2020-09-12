import React from 'react'

//MATERIAL UI
import { Avatar } from '@material-ui/core'

export default function Story({ image, profileSrc, title }) {
    return (
        <div style={{backgroundImage: `url(${image})`}} className="story">
            
           <Avatar className="story__avatar" src={profileSrc} />
           <h4>{title}</h4>

        </div>
    )
}
 
