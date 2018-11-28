import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import uuid from 'uuid'



import {MainNavWraper,MainNavItem} from './styledComponent'


class MainNavLink extends Component{
    constructor(props){
        super(props)
        this.state={
            data:[
                { id: uuid(), title: '主页', to: '/home',icon:'fa-home'},
                { id: uuid(), title: '分类', to: '/classify',icon:'fa-align-justify'},
                { id: uuid(), title: '发现', to: '/founds',icon:'fa-superpowers'},
                { id: uuid(), title: '购物车', to: '/cart',icon:'fa-shopping-cart'},
                { id: uuid(), title: '我的', to: '/main',icon:'fa-user'}
            ]
        }
    }
    

    render(){
        return(
            <MainNavWraper>
                {this.state.data.map(val=>
                    <MainNavItem key={val.id}>
                        <NavLink to={val.to} >
                        <i className={'fa '+val.icon}></i>
                        <h1>{val.title}</h1>
                        </NavLink>
                    </MainNavItem>
                    )}
            </MainNavWraper>
        )
    }
    


}


export default MainNavLink