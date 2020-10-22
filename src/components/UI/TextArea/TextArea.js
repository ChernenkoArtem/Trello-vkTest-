import React from "react"
import "./TextArea.css"

const TextArea =(props)=> {
  return(
    <div className={'TextArea'}>
      <textarea onBlur={props.focusOff} onChange={props.onChangeArea} value={props.texAreaValue}  placeholder={props.areaPlaceholder}></textarea>
      { props.isButtonNeed
        ?
      <div>
        <button className={'btnAddCard'} onClick={props.btnClickAdd}>{props.btnAddCardValue}</button>
        <button className={'btnCloseCard'} onClick={props.btnClickClose}>{props.btnCloseCardValue}</button>
      </div>
        : null
      }
    </div>
  )

}
export default TextArea