import { BtnComponent , MenuBox } from './styledComponent'
import React from 'react'

const MenuBar =()=>{
    return(
        <MenuBox>
            <BtnComponent>
                <i className="fa fa-share-alt"></i>
            </BtnComponent>
            <BtnComponent>
                <i className="fa fa-ellipsis-h"></i>
            </BtnComponent>
        </MenuBox>
    )
}

export default MenuBar