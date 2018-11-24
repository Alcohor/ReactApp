import React, {Component} from 'react'

class Card extends Component {
    constructor(props){
        super(props)
    }
    
    render(){
        console.log(this.props)
        let { headImg,title }= this.props.data

        return(
            <div className="card-dis">
                <img src={headImg}></img>
                <p className="goods-title">{title}</p>
            </div>
        )
    }

}

export default Card