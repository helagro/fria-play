import React, { FunctionComponent, useState} from 'react';
import styles from "./style/MobileAppBar.module.css"
import menu from "./img/ic-actions-menu.svg"
import googleDrive, {getDriveInstance} from "../logic/googleDriveApi"

class MobileAppBar extends React.Component{
    driveInstance

    constructor(props){
        super(props)

        //this.driveInstance = getDriveInstance(this.driveListener, this)

        this.state = {
            displayDropdown: false,
            isLoggedIn: false
        }
    }

    driveListener(msg, componentCtx){
        let isLoggedIn
        if(msg == "signed_out") isLoggedIn=false
        else if (msg == "signed_in") isLoggedIn=true

        if(isLoggedIn !== null) return componentCtx.setState({isLoggedIn: isLoggedIn})
    }

    render() {
        let props = this.props

        return (
            <div className={styles.appBarBar} style={props.style}>
    
                <img src={props.iconOne} className={styles.iconOne}/>
                <div></div>
                <img src={props.iconTwo} className={styles.iconTwo} onClick={()=>{this.setState({displayDropdown: !this.state.displayDropdown})}}/>
                <ul className={styles.dropDown} style={{"display": this.state.displayDropdown ? "block" : "none"}}>
                    <button onClick={()=>{this.driveInstance.changeLoginStatus(true, this)}}>{this.state.isLoggedIn ? "Log out" : "Log in"}</button>
                </ul>
            </div>
        )
    }

    componentDidMount(){
        //this.driveInstance.changeLoginStatus(false, this)
    }
}


export default MobileAppBar