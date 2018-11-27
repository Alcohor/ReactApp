import React from 'react'

export const  MainContainerBox = (props)=>{
        console.log(props,10)
        return(
            <div className="main-container-box" dangerouslySetInnerHTML={{ __html: props.info }}>
            </div>
        )
}