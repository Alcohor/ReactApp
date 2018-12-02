import styled from 'styled-components'

export const HeaderWrap = styled.div`
    width:100%;
    height:49px;
    position:${props=> props.isSolo ? "realtive" : "absolute"};
    top: 0;
    z-index:998;
    background-color:${props => props.backgroundColor ? props.backgroundColor: '#fff'};
    display:flex;
    padding:0 10px;
    justify-content:space-between;
    align-items:center;
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
    flex-grow:1;
    text-align:center;
    line-height: 1.2rem;
    color: ${props => props.color ? props.color : "#666"};
    font-size: .34666667rem;
`
export const MenuBox = styled.div`

`
