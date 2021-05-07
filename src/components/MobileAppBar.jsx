import React, { FunctionComponent } from 'react';
import styles from "./style/MobileAppBar.module.css"
import menu from "./img/ic-actions-menu.svg"

function MobileAppBar(props){
    return (
        <div className={styles.appBarBar} style={props.style}>

            <img src={props.iconOne} className={styles.iconOne}/>
            <div></div>
            <label for="optionAlternatives">
                <img src={props.iconTwo} className={styles.iconTwo}/>
            </label>
            <select name="optionAlternatives">
                <option value="Login">
                    Login
                </option>
            </select>
        </div>
    )
}

export default MobileAppBar