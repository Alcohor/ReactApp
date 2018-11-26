import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Card extends Component {
    constructor(props){
        super(props)
    }
    
    render(){
        let { headImg,title,id }= this.props.data
        return(
            <Link to={{pathname:`/detail/${id}`}} >
                <div className="card-dis">
                    <img src={headImg}></img>
                    <p className="goods-title">{title}</p>
                </div>
            </Link>
        )
    }

}

export default Card