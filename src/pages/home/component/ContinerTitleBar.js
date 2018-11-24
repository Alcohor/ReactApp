import React ,{Component} from 'react'

class ContainerTitleBar extends Component{
    
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="contain-title-bar">
                <h1 className="title">{this.props.title}</h1>
                <a className="more-entry">MORE ></a>
            </div>
        )
    }

}

export default ContainerTitleBar