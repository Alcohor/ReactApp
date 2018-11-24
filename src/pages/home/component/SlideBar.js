import React ,{Component} from 'react'
import { Carousel, WingBlank } from 'antd-mobile';

class SlideBar extends React.Component {

  constructor(props){
      super(props)
      this.state = {
        data: 1,
        index:0,
      }
  }
  
  componentDidMount() {
    // simulate img loading
    
      this.setState({
        data: this.props,
      });
  }
  render() {
    return (
      <WingBlank>
        <Carousel
          autoplay={false}
          cellSpacing={20}
          dots={false}
          slideWidth={0.2}
          afterChange={index => {this.setState({
            index:index
          })
        console.log(this.state.index)
        }}
        >
          {this.renderImg()}
        </Carousel>
      </WingBlank>
    );
  }

  renderImg(){
    let { data } = this.state.data
    console.log(data,111111111)
    if (  this.state.data===1 ) return '';
    
    return( data.map(val => 
      <a
        key={val}
        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight}}
      >
        <img
          src={val.img}
          alt=""
          style={{ width: '100%', verticalAlign: 'top' }}
          onLoad={() => {
            // fire window resize event to change height
            window.dispatchEvent(new Event('resize'));
            this.setState({ imgHeight: 'auto' });
          }}
        />
      </a>
    ))
  }

}

 export default SlideBar