import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import uuid from 'uuid'

import cart from '@As/imgs/cart.png'
import cartActive from '@As/imgs/cart-active.png'
import found from '@As/imgs/found.png'
import foundActive from '@As/imgs/found-active.png'
import home from '@As/imgs/home.png'
import homeActive from '@As/imgs/home-active.png'
import mine from '@As/imgs/mine.png'
import mineActive from '@As/imgs/mine-active.png'
import more from '@As/imgs/more.png'
import moreActive from '@As/imgs/more-active.png'

class mainNavLink extends Component{
    constructor(props){
        super(props)
        this.state={
            data:[
                { id: uuid(), title: '主页', to: '/home',icon:'fa-home'},
                { id: uuid(), title: '分类', to: '/kinds',icon:'fa-align-justify'},
                { id: uuid(), title: '发现', to: '/founds',icon:'fa-superpowers'},
                { id: uuid(), title: '购物车', to: '/cart',icon:'fa-shopping-cart'},
                { id: uuid(), title: '我的', to: '/main',icon:'user'}
            ]
        }
    }
    

    render(){
        return(
        
        )
    }
    


}