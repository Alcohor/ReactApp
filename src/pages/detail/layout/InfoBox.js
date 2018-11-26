import React,{PureComponent} from 'react'

class InfoBox extends PureComponent{
    constructor(props){
        super(props)
    }
    render(){
        
        let {goodsName,price} = this.props
        return(
            <div className="info-box">
                <div className="info-scrib">
                    <p className="goodsName">{goodsName}</p>
                    <p className="goodsPrice">￥{price}</p>
                </div>
                <div className="quality-guarantee">
                <img src="https://s.yytcdn.com/v2/images/h5/goodssureicon_03.png"></img>
                </div>
            </div>
        )
    }
}
export default InfoBox