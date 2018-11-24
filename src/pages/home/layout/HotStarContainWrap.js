import React,{Component,Fragment} from 'react'
import axios from 'axios'
import ContinerTitleBar from '../component/ContinerTitleBar'
import Card from '../component/Card'
import SlideBar from '../component/SlideBar'
class HotStarContainWrap extends Component{

    constructor(props){
        super()
        this.state={
            data:1,
            title:"热门明星"
        }
    }
   async componentDidMount(){
         let starsData = await axios.get('/yyt/api/artist/indexList.json?equipmentName=WAP&num=10')
         this.setState({
             data:starsData.data
         })
    }

    render(){
        return(
            <div className="hot-star-contain-wrap">
                <ContinerTitleBar title={this.state.title}/>
                {this.renderSliderBar()}
            </div>
        )
    }

    renderSliderBar(){
        if(this.state.data===1) return ''
        let data=this.state.data.data
        return(
            <SlideBar data={data}/>
        )
    }


    renderItem(){
        
    }




}

export default HotStarContainWrap