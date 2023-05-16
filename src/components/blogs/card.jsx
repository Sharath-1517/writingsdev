import React from 'react'

const Card = (props) => {

  return (
    <div className='card'>
        <img src={props.imgsrc} alt={`Blog ${props.id}`} />
        <h2>{props.text.heading}</h2>
        <p>{props.text.detail}</p>
        <div className="field">
            <h4>{props.day}</h4>
            <span>.</span>
            <h4>{props.field}</h4>
        </div>
    </div>
  )
}

export default Card;