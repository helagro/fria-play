import React, { FunctionComponent } from 'react';
import styles from "./style/MobileAppBar.module.css"
import backArrow from "./img/ic-arrows-left.svg"
import menu from "./img/ic-actions-menu.svg"

function MobileAppBar(){
    return (
        <div className={styles.appBarBar}>
            <img src={backArrow} className={styles.appBarIcon}/>
            <h2>
                This is an app bar 
            </h2>
            <img src={menu} className={styles.appBarIcon}/>
        </div>
    )
}

export default MobileAppBar