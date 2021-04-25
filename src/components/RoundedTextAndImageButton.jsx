import React, { FunctionComponent } from 'react';
import CoverPhoto from './CoverPhoto';

const buttonStyle = {
    backgroundColor:"#FAFAFA",
    borderRadius: "4em",
    height: "3.5em",
}

const buttonTitleStyle = {
    textAlign:"center",
}

function RoundedTextAndImageButton(props){
    return (
        <div className="rounded-button" style={buttonStyle}>
            <p style={buttonTitleStyle}>{props.title}</p>
        </div>
    )
}

export default RoundedTextAndImageButton