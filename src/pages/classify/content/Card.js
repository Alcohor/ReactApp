import React ,{PureComponent} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import actionCreators from '../../../store/goodsInfo/actionCreators'
import { CardWraper ,DiscountPrice, Price} from './styledComponent'
class Card extends PureComponent{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props,101010101010)
        let { headImg,title,id } = this.props.data
        let params = {goodsId:id}
        return(
            <Link to={ {pathname:`/detail/${ id }`} }   >
                <CardWraper onClick = { this.props.getGoodsInfo.bind(this,params)}>
                    <img src={this.props.data.bigHeadImg}/>
                    <h1>{this.props.data.title}</h1>
                    < Price>￥ {this.props.data.price}</Price>
                    <DiscountPrice>￥ {this.props.data.originalPrice}</DiscountPrice>
                    
                </CardWraper>
            </Link>
        )
    }
}

const mapDispatchProps = (dispatch)=>{
    return{
        getGoodsInfo(params){
            dispatch(actionCreators.asyncGetGoodsInfo(params))
        }
    }    
}

export default connect(null,mapDispatchProps)(Card)