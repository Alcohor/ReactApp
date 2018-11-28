import React,{Component} from 'react'
import {Header,ClassifyWrap,ContentBox} from './styledComponent'
import SlideBar from './content/SlideBar'
import MainNavLink from '@common/navLink'
import { connect } from 'react-redux'
import Card from './content/Card'



class ClassifyContainer extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <ClassifyWrap>
                <Header>
                    <h1>分类</h1>
                    <span>···</span>
                </Header>
                <SlideBar></SlideBar>
                <ContentBox>
                    {this.renderContainerBox()}
                </ContentBox>
                <MainNavLink></MainNavLink>
            </ClassifyWrap>

        )
    }

    renderContainerBox(){
        console.log(this.props,1)
        if(!this.props.data.data.goodsPage) return ''
        console.log(this.props.data.data.goodsPage.list,1)
        let data = this.props.data.data.goodsPage.list
        return(
            data.map(val=><Card data={val} key={val.id}/>)
        )
        
    }

}




const mapStateToProps = (state)=>{
    return {
        data:state.classifyData
    }
}




export default connect( mapStateToProps )( ClassifyContainer );