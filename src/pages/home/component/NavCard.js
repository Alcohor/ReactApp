import React,{PureComponent} from 'react'
import { Grid } from 'antd-mobile';

class NavCard extends PureComponent {

    render(){
        let { data } = this.props
        return(
            <div>
                <div className="sub-title"></div>
                <Grid 
                    data={data}
                    activeStyle={false} 
                    square={false} 
                    itemStyle={{ height: '1.857rem' }}  
                    columnNum={2}/>
            </div>
        )
    }
}
  
export default NavCard