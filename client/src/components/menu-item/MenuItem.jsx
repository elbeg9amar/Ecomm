import React from 'react';
import { useHistory } from "react-router-dom";

import {
    MenuItemContainer,
    BackgroundImageContainer,
    ContentContainer,
    ContentTitle,
    ContentSubtitle
  } from './menu-item.js'

function MenuItem({title, image, id, size, linkUrl }) {
  
    const history = useHistory()
    return (
        <MenuItemContainer 
            size={size} 
            onClick={() => history.push(`/${linkUrl}`) }>
            <BackgroundImageContainer 
                className="background-image"
                style={{
                backgroundImage:`url(${image})`
                }}
            />
            <ContentContainer className="content">
                <ContentTitle >{title.toUpperCase()}</ContentTitle>
                <ContentSubtitle >Shop Now</ContentSubtitle>
            </ContentContainer>
        </MenuItemContainer>
    )
}

export default MenuItem
