import React from 'react'
import style from "./style/MyNavBarPc.module.css"
import HomeIcon from "./img/house.svg"
import CompassIcon from "./img/compass.svg"
import LibraryIcon from "./img/image-library.svg"

function MyNavBarPc() {
    return (
        <div className={style.container}>
            <div className={style.menuItem}><img src={HomeIcon}/><p>HOME</p></div>
            <div className={style.menuItem}><img src={CompassIcon}/><p>DISCOVER</p></div>
            <div className={style.menuItem}><img src={LibraryIcon}/><p>LIBRARY</p></div>
        </div>
    )
}

export default MyNavBarPc
