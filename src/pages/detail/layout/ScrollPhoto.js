import React ,{Component} from 'react'

import { Carousel, WingBlank } from 'antd-mobile';

import axios from 'axios'

class ScrollPhoto extends Component {

  constructor(props){
    super(props)

    this.state = {
      data: [],
      imgHeight: 176,
      slideIndex: 2,
    }
  }

 
  componentWillMount() {
      console.log(this.props.data,1010)
      this.setState({
        data: this.props.data,
      });
  }




  componentDidUpdate() {
    if (this.state.slideIndex !== this.state.data.length - 1) {
      
      this.setState({ slideIndex: this.state.data.length - 1 });
    }
  }

  render() {
    return (
      <WingBlank className="scroll-photo">
        <Carousel
          autoplay={true}
          infinite
        >
          {this.renderImg()}
        </Carousel>
      </WingBlank>
    );
  }

  renderImg(){
    let { data } = this.state
    if ( !data.length ) return '';
    return( data.map(val => 
      <a
        key={val}
        href="#"
        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight}}
      >
        <img
          src={val.thumbUrl}
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

export default  ScrollPhoto