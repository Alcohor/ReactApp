import React from 'react'
import {withRouter} from 'react-router-dom';

import * as styled from './styledComponent'

const BackBtn = (props)=>{
    return(
        <styled.BtnComponent onClick={props.history.goBack}>
            <i className="fa fa-angle-left"></i>
        </styled.BtnComponent>
    )
}



export default withRouter(BackBtn);