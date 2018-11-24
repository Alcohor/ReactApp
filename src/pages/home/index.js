import React ,{Component} from 'react'

import SearchGroupHeader from './layout/SearchGroupHeader'
import  ScrollBanner from './layout/ScrollBanner'
import NavWrap from './layout/NavWrap'
import NewGoodsContainerWrap from './layout/NewGoodsContainerWrap'
import HotStarContainWrap from './layout/HotStarContainWrap'
import './stylesheets/index.scss'

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
                <NewGoodsContainerWrap/>
                <HotStarContainWrap/>
            </div>
        )
    }


}


export default Home