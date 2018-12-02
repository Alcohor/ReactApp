
import React from 'react'
import BackBtn from './BackBtn'
import MenuBar from './MenuBar'
import * as Styled from './styledComponent'

const Header = (props)=>{
    return (
        <Styled.HeaderWrap isSolo={props.headInfo.isSolo} backgroundColor={props.headInfo.backgroundColor}>
        {props.headInfo.back ? <BackBtn/> : ''}
        {props.headInfo.hasTitle ? <Styled.TitleBar color={props.headInfo.color}>{props.headInfo.title}</Styled.TitleBar> :''} 
        {props.headInfo.hasMenu ? <MenuBar/> : ''}
        </Styled.HeaderWrap>
    )
}
export default Header