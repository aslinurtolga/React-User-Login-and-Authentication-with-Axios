import React from 'react'
import "./Card.css"

const Card = ({title,imageUrl,body}) => {
  return (
    <div className='card-container'>
        <div className="image-conatiner">
            <img src={imageUrl} alt={body} />
        </div>
    </div>
  )
}

export default Card