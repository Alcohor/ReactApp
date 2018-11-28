import React,{Component} from 'react'

import styled from 'styled-components'
import ClassifyContainer from './ClassifyContainer';

export const Header = styled.div`
    width:100%;
    padding:0 .266667rem;
    position:relative;
    height:45px;
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
        right:10px;
        top:0;
        height: 100%;
        line-height: 1.2rem;
        font-size:22px;
    }
`

export const ClassifyWrap = styled.div`
    width:100%;
`
