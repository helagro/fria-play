import React, { FunctionComponent, useState} from 'react';
import styles from "./style/MobileAppBar.module.css"
import menu from "./img/ic-actions-menu.svg"
import googleDrive, {getDriveInstance} from "../logic/googleDriveApi"



function MobileAppBar(props){
    const [displayDropdown, setDisplayDropdown] = useState(false)

    function toggleDropdown(){
        setDisplayDropdown(!displayDropdown)
    }

    return (
        <div className={styles.appBarBar} style={props.style}>

            <img src={props.iconOne} className={styles.iconOne}/>
            <div></div>
            <img src={props.iconTwo} className={styles.iconTwo} onClick={toggleDropdown}/>
            <ul className={styles.dropDown} style={{"display": displayDropdown ? "block" : "none"}}>
                <button onClick={getDriveInstance().handleAuthClick}>Login</button>
            </ul>
        </div>
    )
}



export default MobileAppBar