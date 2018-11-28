import React,{Component} from 'react'

import styled from 'styled-components'
import ClassifyContainer from './ClassifyContainer';

export const Header = styled.div`
    width:100%;
    position:relative;
    height:1.2rem;
    background-color:#fff;
    h1{
        margin:0;
        width:100%;
        height: 100%;
        text-align:center;
        line-height: 1.2rem;
        color: #4c4d53;
        font-size: .34666667rem;
    }
    span{
        position:absolute;
        right:.266667rem;
        top:0;
        height: 100%;
        line-height: 1.2rem;
        font-size:.586667rem;
    }
`

export const ClassifyWrap = styled.div`
    width:100%;
    height:100vh;
`

export const ContentBox = styled.div`
    display:flex;
    justify-content:space-between;
    margin-top:60px;
    flex-wrap:wrap;
    padding:0 20px;
`