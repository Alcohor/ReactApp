import { TabBar } from 'antd-mobile';
import React, {Component} from 'react'
import uuid from 'uuid'
import { Link } from 'react-router-dom'

import * as MainStyled from './styledComponent'

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

import Home from '../home'
import ClassifyContainer from '../classify/ClassifyContainer'


class MainContainer extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      tabs:[
          { id: uuid(), title: '主页', selected: 'home', component: <Home/>,  icons: { default: home, active: homeActive } },
          { id: uuid(), title: '分类', selected: 'kinds', component: <ClassifyContainer/>, icons: { default:  more, active: moreActive } },
          { id: uuid(), title: '发现', selected: 'founds', component: '46', icons: { default: found, active: foundActive } },
          { id: uuid(), title: '购物车', selected: 'cart', component: '416', icons: { default: home, active: homeActive } },
          { id: uuid(), title: '我的', selected: 'main', component: '452321', icons: { default: mine, active: mineActive } },
      ]
    };
  }


  render() {
    return (
      <MainStyled.MainWrapper>
        <TabBar
          onClick={alert.bind(1)}
          unselectedTintColor="f4f4f8"
          tintColor="#ff4683"
          barTintColor="#white"
          hidden={this.state.hidden}
        >
        {this.renderTableBarItem()}
        </TabBar>
      </MainStyled.MainWrapper>
    );
  }

  renderTableBarItem(){
    let { tabs } = this.state
    return tabs.map(tab=>(
        <TabBar.Item
        title={tab.title}
        key={tab.id}
        icon={ <MainStyled.TabIcon url={tab.icons.default}/> }
        selectedIcon={ <MainStyled.TabIcon url={tab.icons.active}/> }
        selected={this.state.selectedTab === tab.selected}
        onPress={() => {
          this.setState({
            selectedTab:  tab.selected,
          });
        }}
        data-seed="logId"
        >
          {tab.component}
        </TabBar.Item> 
    ))
  }

}

export default  MainContainer 