import React ,{PureComponent} from 'react'

import BScroll from 'better-scroll'
import {connect} from 'react-redux'

import{ScrollItems,ScrollBox,ScrollWrap} from './styledComponent'
import actionCreators from '../../../store/classifyData/actionCreators';

class SlideBar extends PureComponent {
    constructor(props){
        super(props)
       this.state={
            data:[
                {title:"专辑",id:1,link:{bannerType:"ALBUM",pageSize: 10,pageNum: 0}},
                {title:"周边",id:2,link:{bannerType:"SURROUNDING",pageSize: 10,pageNum: 0}},
                {title:"明星潮款",id:3,link:{bannerType:"CHAORENGUAN",pageSize: 10,pageNum: 0}},
                {title:"个护美妆",id:4,link:{bannerType:"CAIZHUANG",pageSize: 10,pageNum: 0}},
                {title:"影漫周边",id:5,link:{bannerType:"DIGIT",pageSize: 10,pageNum: 0}},
                {title:"众筹",id:6,link:{bannerType:"CROWD_FUNDING",pageSize: 10,pageNum: 0}}
            ]
        }
    }



    render(){
        return(
            <ScrollBox ref={el => this.el = el}>
                <ScrollWrap>
                    {this.state.data.map(val=>
                        <ScrollItems key={val.id} onTouchStart={this.props.getNewData.bind(this,val.link)} >{val.title}</ScrollItems>
                    )}
                </ScrollWrap>
            </ScrollBox>

        )
    }

    componentDidMount(){
        new BScroll(this.el,{scrollX:true})
    }


}
const mapDispatchProps = (dispatch)=>{
    return{
        getNewData(params){
            console.log(params)
            dispatch(actionCreators.getNewData(params))
        }
    }
}





export default connect(null, mapDispatchProps)(SlideBar)