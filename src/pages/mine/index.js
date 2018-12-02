import React , { Component } from 'react'
import { MineContainer } from './styledComponent'
import Header from '@common/header'
import BannerBox from './component/BannerBox'
import OrderBox from './component/OrderBox'
class Mine extends Component {
    constructor(props){
        super(props)
        this.state={
            headInfo:{
                hasMenu:true,
                hasTitle:true,
                title:"我的",
                back : true,
                backgroundColor: "#4c4d53",
                color:"white",
                isSolo:true
            }
        }
    }

    render(){
        return(
            <MineContainer>
                <Header headInfo = {this.state.headInfo}/>
                <BannerBox></BannerBox>
                <OrderBox></OrderBox>
            </MineContainer>
        )
    }

}


export default Mine