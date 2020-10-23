import React,{Component} from "react"
import TextArea from "../UI/TextArea/TextArea"
import "./AddNewColumn.css"
import ColumnList from "../ColumnList/ColumnList"

export default class AddNewColumn extends Component {
  constructor(props) {
    super(props);
    this.props = props
  }
  state = {
    isAddNewColumn: false,
    textNewColumnTitle:'',
    columnList: []
  }
  toggleTextArea =()=>{
    this.setState({
      isAddNewColumn: !this.state.isAddNewColumn
    })
  }
  changeAreaHandler =(e)=> {
    this.setState({
      textNewColumnTitle: e.target.value
    })
  }
  addNewColumnHandler =()=>{
    const list = this.state.columnList.concat()

    list.push({title: this.state.textNewColumnTitle})
    this.setState({
      isAddNewColumn: true,
      columnList: list
    })
  }
    render(){
        return(
          <React.Fragment>
            {this.state.columnList.map((column,index)=>{
              return (
                <ColumnList columnTitle={this.state.textNewColumnTitle} key={index}/>
              )
            })}
          <div className={'column-addNewColumn'}>
            { this.state.isAddNewColumn
              ? <div className={'AddNewColumn'} onClick={this.toggleTextArea}>
                <span>+</span>
                <span>Добавить еще одну колонку</span>
              </div>
              : <TextArea

                onChangeArea={this.changeAreaHandler}
                btnClickAdd={this.addNewColumnHandler}
                btnClickClose={this.toggleTextArea}
                areaPlaceholder={'Ввести заголовок списка'}
                btnAddCardValue={'Добавить список'}
                btnCloseCardValue={'закрыть'}
                isButtonNeed={true}
              />
            }
          </div>
          </React.Fragment>
        )
    }
}
