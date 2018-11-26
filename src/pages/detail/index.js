import React ,{Component} from 'react'
import axios from 'axios'
import HeadMenu from './layout/HeadMenu'
import ScrollPhoto from './layout/ScrollPhoto'
import InfroBox from './layout/InfoBox'

import './stylesheet/index.scss'

class detail extends Component{
    constructor(props){
        super(props)
        this.state={
            data:1
        }
    }
   async componentWillMount(){
        let { id }= this.props.match.params
        let {data} = await axios.get("/yyt/details",{params:{goodsId:id}})
       this.setState({
           data:data
       })
       console.log(this.state.data)


    }
    render(){
        return(
            <div>
                <HeadMenu/>
                {this.renderScrollImg()}
                {this.renderInfoBox()}
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

    renderInfoBox(){
        if(this.state.data===1) return ''
        let {description,price} = this.state.data.goodsDetail
        return(
            <InfroBox goodsName={description} price={price}></InfroBox>
        )
    }

}

export default detail