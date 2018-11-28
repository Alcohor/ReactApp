import React,{Component} from 'react'
import {Header,ClassifyWrap} from './styledComponent'
import SlideBar from './content/SlideBar'
import MainNavLink from '@common/navLink'
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
                <MainNavLink></MainNavLink>
            </ClassifyWrap>

        )
    }

}

export default ClassifyContainer;