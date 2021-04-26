import React, { FunctionComponent } from 'react';
import styles from "./style/MobileAppBar.module.css"
import menu from "./img/ic-actions-menu.svg"

function MobileAppBar(props){
    return (
        <div className={styles.appBarBar}>
            <img src={props.iconOne} className={styles.iconOne}/>
            <div></div>
            <img src={props.iconTwo} className={styles.iconTwo}/>
        </div>
    )
}

export default MobileAppBar