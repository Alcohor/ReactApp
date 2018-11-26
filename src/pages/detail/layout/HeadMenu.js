import React from 'react'
import {Link} from 'react-router-dom'
const headMenu=()=>{
    return(
        <div className="head-menu">
        <Link to="/" >
            <span className="btn back-btn"><i className="fa fa-angle-left"></i></span>
        </Link>
            <div className="btn-wrap">
                <span className="btn share-btn"><i className="fa fa-share-alt"></i></span>
                <span className="btn menu-btn"><i className="fa fa-ellipsis-h"></i></span>
            </div>
        </div>
    )
}

export default headMenu