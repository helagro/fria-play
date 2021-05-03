import React from 'react'
import Survival from "../components/img/survival.jpg"
import SongInfo from "./SongInfo"
import style from "./style/SongList.module.css"


function SongList(props) {
    return (
        <div className={[style.container, props.className].join(" ")} style={props.style}>
            <SongInfo image={Survival} title="Survival" artist="eminem"/>
            <SongInfo image={Survival}/>
        </div>
    )
}

export default SongList
