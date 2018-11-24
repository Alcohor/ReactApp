import React,{PureComponent} from 'react'
import { Grid } from 'antd-mobile';




class NavCard extends PureComponent {

    constructor(props){
        super(props)
    }

    render(){
        let { data } = this.props
        console.log(data)
        return(
            <div>
                <div className="sub-title"></div>
                <Grid data={data} activeStyle={false} square={false} itemStyle={{ height: '1.857rem' }}  columnNum={2}/>
            </div>
        )
    }

}
  

export default NavCard