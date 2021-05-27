import React, { FunctionComponent, useState} from 'react';
import styles from "./style/MobileAppBar.module.css"
import menu from "./img/ic-actions-menu.svg"
import googleDrive, {getDriveInstance} from "../logic/googleDriveApi"

class MobileAppBar extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            displayDropdown: false,
            isLoggedIn: false
        }
    }

    driveInstance

    //ANCHOR lifecycle
    render() {
        let props = this.props

        return (
            <div className={styles.appBarBar} style={props.style}>
    
                <img src={props.iconOne} className={styles.iconOne}/>
                <div></div>
                <img src={props.iconTwo} className={styles.iconTwo} onClick={()=>{this.setState({displayDropdown: !this.state.displayDropdown})}}/>
                <ul className={styles.dropDown} style={{"display": this.state.displayDropdown ? "block" : "none"}}>
                    <button onClick={()=>{this.driveInstance.changeLoginStatus(true, this, this.driveListener)}}>{this.state.isLoggedIn ? "Log out" : "Log in"}</button>
                </ul>
            </div>
        )
    }
    componentDidMount(){
        this.driveInstance = getDriveInstance()
        this.driveInstance.addListener(this.driveListener, this)
    }


    driveListener(event){
        console.log("appbar drivelistener", event.event)
        switch(event.event){
            case "already setup": 
            case "did init": 
            case "sign in changed": return event.ctx.signInCouldHaveChanged(event)
        }
    }
    signInCouldHaveChanged(event){
        let ctx = event.ctx
        let isSignedIn = event.payload ? event.payload.isSignedIn : ctx.driveInstance.getIsLogin()

        ctx.setState({isLoggedIn: isSignedIn})
    }
}


export default MobileAppBar