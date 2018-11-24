import React ,{Component} from 'react'
import axios from 'axios'
import NavCard from '../component/NavCard';


class NavWrap extends Component{
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }

    async componentWillMount(){
        let cardData = await axios.get('/yyt/api/hotKeyword/indexList.json?equipmentName=WAP&num=6')
        this.setState(
            {data:cardData.data.data}
        )

    }

    render(){
        return(
            <div className="nav-wrap">
                <div className="new-goods-wrap">
                    {this.renderNavCard()}  
                </div>
            </div>
        )
    }

    renderNavCard(){
        if(!this.state.data.length) {
            
            return ''
        }
        let { data } = this.state
        let temp =[]
        data.forEach(val => {
           
            temp.push({icon:val.img,text:val.name})
        });
        return <NavCard data={temp}/>

    }
}

export default NavWrap

