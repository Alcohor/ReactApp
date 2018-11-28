import Card from './content/Card'
import { connect } from 'react-redux'
import React,{ Component } from 'react'
import SlideBar from './content/SlideBar'
import MainNavLink from '@common/navLink'
import { Header,ClassifyWrap,ContentBox } from './styledComponent'

class ClassifyContainer extends Component{
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