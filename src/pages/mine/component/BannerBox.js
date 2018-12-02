
import React ,{PureComponent} from 'react'
import { BannerWrap, AvatarBox,  AvatarImg, Btn} from './styledComponent'
class BannerBox extends PureComponent{
    
    constructor(props){
        super(props)
    }
    render(){
        return(
            <BannerWrap>
                <AvatarBox>
                    <AvatarImg>未登录</AvatarImg>
                    <Btn>登录/注册</Btn>
                </AvatarBox>
            </BannerWrap>
        )
    }
}

export default BannerBox
