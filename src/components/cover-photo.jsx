import React, { FunctionComponent } from 'react';
import image from "./img/ic-arrows-left.svg"

const coverPhotoStyle= {
    height: "70px",
    width: "70px"
}

function CoverPhoto(){
    return (
        <img src={image} style={coverPhotoStyle}/>
    )
}

export default CoverPhoto