import React ,{PureComponent} from 'react'

import SearchBox from '../component/SearchBox'

class SearchGroupHeader extends PureComponent{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="search-group-header"> 
                <span className="head-logo-wrap">
                    <i className="head-logo fa fa-pinterest"></i>
                </span>
                <span className="search-wrap">
                    <SearchBox/>
                </span>
            </div>
        )
    }

}

export default SearchGroupHeader
