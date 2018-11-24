import React ,{Component} from 'react'

import { Carousel, WingBlank } from 'antd-mobile';

import axios from 'axios'

class ScrollBanner extends Component {

  constructor(props){
    super(props)

    this.state = {
      data: [],
      imgHeight: 176,
      slideIndex: 2,
    }
    

  }

 
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }

  async componentDidMount(){

    let scrollBannerData = await axios.get("/yyt/api/carousel/indexList.json?equipmentName=WAP&num=5")
    this.setState({
      data: scrollBannerData.data.data
    });


  }


  componentDidUpdate() {
    if (this.state.slideIndex !== this.state.data.length - 1) {
      
      this.setState({ slideIndex: this.state.data.length - 1 });
    }
  }

  render() {
    return (
      <WingBlank className="scroll-banner">
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

export default  ScrollBanner