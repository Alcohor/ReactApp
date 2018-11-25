import React,{Component,Fragment} from 'react'
import axios from 'axios'
import ContinerTitleBar from '../component/ContinerTitleBar'
import CardBox from '../component/CardBox'
import SlideBar from '../component/SlideBar'
import { __await } from 'tslib';
class HotStarContainWrap extends Component{

    constructor(props){
        super()
        this.state={
            data:1,
            goodsModelList:1,
            starInfo:1,
            title:"热门明星"
        }
        this.handleChange = this.handleChange.bind(this)
        this.getNewStarInfo =this.getNewStarInfo.bind(this)
    }
   async componentDidMount(){
         let starsData = await axios.get('/yyt/api/artist/indexList.json?equipmentName=WAP&num=10')
         let temp = starsData.data.data[0]
         this.setState({
             data:starsData.data,
             goodsModelList:temp.goodsModelList,
             starInfo:{artistId:temp.id,artistName:temp.name,num:6}
         })
    }

    async getNewStarInfo(){
        let {starInfo}=this.state
        let _goodsModelList = await axios("/yyt/api/goods/indexList.json",{params:{...starInfo}})
        this.setState({
            goodsModelList:_goodsModelList.data.data

        })
}

    render(){
        return(
            <div className="hot-star-contain-wrap">
                <ContinerTitleBar title={this.state.title}/> 
                {this.renderSliderBar()}
                {this.renderCardContain()}
            </div>
        )
    }

    handleChange(_starInfo){
        this.setState({
            starInfo:_starInfo
        })
        this.getNewStarInfo()
    }

    renderSliderBar(){
        if(this.state.data===1) return ''
        let data=this.state.data.data
        let starInfo = this.state.starInfo
        return(
            <SlideBar data={data} starInfo={starInfo} handleChange={this.handleChange}/>
        )
    }

    renderCardContain(){
        if(this.state.starInfo ===1 || this.goodsModelList === 1) return''
        let { starInfo,goodsModelList } = this.state
        
        
        return <CardBox title={starInfo.artistName} data={goodsModelList} />
    }


    renderItem(){
        
    }




}

export default HotStarContainWrap