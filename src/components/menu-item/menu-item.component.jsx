import React from 'react'
import {Link ,withRouter} from 'react-router-dom'
import './menu-item.styles.scss'

const MenuItem = ({title, imageUrl, size , history, linkUrl, match}) => {
    
    return (
        <div className={`menu-item ${size}`}
         onClick={() =>history.push(`${match.url}${linkUrl}`)}>
            <div className="background-image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }} 
            />
            
            <div  className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">Shop Now</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem);
