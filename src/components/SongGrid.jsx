import React from 'react'
import style from "./style/SongGrid.module.css"
import SongInfoLarge from "./SongInfoLarge"
import survival from './img/survival.jpg'

function SongGrid() {
    return (
        <div className={style.container}>
            <SongInfoLarge image={survival}/>
        </div>
    )
}

export default SongGrid
