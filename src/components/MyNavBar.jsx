import React from 'react'
import style from "./style/MyNavBar.module.css"
import houseImg from "./img/house.svg"
import compassImg from "./img/compass.svg"
import imageLibImg from "./img/image-library.svg"

function MyNavBar() {
    return (
        <div className={style.containersContainer}>
            <div className={style.container}>
                <img src={houseImg}/>
                <img src={compassImg}/>
                <img src={imageLibImg}/>
            </div>
        </div>
    )
}

export default MyNavBar
