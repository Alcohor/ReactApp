
import React from 'react'
import BackBtn from './BackBtn'
import MenuBar from './MenuBar'
import * as Styled from './styledComponent'

const Header = (props)=>{
    return (
        <Styled.HeaderWrap props={props.headInfo}>
        ${props.headInfo.back ? <BackBtn/> : ''}
        ${props.headInfo.hasTitle ? <Styled.TitleBar>{props.HeadInfo.title}</Styled.TitleBar> :''} 
        ${props.headInfo.hasMenu ? <MenuBar/> : ''}
        </Styled.HeaderWrap>
    )
}
export default Header