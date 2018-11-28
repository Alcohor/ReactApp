import React ,{Component} from 'react'

class ContainerTitleBar extends Component{

    render(){
        return(
            <div className="contain-title-bar">
                <h1 className="title">
                {this.props.title}
                {this.props.tips ? (<span className="title-tips">{this.props.tips}</span>):''}
                </h1>
                <a className="more-entry">MORE ></a>
            </div>
        )
    }

}

export default ContainerTitleBar