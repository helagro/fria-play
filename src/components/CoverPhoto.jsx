import React, { FunctionComponent } from 'react';
import image from "./img/ic-arrows-left.svg"
import style from "./style/CoverPhoto.module.css"


function CoverPhoto(props){
    return (
        <img src={props.image} className={[style.CoverPhotoImage, props.className].join(" ")}/>
    )
}

export default CoverPhoto