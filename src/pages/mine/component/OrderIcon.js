import React, {Components} from 'react'
import { OrderIconWrap } from './styledComponent';

const OrderIconItem=(props)=>{
    return(
        <OrderIconWrap>
            <i className={"fa fa-"+props.data.icon}></i>
            <p>{props.data.title}</p>
        </OrderIconWrap>
    )
}

export default OrderIconItem