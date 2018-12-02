import Card from './content/Card'
import { connect } from 'react-redux'
import React,{ Component } from 'react'
import SlideBar from './content/SlideBar'
import MainNavLink from '@common/navLink'
import Header from '@common/header'
import {ClassifyWrap,ContentBox } from './styledComponent'

class ClassifyContainer extends Component{
    constructor(props){
        super(props)
        this.state={
            headInfo:{
                hasMenu:false,
                hasTitle:true,
                title:"分类",
                back : false,
                color: "#666",
                isSolo:true,
                backgroundColor:"white"
            }
        }
    }

    render(){
        return(
            <ClassifyWrap>
                <Header headInfo={this.state.headInfo}/>
                <SlideBar></SlideBar>
                <ContentBox>
                    {this.renderContainerBox()}
                </ContentBox>
                <MainNavLink></MainNavLink>
            </ClassifyWrap>
        )
    }
    renderContainerBox(){
        if(!this.props.data.data.goodsPage) return ''
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