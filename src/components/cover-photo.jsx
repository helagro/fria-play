import React, { FunctionComponent } from 'react';
import image from "./img/ic-arrows-left.svg"

const coverPhotoStyle= {
    height: "70px",
    width: "70px"
}

function CoverPhoto(props){
    console.log(props.image)
    return (
        <img src={props.image} style={coverPhotoStyle}/>
    )
}

export default CoverPhoto