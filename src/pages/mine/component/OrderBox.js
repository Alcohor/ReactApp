import React from 'react'
import { OrderWrap, List, OrderIconBox } from './styledComponent'
const OrderBox = ()=>{
    return(
        <OrderWrap>
            <List>我的订单</List>
            <OrderIconBox></OrderIconBox>
        </OrderWrap>
    )
}

export default OrderBox