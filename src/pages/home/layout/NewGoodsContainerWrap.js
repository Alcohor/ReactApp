import React,{Component,Fragment} from 'react'
import axios from 'axios'
import ContinerTitleBar from '../component/ContinerTitleBar'
import Card from '../component/Card'

class NewGoodsContainerWrap extends Component{

    constructor(props){
        super()
        this.state={
            data:1,
            title:"新品首发"
        }
    }
   async componentDidMount(){
         let goodsData = await axios.get('/yyt/api/goods/findNewGoods.json?num=1')
         this.setState({
             data:goodsData
         })
         console.log(goodsData.data.data.goodsMap)
    }

    render(){
        return(
            <div className="new-goods-contaier-wrap">
                <ContinerTitleBar title={this.state.title}/>
                <div className="main-wrap">
                    {this.renderItem()}
                </div>
            </div>
        )
    }


    renderItem(){
        
        if(this.state.data===1) return ''
        let {goodsMap} = this.state.data.data.data
        let temp=[]
            for(let key in goodsMap){
                goodsMap[key].forEach(element => {
                    temp.push(element)
                });
            }
        return(
            temp.map(val=>(
                    <Card data={val} key={val.id}/>
                )
            )
        )   
        
    }




}

export default NewGoodsContainerWrap