import React from "react"
import "./Card.css"

const Card =(props)=> {
  return(
    <div className={'Card'}>
      {props.cardText}
    </div>
  )
}
export default Card