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


  handleChange=(_starInfo)=>{
    this.props.handleChange(_starInfo)
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
          infinite
          cellSpacing={20}
          dots={false}
          slideWidth={0.25}
          afterChange={index => {this.setState({
            index:index
          })
        let {data} = this.props
         let _starInfo={artistId:data[index].id,artistName:data[index].name,num:6}
         this.handleChange(_starInfo)
        }}
        >
          {this.renderImg()}
        </Carousel>
      </WingBlank>
    );
  }

  renderImg(){
    let { data } = this.state.data
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