import React ,{Component} from 'react'

import SearchGroupHeader from './layout/SearchGroupHeader'
import  ScrollBanner from './layout/ScrollBanner'
import NavWrap from './layout/NavWrap'
import NewGoodsContainerWrap from './layout/NewGoodsContainerWrap'
import HotStarContainWrap from './layout/HotStarContainWrap'
import './stylesheets/index.scss'

import MainNavLink from '@common/navLink'

class Home extends Component {
    constructor(props){
        
        super(props)

    }

    render(){
        return(
            <div className="home-wraper">
                <SearchGroupHeader/>
                <ScrollBanner/>
                <NavWrap/>
                <NewGoodsContainerWrap tips="最新专辑、周边上架"/>
                <HotStarContainWrap/>
                <MainNavLink></MainNavLink>
            </div>
        )
    }


}


export default Home