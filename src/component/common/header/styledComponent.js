import styled from 'styled-components'

export const HeaderWrap = styled.div`
    width:100%;
    height:44px;
    background-color:${props => props.color ? props.color : '#fff'};
    display:flex;
    padding:0 10px;
    box-sizing:border-box;
`

export const BtnComponent = styled.span`
    display: inline-block;
    color: #fff;
    width: .906667rem;
    height: .906667rem;
    background-color: rgba(0,0,0,.5);
    border-radius: 50%; 
        i{
            font-size: .533333rem; 
            width: 100%;
            height: 100%;
            text-align: center;
            line-height: .906667rem;
        }
`

export const TitleBar = styled.h1`
    margin:0;
    text-align:center;
    line-height: 1.2rem;
    color: #4c4d53;
    font-size: .34666667rem;
`
export const MenuBox = styled.div`

`
