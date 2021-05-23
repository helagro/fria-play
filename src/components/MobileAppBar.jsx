import React, { FunctionComponent, useState} from 'react';
import styles from "./style/MobileAppBar.module.css"
import menu from "./img/ic-actions-menu.svg"
import googleDrive, {getDriveInstance} from "../logic/googleDriveApi"


function MobileAppBar(props){
    const [displayDropdown, setDisplayDropdown] = useState(false)
    function toggleDropdown(){
        setDisplayDropdown(!displayDropdown)
    }

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    console.log("loaded, logged in:" + isLoggedIn)

    function driveListener(msg){
        console.log("drive listener "+msg)

        switch(msg){
            case "signed_out":
            case "signed_in": 
                
                break
        }
    }
    const driveInstance = getDriveInstance(driveListener)


    return (
        <div className={styles.appBarBar} style={props.style}>

            <img src={props.iconOne} className={styles.iconOne}/>
            <div></div>
            <img src={props.iconTwo} className={styles.iconTwo} onClick={toggleDropdown}/>
            <ul className={styles.dropDown} style={{"display": displayDropdown ? "block" : "none"}}>
                <button onClick={()=>{driveInstance.changeLoginStatus(true);setIsLoggedIn(!isLoggedIn)}}>{isLoggedIn ? "Log out" : "Log in"}</button>
            </ul>
        </div>
    )
}



export default MobileAppBar