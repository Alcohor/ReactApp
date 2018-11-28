import React from 'react'

export const  MainContainerBox = (props)=>{
    return(
        <div className="main-container-box" dangerouslySetInnerHTML={{ __html: props.info }}>
        </div>
    )
}