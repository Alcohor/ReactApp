import React ,{Component} from 'react'
import axios from 'axios'
// import HeadMenu from './layout/HeadMenu'
import Header from '@common/header'
import ScrollPhoto from './layout/ScrollPhoto'
import InfroBox from './layout/InfoBox'
import { MainContainerBox } from './layout/MainContainerBox'

import './stylesheet/index.scss'

class detail extends Component{
    constructor(props){
        super(props)
        this.state={
            data:1,
            info:1,
            headInfo:{
                hasMenu:true,
                hasTitle:false,
                back : true,
                color: "#666",
                isSolo:false,
                BackgroundColor:"transparent"
                
            }
        }
    }
   async componentWillMount(){
        let { id }= this.props.match.params
        let {data} = await axios.get("/yyt/details",{params:{goodsId:id}})
       this.setState({
           data:data
       })
       
       let goodsDetailsInfo = await axios.get("/yyt/goods-desc",{params:{goodsId:id}})
       let {info} = goodsDetailsInfo.data
       this.setState({
           info:info
       })


    }
    render(){
        return(
            <div>
                {/* <HeadMenu/> */}
                <Header headInfo={this.state.headInfo}/>
                {this.renderScrollImg()}
                {this.renderInfoBox()}
                {this.renderMainContainerBox()}
            </div>
        )
    }
    renderScrollImg(){
        if(this.state.data===1) return ''
        let data = this.state.data.goodsDetail.descImages
        return(
            <ScrollPhoto data={data}></ScrollPhoto>
        )
    }

    renderMainContainerBox(){
        if( this.state.info === 1 ) return ''
        let { info } = this.state
        return(
            <MainContainerBox info={info}/>
        )
    }

    renderInfoBox(){
        if(this.state.data===1) return ''
        let {description,price} = this.state.data.goodsDetail
        return(
            <InfroBox goodsName={description} price={price}></InfroBox>
        )
    }

}

export default detail