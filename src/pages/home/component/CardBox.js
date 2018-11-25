import React ,{Component} from 'react'
import Card from './Card'
class CardBox extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="card-box">
                <h1 className="title">{this.props.title}</h1>
                <div className="card-wrap">
                {this.renderCard()}
                </div>
            </div>
        )
    }

    renderCard(){
        return(this.props.data.map(val=><Card key={val.id} data={val}/>))
    }

}
export default CardBox