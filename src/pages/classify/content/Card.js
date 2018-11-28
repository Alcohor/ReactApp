import React ,{PureComponent} from 'react'
import connect from 'react-redux-connect-alcohor'
import { CardWraper ,DiscountPrice, Price} from './styledComponent'
class Card extends PureComponent{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props,101010101010)
        return(
            <CardWraper>
                <img src={this.props.data.bigHeadImg}/>
                <h1>{this.props.data.title}</h1>
                < Price>￥ {this.props.data.price}</Price>
                <DiscountPrice>￥ {this.props.data.originalPrice}</DiscountPrice>
                
            </CardWraper>
        )
    }
}

export default Card