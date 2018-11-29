import React,{PureComponent}from 'react'
import { ActivityIndicator, WingBlank, WhiteSpace, Button } from 'antd-mobile';
import {connect} from 'react-redux'

class LoadingTips extends PureComponent {
  
  render() {
    return (
      <div>
        <WingBlank>
            <div className="toast-example">
              <ActivityIndicator
                toast
                text="正在加载..."
                animating={this.props.isLoading}
              />
            </div>
        </WingBlank>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.loading.isLoading
    }
}

export default connect( mapStateToProps)(LoadingTips)