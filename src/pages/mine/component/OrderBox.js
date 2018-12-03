import React , { PureComponent } from 'react'
import { OrderWrap, List, OrderIconBox } from './styledComponent'
import OrderIconItem from './OrderIcon'

class OrderBox extends PureComponent{

    constructor(props){
        super(props)
        this.state={
            data :[
                {id:1,title:"全部订单",icon:"sticky-note-o"},
                {id:2,title:"待付款",icon:"credit-card"},
                {id:3,title:"待发货",icon:"truck"},
                {id:4,title:"待收货",icon:"check-circle-o"}, 
            ]
        }
    }
    render(){
        return(
            <OrderWrap>
                <List>我的订单</List>
                <OrderIconBox>
                {this.state.data.map(item=>(
                    <OrderIconItem key={item.id} data={item}/>
                ))}
                </OrderIconBox>
            </OrderWrap>
        )
    }
}

export default OrderBox