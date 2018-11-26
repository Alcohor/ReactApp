import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import actionCreators from '../../../store/goodsInfo/actionCreators'
import {connect} from 'react-redux'

class Card extends Component {
    constructor(props){
        super(props)
    }
    
    render(){
        let { headImg,title,id }= this.props.data
        let params = {goodsId:id}
        return(
            <Link to={{pathname:`/detail/${id}`}}   >
                <div className="card-dis" onClick={this.props.getGoodsInfo.bind(this,params)}>
                    <img src={headImg}></img>
                    <p className="goods-title">{title}</p>
                </div>
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