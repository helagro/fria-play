import React, { FunctionComponent } from 'react';
import CoverPhoto from './CoverPhoto';
import style from "./style/RoundedTextAndImageButton.module.css"


function RoundedTextAndImageButton(props){
    return (
        <div className={style.roundedButton}>
            <img src={props.image}></img>
            <p>{props.title}</p>
        </div>
    )
}

export default RoundedTextAndImageButton