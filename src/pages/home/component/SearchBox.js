import React, {Component} from 'react'

import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';

class SearchBox extends Component {
  render() {
    return (<div>
      <SearchBar
        placeholder="搜索偶像、商品"
        ref={ref => this.manualFocusInst = ref}
      /> 
    </div>);
  }
}

export default SearchBox
