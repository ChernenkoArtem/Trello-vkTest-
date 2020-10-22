import React,{Component} from "react"
import TextArea from "../UI/TextArea/TextArea"
import "./AddNewColumn.css"



export default class AddNewColumn extends Component {
  constructor(props) {
    super(props);
    this.props = props
    console.log(this.props)
  }
  state = {
    isAddNewColumn: false
  }

    render(){
        return(
          <div>
            { this.state.isAddNewColumn
              ? <div className={'AddNewColumn'}>
                <span>+</span>
                <span>Добавить еще одну колонку</span>
              </div>
              : <TextArea
                // onChangeArea={this.cardTextHandler}
                btnClickAdd={this.props.addNewColumn}
                // btnClickClose={this.toggleCardHandler}
                areaPlaceholder={'Ввести заголовок списка'}
                // texAreaValue={}
                btnAddCardValue={'Добавить список'}
                btnCloseCardValue={'закрыть'}
                isButtonNeed={true}
              />
            }
          </div>
        )
    }
}
