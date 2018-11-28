import React,{Component} from 'react'
import {Header,ClassifyWrap} from './styledComponent'
import SlideBar from './content/SlideBar'

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
            </ClassifyWrap>
        )
    }

}

export default ClassifyContainer;