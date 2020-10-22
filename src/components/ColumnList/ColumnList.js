import React,{Component} from "react"
import Card from "../Card/Card"
import TextArea from "../UI/TextArea/TextArea"
import "./ColumnList.css"


export default class ColumnList extends Component {
  constructor(props) {
    super(props);
    this.props = props
  }
  state = {
    isAddCard: false,
    isChangeTittle: false,
    currentTextCard:'',
    column: {
      cardText:[],
      columnTitle:''
    }
  }
  toggleCardHandler = ()=> {
    this.setState({
      isAddCard: !this.state.isAddCard,
      currentTextCard: ''
    })
  }

  cardTextHandler =(e)=> {
    this.setState({
      currentTextCard: e.target.value
    })
  }

  addCardHandler =()=> {
    const arrTextCard = this.state.column.cardText.concat()
    let currentTextCard = this.state.currentTextCard

    arrTextCard.push({text:currentTextCard})

    if (currentTextCard === ''){
      return null
    }else {
      currentTextCard = ''
      this.setState({
        column: {
          columnTitle: this.state.column.columnTitle,
          cardText: arrTextCard
        },
        currentTextCard
      })
    }

  }
  toggleTitle=()=>{
    this.setState({
      isChangeTittle: !this.state.isChangeTittle
    })
  }
  titleTextHandler =(e)=> {
    this.setState({
      column:{
        cardText: this.state.column.cardText,
        columnTitle: e.target.value
      }
    })
  }
  addColumnListTitle =()=> {
    let titleText = this.state.column.columnTitle
    this.setState({
      isChangeTittle: false,
      column: {
        cardText: this.state.column.cardText,
        columnTitle: titleText
      }
    })
  }
  renderAddCard (){
      return (
        <div className={'addCard'}>
          {
            !this.state.isAddCard
            ? <div onClick={this.toggleCardHandler} className={'addCard__hover'}>
                <span>+</span>
                <span>Добавить карточку</span>
              </div>
            : <TextArea
                onChangeArea={this.cardTextHandler}
                btnClickAdd={this.addCardHandler}
                btnClickClose={this.toggleCardHandler}
                areaPlaceholder={'Ввести заголовок для этой карточки'}
                texAreaValue={this.state.currentTextCard}
                btnAddCardValue={'Добавить карточку'}
                btnCloseCardValue={'закрыть'}
                isButtonNeed={true}
              />
          }

        </div>
      )
  }

  render() {
    return(
      <div className={'ColumnList'}>
        { this.state.isChangeTittle
          ? <TextArea
            onChangeArea={this.titleTextHandler}
            texAreaValue={this.state.column.columnTitle}
            focusOff={this.addColumnListTitle}
            isButtonNeed={false}
          />
          : <h2 onClick={this.toggleTitle}>{this.state.column.columnTitle}</h2>
        }
        {this.state.column.cardText.map((card ,index) => {
          return(
             <Card cardText={card.text} key={index}/>
            )
        })}
        {this.renderAddCard()}
      </div>
      )
  }
}