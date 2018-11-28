import styled from 'styled-components'


export const MainNavWraper = styled.div`
    width:100%;
    display:flex;
    z-index:9999;
    flex-wrap:nowrap;
    justify-content:space-between;
    align-items:center;
    height:50px;
    position:fixed;
    background-color:#fff;
    bottom:0;
`

export const MainNavItem = styled.span`
    display:inline-block;
    width:25%;
    margin:0;
    height:37px;
    a{  color:#696969;
        flex-grow:1;
        display:flex;
        flex-direction:row;
        justify-content:center;
        align-items:center;
        display:inline-block;
        width:100%;
        &.active{
        color:#F14583;
        }
        i{
            display:inline-block;
        width:100%;
        text-align:center;
        font-size:22px;
        }
        h1{
            font-size: 10px;
            margin: 3px 0 0 0;
            line-height: 1;
            text-align: center;
        } 
    }
`

